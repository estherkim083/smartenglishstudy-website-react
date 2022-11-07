import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Loading from '../../../components/Loading';

import { fade } from '@material-ui/core/styles/colorManipulator';
import { useCountdown } from './useCountdown';

import { storage } from '../../../firebase';
import { ref, getDownloadURL } from "firebase/storage";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "15px"
    },   
    button : {
        margin: "10px",
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, 
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.white,
        width:"15%",
        fontFamily: 'CookieRun-Regular',
        fontSize: '15px',
        marginTop: "30px",
        '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark, 
        },
    },    
}));

function SolveRoomView(props) {

    const classes = useStyles();
    const [typeAndNumQuestion, setTypeAndNumQuestion] = useState([]);
    const [typeOfSelected, setTypeOfSelected] = useState('');
    const [typeOfQues, setTypeOfQues]= useState('');
    const [listeningmp3file, setListeningmp3file]= useState('');
    const [ bigQues, setBigQues]= useState(''); 
    const [ bigBodyQues, setBigBodyQues]= useState(''); 
    const [ questionNum, setQuestionNum]= useState(0);
    const [time, setTime] = React.useState(null);

    const [days, hours, minutes, seconds] = useCountdown(time);

    const [quesId, setQuesId]= useState(0);

    const [datas, setDatas]= useState({});

    const [isLoaded, setIsLoaded] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [studentAnswers, setStudentAnswers] = useState([]); // ['1', '...', '1, 2, 3']
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
            axios
                .get(baseURL+"quiz/quiz-detail-solveroom/"+id+'/'+1, {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    }
                })
                .then(res => {
                    console.log(res["data"]);
                    setTypeAndNumQuestion(res["data"]["유형및유형별문제갯수"]);
                    setTypeOfQues(res["data"]["유형"]);
                    if(res["data"]["유형"]=="리스닝") {
                        
                        getDownloadURL(ref(storage, `quiz-room-mp3/${res["data"]["리스닝파일"]}`))
                            .then((url) => {
                                setListeningmp3file(url);
                            })
                            .catch((error) => {
                            });
                    }
                    setBigQues(res["data"]["큰질문"]);
                    setBigBodyQues(res["data"]["큰질문본문텍스트"]);
                    setQuestionNum(res["data"]["세부문항갯수"]);
                    const resDatas= res["data"]["세부정보"];
                    setDatas(resDatas);
                    const xx= res["data"]["제한시간"];
                    const xxxx = xx* 60 * 1000;
                    const NOW_IN_MS = new Date().getTime();
                    const targetDate = NOW_IN_MS + xxxx;
                    setTime(targetDate);
                    setPageLoaded(true);
                })
                .catch(error => {});
                setPageLoaded(true);
        }
    },[isLoaded]);
    
    const selectQuestionTypeNum= (index)=> {
        setQuesId(index);
        setStudentAnswers([]);
        const questionId= index+1;
        axios
            .get(baseURL+"quiz/quiz-detail-solveroom/"+id+'/'+questionId, {
                headers: {
                Authorization: localStorage.getItem('token')
                    ? 'Token ' + localStorage.getItem('token')
                    : null,
                'Content-Type': 'application/json',
                accept: 'application/json',
                }
            })
            .then(res => {
                console.log(res["data"]);
                setDatas(res["data"]["세부정보"]);
                setTypeAndNumQuestion(res["data"]["유형및유형별문제갯수"]);
                setTypeOfQues(res["data"]["유형"]);
                setBigQues(res["data"]["큰질문"]);
                setBigBodyQues(res["data"]["큰질문본문텍스트"]);
                setQuestionNum(res["data"]["세부문항갯수"]);
                setDatas(res["data"]["세부정보"]);
                
                if(res["data"]["유형"]=="리스닝") {                    
                    getDownloadURL(ref(storage, `quiz-room-mp3/${res["data"]["리스닝파일"]}`))
                        .then((url) => {
                            setListeningmp3file(url);
                        })
                        .catch((error) => {
                        });
                }
            })
            .catch(error => {});
    };
    const handleGoOut=()=> {
        window.location.href="/quiz/make-quiz";
    };
    const handleChangeAnswer= (e, index, n)=> {
        if(studentAnswers.length==0) {
            const xx=  Array.from({length: n}).map(el => "");
            xx.splice(index, 1, e.target.value);
            setStudentAnswers(xx);
        }
        else {
            const xx= [...studentAnswers];
            xx.splice(index, 1, e.target.value);
            setStudentAnswers(xx);
        }
        console.log(studentAnswers);
    };

    const getQuestionSheet= (n)=> {
        
       // let n = questionNum; // 세부 문제 개수만큼 루프를 돌리도록.
        const x = Array.from({length: n}).map(el => "");

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {x.map((_, index) => {
                    return (
                        <div style={{position: 'relative', marginTop: '50px'}}>
                            {Object.keys(datas).length!= 0 && datas[index+1]!= undefined && datas[index+1]["label"]!= undefined && 
                            <>
                                <Grid item xs={12}><Box border={2} borderColor={fade("#EC407A", 0.8)} style={{padding: '4px'}} width="80%" height={40}>
                                    <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '10px'}}>
                                        {index+1}번. {datas[index+1]["label"]}문제.
                                    </Typography>
                                    </Box>
                                </Grid>
                                
                                {datas[index+1]["label"]=="서술형" && 
                                    <><Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '20px'}}>
                                            {datas[index+1]["세부질문"]}
                                        </Typography>                                        
                                    </Grid>       
                                    <Grid item xs={12}> 
                                        <TextField 
                                            style={{height: "35px", width: "70%", marginLeft: '10px', marginTop: '20px'}}
                                            onChange={(e)=> handleChangeAnswer(e, index, n)}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder="서술형 답을 입력하세요."
                                            >
                                        </TextField>                      
                                    </Grid>            
                                    </>
                                }
                                {datas[index+1]["label"]=="단답형" && 
                                    <><Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '20px'}}>
                                            {datas[index+1]["세부질문"]}
                                        </Typography>                                        
                                    </Grid>  
                                    <Grid item xs={12}> 
                                        <TextField 
                                            style={{height: "35px", width: "70%", marginLeft: '10px', marginTop: '20px'}}
                                            onChange={(e)=> handleChangeAnswer(e, index, n)}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder="단답형 답을 입력하세요."
                                            >
                                        </TextField>                      
                                    </Grid>             
                                    </>
                                }
                                {datas[index+1]["label"]=="객관식" && 
                                    <><Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '20px'}}>
                                            {datas[index+1]["세부질문"]}
                                        </Typography>                                        
                                    </Grid>  
                                    
                                    <Grid item xs={12}>
                                        {
                                            Object.entries(datas[index+1]["선택지"]).map(([key, value]) => {
                                                return (
                                                    <>
                                                    <div style={{display: 'flex', flexDirection: 'row', marginTop:'20px'}}>
                                                        <div style={{color: 'blue', borderRadius: '50%', width: '10px',height: '10px', padding: '8px 8px 10px', lineHeight: '12px', background: 'rgb(255, 255, 255', border: '1px solid blue', textAlign: 'center', fontSize: '15px'}}>{parseInt(key)+1}</div>
                                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginLeft:'20px'}}>{value}</Typography>
                                                    </div></>

                                                );
                                            })
                                        }
                                    </Grid>
                                    <Grid item xs={12}> 
                                        <TextField 
                                            style={{height: "35px", width: "70%", marginLeft: '10px', marginTop: '20px'}}
                                            onChange={(e)=> handleChangeAnswer(e, index, n)}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder="선택지 답을 모두 반점 구분으로 입력하세요."
                                            >
                                        </TextField>                      
                                    </Grid>       
                                     </>             
                                }
                            </>
                            }
                        </div>
                    );
                })}
            </div>
        );
    };
    const postToServer= ()=> {

        //유형번호: quesId, 룸 번호: id
        // 문제 학생답: studentAnswers 문제 순서대로 답 기입됨.
        console.log(studentAnswers);
        const question_id= quesId+1;
        axios
            .post(baseURL+"quiz/quiz-submit-answers/"+id, {
                studentAnswers: studentAnswers,
                typeNumber: question_id
            },
            {
            headers: {
            Authorization: localStorage.getItem('token')
                ? 'Token ' + localStorage.getItem('token')
                : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
            }
            })
            .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            })
            .then(function (res) {  
                console.log(res);
            });

    };
    const handleSubmitFinish= ()=> {
        postToServer();
        window.location.href="/quiz/take-quiz/"+id;
    };
    const handleSubmit= () => {
        postToServer();
        selectQuestionTypeNum(quesId+1);
    };

    if(pageLoaded== false) {
        return (<Loading/>);
    }
    else if (seconds==null) {
        return (
            <div className={classes.root}>
            <PapperBlock title="퀴즈 문제풀이방" whiteBg icon="ion-ios-grid-outline" desc="
            퀴즈 문제풀이방에서 문제를 풀어보세요. 텍스트필드에 답을 기입하세요."><Typography component="h6" style={{ fontFamily: 'CookieRun-Regular', fontSize: '24px' }}>
            남은시간 0초
        </Typography></PapperBlock></div>);
    }
    else {
        return (
            <div className={classes.root}>
            <PapperBlock title="퀴즈 문제풀이방" whiteBg icon="ion-ios-grid-outline" desc="
            퀴즈 문제풀이방에서 문제를 풀어보세요. 텍스트필드에 답을 기입하세요. 다음/완료 버튼을 누르면 제출됩니다.">
                    
                    <Grid
                        container
                        alignItems="flex-start"
                        justify="flex-start"
                        direction="row"
                        spacing={3}
                        >
                        {typeAndNumQuestion.length!=0 && typeAndNumQuestion.map((val, index) =>{
                            return (
                                <>
                                <Grid item xs={1} style={{maxWidth: '60px'}}>
                                    <Box bgcolor="#EC407A" width={40} height={40}>
                                        <Button style={{marginLeft:'-10px'}} onClick={()=> selectQuestionTypeNum(index)}>{index+1}</Button>
                                    </Box>
                                </Grid>
                                </>
                            );
                        })}
                        <Grid item xs= {4}>
                            <Typography component="h6" style={{ fontFamily: 'CookieRun-Regular', fontSize: '15px', marginTop: '10px' }}>
                                {minutes} 분 {seconds} 초 남음.
                            </Typography>
                        </Grid>
                        {typeOfQues=="리스닝" && listeningmp3file!= '' && 
                            <Grid item xs={12}>
                                <audio controls="controls" src={listeningmp3file} autoplay></audio>
                            </Grid>
                        }
                        <Grid item xs={12}><Box border={2} borderColor={fade("#EC407A", 0.8)} style={{padding: '4px'}} width="80%" height={40}>
                        {typeAndNumQuestion.length != 0 &&typeAndNumQuestion[quesId] != undefined && <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'23px'}}>
                            {quesId+1} 번.&nbsp;&nbsp;{typeAndNumQuestion[quesId]["type"]} 문제&nbsp;&nbsp;&nbsp;1번-{typeAndNumQuestion[quesId]["num"]}번
                        </Typography>}</Box>
                        </Grid>
                        <><Grid item xs={12}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Typography component="h6" style={{ fontFamily: 'CookieRun-Regular', fontSize: '15px', marginTop: '10px' }}>
                                        {bigQues}
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="h6" style={{ fontFamily: 'CookieRun-Regular', fontSize: '15px' }}>
                                    {bigBodyQues}
                                </Typography>
                        </Grid></>
                        <Grid item xs={12}>
                            {typeAndNumQuestion.map((val, index) =>{
                                return (
                                    <>
                                    {index==quesId? 
                                        getQuestionSheet(val["num"])
                                    :
                                        <div style={{display:'none'}}>{getQuestionSheet(val["num"])}</div>
                                    }
                                    </>
                                );
                            })}
                        </Grid>  
                        
                        <Grid item xs={12}>
                            {typeAndNumQuestion.length-1 != quesId && <Button className={classes.button} onClick={()=> handleSubmit()}>해당 유형 답 제출</Button>}
                            {typeAndNumQuestion.length-1 == quesId && <Button className={classes.button} onClick={()=> handleSubmitFinish()}>완료</Button>}
                        </Grid>
                    </Grid>
                </PapperBlock>
            </div>
        );
    }   
} 
export default SolveRoomView;