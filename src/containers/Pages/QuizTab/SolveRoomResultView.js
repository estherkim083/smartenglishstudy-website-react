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
import Loading from '../../../components/Loading';

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
    const [oneAxiosLoaded, setOneAxiosLoaded] = useState(false);
    const [twoAxiosLoaded, setTwoAxiosLoaded] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps 
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
        if(twoAxiosLoaded && oneAxiosLoaded) {
            setIsPageLoaded(true);
        }
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
                    setTypeAndNumQuestion(res["data"]["??????????????????????????????"]);
                    setTypeOfQues(res["data"]["??????"]);
                    if(res["data"]["??????"]=="?????????") {
                        
                        getDownloadURL(ref(storage, `quiz-room-mp3/${res["data"]["???????????????"]}`))
                            .then((url) => {
                                setListeningmp3file(url);
                            })
                            .catch((error) => {
                            });
                    }
                    setBigQues(res["data"]["?????????"]);
                    setBigBodyQues(res["data"]["????????????????????????"]);
                    setQuestionNum(res["data"]["??????????????????"]);
                    const resDatas= res["data"]["????????????"];
                    setDatas(resDatas);
                    setOneAxiosLoaded(true);
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
                            setTwoAxiosLoaded(true);
                        }
                        else {
                            setHasResult(true);
                            setStudentAnswers(res["data"]["?????????"]);
                            setRealAnswers(res["data"]["?????????"]);
                            setCheckList(res["data"]["???????????????"]);
                            console.log(res["data"]["?????????"]);
                            console.log(res["data"]["?????????"]);
                            console.log(res["data"]["???????????????"]);
                            setTwoAxiosLoaded(true);
                        }

                    })
                    .catch(error => {});
        
        }
    },[isLoaded]);
    
    const selectQuestionTypeNum= (index)=> {
        setQuesId(index);
        setStudentAnswers({});
        const questionId= index+1;
        setIsPageLoaded(false);
        setOneAxiosLoaded(false);
        setTwoAxiosLoaded(false);
            
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
                setDatas(res["data"]["????????????"]);
                setTypeAndNumQuestion(res["data"]["??????????????????????????????"]);
                setTypeOfQues(res["data"]["??????"]);
                setBigQues(res["data"]["?????????"]);
                setBigBodyQues(res["data"]["????????????????????????"]);
                setQuestionNum(res["data"]["??????????????????"]);
                setDatas(res["data"]["????????????"]);
                
                if(res["data"]["??????"]=="?????????") {                    
                    getDownloadURL(ref(storage, `quiz-room-mp3/${res["data"]["???????????????"]}`))
                        .then((url) => {
                            setListeningmp3file(url);
                        })
                        .catch((error) => {
                        });
                }
                setOneAxiosLoaded(true);
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
                    setTwoAxiosLoaded(true);
                }
                else {
                    setHasResult(true);
                    setHasResult(true);
                    setStudentAnswers(res["data"]["?????????"]);
                    setRealAnswers(res["data"]["?????????"]);
                    setCheckList(res["data"]["???????????????"]);
                    console.log(res["data"]["?????????"]);
                    console.log(res["data"]["?????????"]);
                    console.log(res["data"]["???????????????"]);
                    setTwoAxiosLoaded(true);
                }
            })
            .catch(error => {});
    };

    const getQuestionSheet= ()=> {
        
        let n = questionNum; // ?????? ?????? ???????????? ????????? ????????????.
        const x = Array.from({length: n}).map(el => "");

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {x.map((_, index) => {
                    return (
                        <div style={{position: 'relative', marginTop: '80px'}}>
                            {Object.keys(datas).length!= 0 && datas[index+1]!= undefined && datas[index+1]["label"]!= undefined && 
                            <>
                                <Grid item xs={12}><Box border={2} borderColor={fade("#EC407A", 0.8)} style={{padding: '4px'}} width="20%" height={40} boxShadow={6}>
                                    <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '10px'}}>
                                        {index+1}???. {datas[index+1]["label"]}??????.
                                    </Typography></Box>
                                </Grid>
                                
                                {datas[index+1]["label"]=="?????????" && 
                                    <><Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '20px'}}>
                                            {datas[index+1]["????????????"]}
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
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', color:'red', fontSize:'12px', marginTop: '20px'}}>????????? ??????: 
                                        </Typography>             
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular',color:'red',  fontSize:'12px', marginTop: '20px'}}>
                                            <div style={{display: 'flex', flexDirection: 'row', marginLeft:'10px'}}>
                                            {datas[index+1]["??????????????????"].map((val, key)=> {
                                                return (
                                                        key== datas[index+1]["??????????????????"].length-1 ?
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
                                            ?????????: &nbsp;{datas[index+1]["?????????"]}
                                        </Typography>                                        
                                    </Grid>            
                                    </>
                                }
                                {datas[index+1]["label"]=="?????????" && 
                                    <><Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '20px'}}>
                                            {datas[index+1]["????????????"]}
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
                                            ????????? ???: &nbsp;{datas[index+1]["????????????"]}
                                        </Typography>                                        
                                    </Grid>               
                                    </>
                                }
                                {console.log(datas[index+1]["?????????"])}
                                {console.log(datas[index+1]["???????????????"])}
                                {datas[index+1]["label"]=="?????????" && 
                                    <><Grid item xs={12}>
                                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'15px', marginTop: '20px'}}>
                                            {datas[index+1]["????????????"]}
                                        </Typography>                                        
                                    </Grid>  
                                    <Grid item xs={12}>
                                        {
                                            Object.entries(datas[index+1]["?????????"]).map(([key, value]) => {
                                                if(datas[index+1]["???????????????"][key]==true) {
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
    if(!isPageLoaded) {
        return <Loading/>;
    }
    return (
        <div className={classes.root}>
        <PapperBlock title="?????? ????????? ???????????? ??????" whiteBg icon="ion-ios-grid-outline" desc="
        ?????? ????????? ???????????? ???????????????.">
                
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
                    {hasResult && typeOfQues=="?????????" && listeningmp3file!= '' && 
                        <Grid item xs={12}>
                            <audio controls="controls" src={listeningmp3file} autoplay></audio>
                        </Grid>
                    }
                    <Grid item xs={12}>
                    {hasResult && typeAndNumQuestion.length != 0 && typeAndNumQuestion[quesId]!= undefined &&<Box border={2} borderColor={fade("#EC407A", 0.8)} style={{padding: '4px'}} width="30%" height={40} boxShadow={6}><Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'23px'}}>
                        {quesId+1} ???.&nbsp;&nbsp;{typeAndNumQuestion[quesId]["type"]} ??????&nbsp;&nbsp;&nbsp;1???-{typeAndNumQuestion[quesId]["num"]}???
                    </Typography></Box>}
                    {hasResult== false && 
                        <Typography component="h6" style={{ fontFamily: 'CookieRun-Regular', fontSize: '15px' }}>
                            ????????? ????????????.
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