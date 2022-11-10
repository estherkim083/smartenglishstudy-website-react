import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useWindowDimensions from '../../../useWindowDimensions';
import QuizRoomCard from '../../../components/RoomCard/QuizRoomCard';
import axios from 'axios';
import QuizMyScoreTable from '../../Table/QuizMyScoreTable';

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

function QuizStudentScoreList(props) {

    const classes = useStyles();
    const [datas, setDatas] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { height, width } = useWindowDimensions();
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;

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
    return (
        <div className={classes.root}>
            <PapperBlock title="퀴즈 성적 리스트" whiteBg icon="ion-ios-grid-outline" desc="
            퀴즈 성적을 확인하세요.">
                
                <Grid
                    container
                    alignItems="stretch"
                    justify="space-around"
                    direction="row"
                    spacing={3}
                    >
                    <div>
                        <QuizMyScoreTable type="studentScore"/>
                    </div>
                </Grid>
            </PapperBlock>
        </div>
    );
} 

export default QuizStudentScoreList;