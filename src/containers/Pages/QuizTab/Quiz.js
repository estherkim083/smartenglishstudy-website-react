import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useWindowDimensions from '../../../useWindowDimensions';
import QuizRoomCard from '../../../components/RoomCard/QuizRoomCard';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "15px"
    },      
    button : {
        margin: "10px",
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, 
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.white,
        width:"45%",
        fontFamily: 'CookieRun-Regular',
        fontSize: '15px',
        marginTop: "30px",
        '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark, 
        },
    },
}));

function Quiz(props) {

    const classes = useStyles();
    const [datas, setDatas] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { height, width } = useWindowDimensions();
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    const handleCreateQuizRoom= () => {
        window.location.href="/quiz/make-quiz/create/"+9999999999;
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
                .get(baseURL+"quiz/get-owner-quiz-list/", {
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
                        
                })
                .catch(error => {});
            
        }
    },[isLoaded]);
    return (
        <div className={classes.root}>
            <PapperBlock title="퀴즈 출제방" whiteBg icon="ion-ios-grid-outline" desc="
            퀴즈 출제방을 생성하여 퀴즈를 출제하여 보세요.">
                
                <Grid
                    container
                    alignItems="stretch"
                    justify="space-around"
                    direction="row"
                    spacing={3}
                    >
                    <Grid item xs={12}>
                        <div style= {{marginLeft: `${width-500}px`}}>
                            <Button id="quizcreatebutton" className={classes.button} onClick={handleCreateQuizRoom}>출제하기</Button>   
                        </div>
                    </Grid>
                    
                    {datas!= {} && 
                        Object.entries(datas).map( ([key, value]) => {
                            return <Grid item md={12}>
                                     <QuizRoomCard
                                        id= {key}
                                        owner={localStorage.getItem("email")}
                                        roomtitle={value.room_title}
                                        aboutroom={value.room_desc}
                                        hash= {value.thumbnail}
                                        participating= {true}
                                        type= "QuizOwnerViewRoomCard"
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

export default Quiz;