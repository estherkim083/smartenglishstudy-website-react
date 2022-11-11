import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SyncIcon from '@material-ui/icons/Sync';

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

function SolveRoomResultView(props) {

    const classes = useStyles();
    const [typeAndNumQuestion, setTypeAndNumQuestion] = useState([]);
    const [typeOfSelected, setTypeOfSelected] = useState('');
    const [typeOfQues, setTypeOfQues]= useState('');
    const [listeningmp3file, setListeningmp3file]= useState('');
    const [ bigQues, setBigQues]= useState(''); 
    const [ bigBodyQues, setBigBodyQues]= useState(''); 
    const [ questionNum, setQuestionNum]= useState(0);
    const [ studentAnswers, setStudentAnswers]= useState({});
    const [ realAnswers, setRealAnswers]= useState({});
    const [ checkList, setCheckList] = useState({});

    const [quesId, setQuesId]= useState(0);

    const [datas, setDatas]= useState({});
    const [hasResult, setHasResult] = useState(false);

    const [isLoaded, setIsLoaded] = useState(false);
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
                .get(baseURL+"quiz/quiz-detail/"+id+'/'+1, {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    }
                })
                .then(res => {
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
                })
                .catch(error => {});
                        
                axios
                    .get(baseURL+"quiz/quiz-submit-answers/"+id, {
                        headers: {
                        Authorization: localStorage.getItem('token')
                            ? 'Token ' + localStorage.getItem('token')
                            : null,
                        'Content-Type': 'application/json',
                        accept: 'application/json',
                        },
                        params: {
                            typeNumber: 1
                        }
                    })
                    .then(res => {
                        console.log(res["data"])
                        if(res["data"]== {} || Object.keys(res["data"]).length==0) {
                            setHasResult(false);
                        }
                        else {
                            setHasResult(true);
                            setStudentAnswers(res["data"]["학생답"]);
                            setRealAnswers(res["data"]["실제답"]);
                            setCheckList(res["data"]["체크리스트"]);
                            console.log(res["data"]["학생답"]);
                            console.log(res["data"]["실제답"]);
                            console.log(res["data"]["체크리스트"]);
                        }

                    })
                    .catch(error => {});
            
        }
    },[isLoaded]);
    
    const selectQuestionTypeNum= (index)=> {
        setQuesId(index);
        setStudentAnswers({});
        const questionId= index+1;
            
        axios
            .get(baseURL+"quiz/quiz-detail/"+id+'/'+questionId, {
                headers: {
                Authorization: localStorage.getItem('token')
                    ? 'Token ' + localStorage.getItem('token')
                    : null,
                'Content-Type': 'application/json',
                accept: 'application/json',
                }
            })
            .then(res => {
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
            
        axios
            .get(baseURL+"quiz/quiz-submit-answers/"+id, {
                headers: {
                Authorization: localStorage.getItem('token')
                    ? 'Token ' + localStorage.getItem('token')
                    : null,
                'Content-Type': 'application/json',
                accept: 'application/json',
                },
                params: {
                    typeNumber: questionId
                }
            })
            .then(res => {
                if(res["data"]== {} || Object.keys(res["data"]).length==0) {
                    setHasResult(false);
                }
                else {
                    setHasResult(true);
                    setHasResult(true);
                    setStudentAnswers(res["data"]["학생답"]);
                    setRealAnswers(res["data"]["실제답"]);
                    setCheckList(res["data"]["체크리스트"]);
                    console.log(res["data"]["학생답"]);
                    console.log(res["data"]["실제답"]);
                    console.log(res["data"]["체크리스트"]);
                }
            })
            .catch(error => {});
    };

    const getQuestionSheet= ()=> {
        
        let n = questionNum; // 세부 문제 개수만큼 루프를 돌리도록.
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
                                    </Typography></Box>
                                </Grid>
                                
                                {datas[index+1]["label"]=="서술형" && 
                                    <><Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '20px'}}>
                                            {datas[index+1]["세부질문"]}
                                        </Typography>                                        
                                    </Grid>       
                                    <Grid item xs={12}> 
                                        {checkList[index+1]== 'o' ? <TextField 
                                            multiline={true}
                                            rows={6}
                                            style={{height: "100%", width: "30%", marginLeft: '10px', marginTop: '20px', backgroundColor: "rgba(119,221,119, 0.9)"}}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder={studentAnswers[index+1]}
                                            >
                                        </TextField>
                                        : <TextField 
                                            multiline={true}
                                            rows={6}
                                            style={{height: "100%", width: "30%", marginLeft: '10px', marginTop: '20px', backgroundColor: "rgba(255,105,97, 0.9)"}}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder={studentAnswers[index+1]}
                                            >
                                        </TextField>
                                        }                      
                                    </Grid> 
                                    <Grid item xs={12}>
                                        <div style={{display: 'flex', flexDirection: 'row', marginTop:'20px'}}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', color:'red', fontSize:'12px', marginTop: '20px'}}>키워드 정답: 
                                        </Typography>             
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular',color:'red',  fontSize:'12px', marginTop: '20px'}}>
                                            <div style={{display: 'flex', flexDirection: 'row', marginLeft:'10px'}}>
                                            {datas[index+1]["키워드정답들"].map((val, key)=> {
                                                return (
                                                        key== datas[index+1]["키워드정답들"].length-1 ?
                                                        <div>{val} &nbsp;</div>
                                                        : 
                                                        <div>{val}, &nbsp;</div>
                                                );
                                            })}
                                            </div>
                                        </Typography>
                                        </div>                           
                                    </Grid> 
                                    <Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', color:'red', fontSize:'12px', marginTop: '10px'}}>
                                            모범답: &nbsp;{datas[index+1]["모범답"]}
                                        </Typography>                                        
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
                                        {checkList[index+1]== 'o' ? 
                                        <TextField 
                                            style={{height: "35px", width: "30%", marginLeft: '10px', marginTop: '20px', backgroundColor: "rgba(119,221,119, 0.9)"}}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder={studentAnswers[index+1]}
                                            >
                                        </TextField> 
                                        
                                        : <TextField 
                                            style={{height: "35px", width: "30%", marginLeft: '10px', marginTop: '20px', backgroundColor: "rgba(255,105,97, 0.9)"}}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder={studentAnswers[index+1]}
                                            >
                                        </TextField>  }                    
                                    </Grid>                                               
                                    <Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', color:'red', fontSize:'12px', marginTop: '20px'}}>
                                            키워드 답: &nbsp;{datas[index+1]["키워드답"]}
                                        </Typography>                                        
                                    </Grid>               
                                    </>
                                }
                                {console.log(datas[index+1]["선택지"])}
                                {console.log(datas[index+1]["선택지정답"])}
                                {datas[index+1]["label"]=="객관식" && 
                                    <><Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '20px'}}>
                                            {datas[index+1]["세부질문"]}
                                        </Typography>                                        
                                    </Grid>  
                                    <Grid item xs={12}>
                                        {
                                            Object.entries(datas[index+1]["선택지"]).map(([key, value]) => {
                                                if(datas[index+1]["선택지정답"][key]==true) {
                                                    return (
                                                        <>
                                                        <div style={{display: 'flex', flexDirection: 'row', marginTop:'20px'}}>
                                                            <div style={{color: 'green', borderRadius: '50%', width: '10px',height: '10px', padding: '8px 8px 10px', lineHeight: '12px', background: 'rgb(255, 255, 255', border: '1px solid green', textAlign: 'center', fontSize: '15px'}}>{parseInt(key)+1}</div>
                                                            <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginLeft:'20px'}}>{value}</Typography>
                                                        </div></>
                                                    );
                                                }else{
                                                    return (
                                                        <>
                                                        <div style={{display: 'flex', flexDirection: 'row', marginTop:'20px'}}>
                                                            <div style={{color: 'blue', borderRadius: '50%', width: '10px',height: '10px', padding: '8px 8px 10px', lineHeight: '12px', background: 'rgb(255, 255, 255', border: '1px solid blue', textAlign: 'center', fontSize: '15px'}}>{parseInt(key)+1}</div>
                                                            <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginLeft:'20px'}}>{value}</Typography>
                                                        </div></>

                                                    );
                                                }
                                            })
                                        }
                                    </Grid>
                                    <Grid item xs={12}> 
                                        {checkList[index+1]== 'o' ? 
                                        <TextField 
                                            style={{height: "35px", width: "30%", marginLeft: '10px', marginTop: '20px', backgroundColor: "rgba(119,221,119, 0.9)"}}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder={studentAnswers[index+1]}
                                            >
                                        </TextField> 
                                        :
                                        <TextField 
                                            style={{height: "35px", width: "30%", marginLeft: '10px', marginTop: '20px', backgroundColor: "rgba(255,105,97, 0.9)"}}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder={studentAnswers[index+1]}
                                            >
                                        </TextField> }        
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
    return (
        <div className={classes.root}>
        <PapperBlock title="퀴즈 출제방 결과보기 화면" whiteBg icon="ion-ios-grid-outline" desc="
        퀴즈 출제방 결과보기 화면입니다.">
                
                <Grid
                    container
                    alignItems="flex-start"
                    justify="flex-start"
                    direction="row"
                    spacing={3}
                    >
                    {hasResult && typeAndNumQuestion.length!=0 && typeAndNumQuestion.map((val, index) =>{
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
                    {hasResult && typeOfQues=="리스닝" && listeningmp3file!= '' && 
                        <Grid item xs={12}>
                            <audio controls="controls" src={listeningmp3file} autoplay></audio>
                        </Grid>
                    }
                    <Grid item xs={12}>
                    {hasResult && typeAndNumQuestion.length != 0 && typeAndNumQuestion[quesId]!= undefined &&<Box border={2} borderColor={fade("#EC407A", 0.8)} style={{padding: '4px'}} width="80%" height={40}><Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'23px'}}>
                        {quesId+1} 번.&nbsp;&nbsp;{typeAndNumQuestion[quesId]["type"]} 문제&nbsp;&nbsp;&nbsp;1번-{typeAndNumQuestion[quesId]["num"]}번
                    </Typography></Box>}
                    {hasResult== false && 
                        <Typography component="h6" style={{ fontFamily: 'CookieRun-Regular', fontSize: '15px' }}>
                            결과가 없습니다.
                        </Typography>
                    }
                    </Grid>
                    {hasResult && <><Grid item xs={12}>
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
                    </Grid>
                    <Grid item xs={12}>
                        {getQuestionSheet()}
                    </Grid></>  }
                    
                </Grid>
            </PapperBlock>
        </div>
    );
} 
export default SolveRoomResultView;