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
            window.location.href="/smartenglishstudy-website-react/auth/email";
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
    const handleMoveToQuizSolveRoomView= () => {
        window.location.href= '/smartenglishstudy-website-react/vocab/quiz-memorization/take-quiz';
    };
    const handleMoveToQuizSolveRoomResultView= ()=> {
        window.location.href= '/smartenglishstudy-website-react/vocab/quiz-memorization/result';
        
    };
    return (
        <div className={classes.root}>
            <PapperBlock title="어휘퀴즈 문제풀이방" whiteBg icon="ion-ios-grid-outline" desc="
            퀴즈 문제 풀이방에서 어휘 암기문제를 풀어보세요. (필수 : 어휘 단어장에 제대로 정보가 입력되었는지 확인하세요.)">
                
                <Grid
                    container
                    alignItems="flex"
                    justify="center"
                    direction="column"
                    spacing={3}
                    >
                    <Grid item xs={12}>
                        
                        <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0", marginLeft: "100px"}}>
                            <Button className={classes.button} onClick={handleMoveToQuizSolveRoomView}>어휘문제 풀기</Button>
                            <Button className={classes.button} onClick={handleMoveToQuizSolveRoomResultView}>퀴즈 결과보기</Button>
                        </div>
                    </Grid>
                    
                </Grid>
            </PapperBlock>
        </div>
    );
} 

export default SolveRoom;