import React, {useEffect , useState} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RoomCard from '../../../components/RoomCard/RoomCard';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useWindowDimensions from '../../../useWindowDimensions';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Loading from '../../../components/Loading';

const useStyles = makeStyles((theme) => ({
}));

function BookWritingBoardList(props) {

    const classes = useStyles();
    const { height, width } = useWindowDimensions();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps 
    const [datas, setDatas] = useState({});
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;

    const handleWritingFab= ()=> {
        window.location.href= '/writing/book/create/';
    };


    useEffect(() => {
        var author= localStorage.getItem("user_name");
        if(author === null) {
            window.location.href="/auth/email";
        }
        if(localStorage.getItem("MyProfileOnce")) {
            localStorage.removeItem("MyProfileOnce");
        }
        if(localStorage.getItem("ChatMessageOnce")) {
          localStorage.removeItem("ChatMessageOnce");
        } 
        setIsLoaded(true);
    });
    useEffect(() => {
        if(isLoaded) {
            axios
                .get(baseURL+"writing/get-book-writing-room-list/", {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    }
                })
                .then(res => {
                    setDatas(res["data"]);
                    console.log(res["data"]);
                    setIsPageLoaded(true);
                })
                .catch(error => {});
        }

    }, [isLoaded]);
    if(!isPageLoaded) {
        return <Loading/>;
    }
    return (
        <div>
            <PapperBlock title="BookWriting Menu" whiteBg icon="ion-ios-grid-outline" desc="
            ????????? ????????? ?????? ????????????. ????????? ????????? ?????? ????????? Summary ?????? ??????????????? ?????? ???????????? ??????????????????. ">
                
                <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0"}}>
                    <Fab color="secondary" aria-label="add" style={{position: 'relative', marginLeft: '50px', marginTop: '0'}} onClick={handleWritingFab}>
                        <AddIcon />
                    </Fab>
                    <Typography style={{fontFamily:'CookieRun-Regular', fontSize: '20px', marginTop: '14px', marginLeft:'15px'}}>????????? ??? ?????????</Typography>
                </div>
                <Grid
                    container
                    alignItems="flex-start"
                    justify="center"
                    direction="row"
                    style= {{padding: "30px"}}
                    spacing={2}>
                    {datas!= {} && 
                        Object.entries(datas).map( ([key, value]) => {
                            {console.log(value.hash)}
                            return <Grid item md={12}>
                                     <RoomCard
                                        id= {key}
                                        roomtitle={value.room_title}
                                        aboutroom={value.about_room}                                        
                                        topic={value.topic}
                                        hash= {value.hash}
                                        participating= {value.participating}
                                        aboutbook= {value.book_info}
                                        type= "BookWritingRoom"
                                        list
                                        />
                                    </Grid>
                        })
                    }
                </Grid>
            </PapperBlock>
        </div>
    );
} 

export default BookWritingBoardList;