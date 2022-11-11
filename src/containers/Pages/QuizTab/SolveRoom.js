import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useWindowDimensions from '../../../useWindowDimensions';
import axios from 'axios';
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "15px"
    },      
    button : {
        margin: "10px",
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, 
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.white,
        width:"50%",
        fontFamily: 'CookieRun-Regular',
        fontSize: '15px',
        marginTop: "30px",
        '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark, 
        },
    },
}));

function SolveRoom(props) {

    const classes = useStyles();
    const [datas, setDatas] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { height, width } = useWindowDimensions();
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    let { id } = useParams();
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
        }
    },[isLoaded]);
    const handleMoveToSolveRoomView= () => {
        window.location.href= '/quiz/take-quiz/solve/'+id;
    };
    const handleMoveToSolveRoomResultView= ()=> {
        window.location.href= '/quiz/take-quiz/result/'+id;
        
    };
    return (
        <div className={classes.root}>
            <PapperBlock title="퀴즈 문제풀이방" whiteBg icon="ion-ios-grid-outline" desc="
            퀴즈 문제 풀이방에서 결과를 확인하고, 문제를 풀어보세요.">
                
                <Grid
                    container
                    alignItems="flex"
                    justify="center"
                    direction="column"
                    spacing={3}
                    >
                    <Grid item xs={12}>
                        
                        <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0", marginLeft: "100px"}}>
                            <Button className={classes.button} onClick={handleMoveToSolveRoomView}>문제 풀기</Button>
                            <Button className={classes.button} onClick={handleMoveToSolveRoomResultView}>퀴즈 결과보기</Button>
                        </div>
                    </Grid>
                    
                </Grid>
            </PapperBlock>
        </div>
    );
} 

export default SolveRoom;