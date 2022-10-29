import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../../../firebase';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SyncIcon from '@material-ui/icons/Sync';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

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
    addButton : {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, 
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.white,
        fontFamily: 'CookieRun-Regular',
        fontSize: '15px',
        '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark, 
        },
    },
    formControl: {
        marginTop: '-8px'
    },
    select: {
        width: '140px',
        backgroundColor: theme.palette.primary.light
    },
    changeFontFamilyClasses: {
      fontFamily: "CookieRun-Regular",
    },
    numberCircle : {
        borderRadius: '50%',
        width: '10px',
        height: '10px',
        padding: '8px',
        paddingBottom: '10px',
        lineHeight: '12px',
        background: '#fff',
        border: '1px solid #666',
        color: '#666',
        textAlign: 'center',
        fontSize: '15px',
    },
}));
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function CreateQuiz(props) {

    const classes = useStyles();
    const [thumbnail, setThumbnail]= useState('default/workshop.jpg');
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    const handleOnChange= (e) => {
        const thumbnailImg = e.target?.files?.[0];
        
        const metadata = {
            contentType: 'image/*',
        };
        var id= `${makeid(7)}/${thumbnailImg.name}`;
        const fileRef= ref(storage, `quiz-room/${id}`);
        uploadBytes(fileRef, thumbnailImg, metadata).then(async()=> {
            console.log("uploaded!!");
        });
        setThumbnail(id);
    };
    const [listeningmp3file, setListeningmp3file] =useState('');
    const handleOnChangeMp3= (e)=> {
        const mp3File = e.target?.files?.[0];
        
        const metadata = {
            contentType: 'audio/*',
        };
        var id= `${makeid(7)}/${mp3File.name}`;
        const fileRef= ref(storage, `quiz-room-mp3/${id}`);
        uploadBytes(fileRef, mp3File, metadata).then(async()=> {
            console.log("uploaded!!");
        });
        setListeningmp3file(id);

    }
    
    const [activeStep, setActiveStep] = React.useState(0);
    const  getSteps= ()=> {
        return ['퀴즈 방 생성하기', '문제 만들기'];
    };
    const [roomTitleValue, setRoomTitleValue] = useState('');
    const [roomDescValue, setRoomDescInputValue]= useState('');
    const [limitTimeValue, setLimitTimeValue]= useState('');
    const roomTitleInputChange = (e)=> {
        setRoomTitleValue(e.target.value);
    }
    const roomDescInputChange= (e) => {
        setRoomDescInputValue(e.target.value); 
    };
    const limitTimeChange= (e) => {
        setLimitTimeValue(e.target.value);
    };
    const [typeAndNumQuestion, setTypeAndNumQuestion]= useState([{"type":'', 'num': ''}]);

    const handleChangeType= (e, index)=> {
        const q = [...typeAndNumQuestion];
        q[index]["type"] = e.target.value;
        setTypeAndNumQuestion(q);
    }
    const handleChangeNumVal= (e, index)=> {
        const q = [...typeAndNumQuestion];
        q[index]["num"]= e.target.value;
        setTypeAndNumQuestion(q);
    }
    const addTypeAndNum= ()=>{
        const q = [...typeAndNumQuestion, {"type":'', 'num': ''}];
        setTypeAndNumQuestion(q);
    };
    const check= ()=> {
        if(!parseInt(limitTimeValue)) {
            return false;
        }
        for(var i=0;i<typeAndNumQuestion.length;i++) {
            if(!parseInt(typeAndNumQuestion[i].num) || parseInt(typeAndNumQuestion[i].num)>10) {
                return false;
            }
            if(typeAndNumQuestion[i].type== '' || typeAndNumQuestion[i].num=='') {
                return false;
            }
        }
        if(roomTitleValue == '' || roomDescValue=='' || limitTimeValue=='') {
            return false;
        }
        return true;
    };
    const [selectedIndex, setSelectedIndex] =useState(0);
    const selectQuestionTypeNum= (index)=> {
        setSelectedIndex(index);
        setQuestionLabel([]);
        setMultipleQuesNum([]);
        setMultipleQuesChoice({});
        setMultipleQuesChoiceCheck({});
    };
    const [questionLabel, setQuestionLabel]= useState([]);
    const handleChangeQuestionLabel= (e, i) => {
        if(questionLabel.length ==0) {
            let n = typeAndNumQuestion[selectedIndex].num;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setQuestionLabel(x);
        }
        else {
            const x= [...questionLabel];
            x.splice(i, 1, e.target.value);
            setQuestionLabel(x);
        }
    };
    const [typeBigQuestion, setTypeBigQuestion]= useState([]);
    const [typeBigBodyQuestion, setTypeBigBodyQuestion]= useState([]);
    const [multipleQuesNum, setMultipleQuesNum]= useState([]); //각각의 문제 번호에 대한 객관식 경우의 선택지 개수를 담는다.
    const [multipleQuesChoice, setMultipleQuesChoice]= useState({}); //각각의 문제 번호에 대한 객관식 경우의 선택지 txt를 담는다.
    const [multipleQuesChoiceCheck, setMultipleQuesChoiceCheck]= useState({}); //각각의 문제 번호에 대한 객관식 경우의 선택지 txt를 담는다.
    // {"세부문제번호": {"선택지 번호": {"체크여부":false,  텍스트":""}}}
    // {"세부문제번호": {"선택지 번호": false}} multipleQuesChoiceCheck
    // {"세부문제번호": {"선택지 번호": "..."}} multipleQuesChoice
    const handleChangeMultipleChoiceNum= (e, i)=> {
        if(multipleQuesNum.length ==0) {
            let n = typeAndNumQuestion[selectedIndex].num;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setMultipleQuesNum(x);
        }
        else {
            const x= [...multipleQuesNum];
            x.splice(i, 1, e.target.value);
            setMultipleQuesNum(x);
        }
        var xx= {...multipleQuesChoiceCheck};
        if(xx[i] != undefined) {
            var l= Object.keys(xx[i]).length; //3(0, 1, 2) //5(0, 1, 2 ,3, 4)
            let v= e.target.value; //5 //3
            var inc= v-l;
            if(inc>0) {
                for(var k= l;k<v;k++) {
                    xx[i][k]= false;
                }
                console.log(xx[i]);
            }else if(inc<0){
                for(var k=l-1;k>=v;k--) {
                    if(xx[i]!= undefined) {
                        delete xx[i][k];
                    }
                }
                console.log(xx[i]);
            }
        }else if(xx[i]== undefined) { //xx[i]가 undefined 된 경우에서..
            for(var j=0;j<e.target.value;j++) {
                xx[i]= {}
                xx[i][j]= false;
            }
        }
        var yy= {...multipleQuesChoice};
        if(yy[i] !== undefined) {
            var l= Object.keys(yy[i]).length; //3
            let v= e.target.value; //5
            var inc= v-l;
            if(inc>0) {
                for(var k= l;k<v;k++) {
                    yy[i][k]= '';
                }
                console.log(yy[i]);
            }else if(inc<0){
                for(var k=l-1;k>=v;k--) {
                    if(yy[i]!= undefined) {
                        delete yy[i][k];
                    }
                }
                console.log(yy[i]);
            }
        }else if(yy[i]== undefined) { //yy[i]가 undefined 된 경우에서..
            for(var j=0;j<e.target.value;j++) {
                yy[i]= {}
                yy[i][j]= '';
            }
        }
    };
    const handleChangeMultipleQuesChoiceChecks= (i, num, index, b)=> {
        var x= {};
        var x= {...multipleQuesChoiceCheck};
        if(x[i] != undefined) {
            x[i][index]= b;
            setMultipleQuesChoiceCheck(x);

        }else{
            x[i]= {};
            for(var j=0;j<num;j++) {
                if(j== index) {
                    x[i][index]= b;
                }else{
                    x[i][j]= false;
                }
            }
            setMultipleQuesChoiceCheck(x);
        }
        console.log(x);
    };
    const handleChangeMultipleQuesChoice= (e, i, num, index)=> { // i는 문제 세부 번호. index는 선택지 문제 번호. num은 객관식 문제 개수.
        var x= {...multipleQuesChoice};
        if(x[i] != undefined) {
            x[i][index]= e.target.value;
            setMultipleQuesChoice(x);

        }else{
            x[i]= {};
            for(var j=0;j<num;j++) {
                if(j== index) {
                    x[i][index]= e.target.value;
                }else{
                    x[i][j]= '';
                }
            }
            setMultipleQuesChoice(x);
        }
        console.log(x);

    };
    const [multipleQuesTxt, setMultipleQuesTxt] = useState([]);
    const handleChangeMultipleQuestion=(e, i)=> {
        if(multipleQuesTxt.length ==0) {
            let n = typeAndNumQuestion[selectedIndex].num;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setMultipleQuesTxt(x);
        }
        else {
            const x= [...multipleQuesTxt];
            x.splice(i, 1, e.target.value);
            setMultipleQuesTxt(x);
        }
    };
    const getMultipleQuesSheet= (num, i) => {

        let n = num; // 세부 객관식 문제 개수만큼 루프를 돌리도록.
        const x = Array.from({length: n}).map(el => "");
        if(x!= undefined && n!= undefined) {
            return (
                <div style= {{display: 'flex', flexDirection: 'column'}}>
                    <Typography component="h6" style={{ fontFamily: 'CookieRun-Regular', fontSize: '15px', marginTop: '20px', marginLeft: '20px' }}>정답번호를 반드시 클릭하세요.</Typography>
                    <TextField 
                        multiline={true}
                        rows={3}
                        style={{ width: "700px", marginLeft: '10px', marginTop: '20px'}}
                        onChange={(e)=> handleChangeMultipleQuestion(e, i)}
                        InputLabelProps={{
                            style: { color: '#fff', fontStyle: "bold", height: '100%'}, 
                        }} 
                        inputProps={{
                            style: {
                                fontFamily: 'CookieRun-Regular',
                            },
                        }}
                        placeholder="세부 질문 문제를 입력하세요."
                    ></TextField>
                    { x.map((_, index)=> {
                            return (
                                <>
                                    <div style= {{display: 'flex', flexDirection: 'row', marginTop: "30px"}}>
                                    {Object.keys(multipleQuesChoiceCheck).length> 0 && multipleQuesChoiceCheck[i]!= undefined && multipleQuesChoiceCheck[i][index]!= undefined &&multipleQuesChoiceCheck[i][index]? 
                                        <div style={{color: 'green', borderRadius: '50%', width: '10px',height: '10px', padding: '8px 8px 10px', lineHeight: '12px', background: 'rgb(255, 255, 255', border: '1px solid green', textAlign: 'center', fontSize: '15px'}} onClick={()=>handleChangeMultipleQuesChoiceChecks(i, n, index ,false)}>{index+1}</div>:
                                        <div style={{color: 'blue', borderRadius: '50%', width: '10px',height: '10px', padding: '8px 8px 10px', lineHeight: '12px', background: 'rgb(255, 255, 255', border: '1px solid blue', textAlign: 'center', fontSize: '15px'}} onClick={()=>handleChangeMultipleQuesChoiceChecks(i, n, index, true)}>{index+1}</div>
                                        }
                                        <TextField 
                                            style={{height: "35px", width: "800px", marginLeft: '10px'}}
                                            onChange={(e)=> handleChangeMultipleQuesChoice(e, i, n, index)}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                                }}
                                            >
                                        </TextField>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            );
            

        }
    };
    const [narrativeQuestionTxt, setNarrativeQuestionTxt]= useState([]);
    const [narrativeQuestionAnswer, setNarrativeQuestionAnswer]= useState([]);
    const [narrativeQuestionBestAnswer, setNarrativeQuestionBestAnswer]= useState([]);
    const handleChangeNarrQuestionAnswer=(e, i)=> {
        if(narrativeQuestionAnswer.length ==0) {
            let n = typeAndNumQuestion[selectedIndex].num;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setNarrativeQuestionAnswer(x);
        }
        else {
            const x= [...narrativeQuestionAnswer];
            x.splice(i, 1, e.target.value);
            setNarrativeQuestionAnswer(x);
        }

    };
    const handleChangeNarrQuestionBestAnswer=(e, i)=> {
        if(narrativeQuestionBestAnswer.length ==0) {
            let n = typeAndNumQuestion[selectedIndex].num;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setNarrativeQuestionBestAnswer(x);
        }
        else {
            const x= [...narrativeQuestionBestAnswer];
            x.splice(i, 1, e.target.value);
            setNarrativeQuestionBestAnswer(x);
        }

    };
    const handleChangeNarrQuestion=(e, i)=> {
        if(narrativeQuestionTxt.length ==0) {
            let n = typeAndNumQuestion[selectedIndex].num;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setNarrativeQuestionTxt(x);
        }
        else {
            const x= [...narrativeQuestionTxt];
            x.splice(i, 1, e.target.value);
            setNarrativeQuestionTxt(x);
        }
    };
    const [shortQuestionTxt, setShortQuestionTxt]= useState([]);
    const [shortQuestionAnswer, setShortQuestionAnswer]= useState([]);
    const handleChangeShortQuestionAnswer =(e,i)=> {
        if(shortQuestionAnswer.length ==0) {
            let n = typeAndNumQuestion[selectedIndex].num;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setShortQuestionAnswer(x);
        }
        else {
            const x= [...shortQuestionAnswer];
            x.splice(i, 1, e.target.value);
            setShortQuestionAnswer(x);
        }

    };
    const handleChangeShortQuestion= (e,i)=> {
        if(shortQuestionTxt.length ==0) {
            let n = typeAndNumQuestion[selectedIndex].num;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setShortQuestionTxt(x);
        }
        else {
            const x= [...shortQuestionTxt];
            x.splice(i, 1, e.target.value);
            setShortQuestionTxt(x);
        }

    };
    const handleGoOut=()=> {
        postToServer();
        window.location.href="/quiz/make-quiz";
    };
    const postToServer =() => {
        var y= {};
        y["유형번호"] =selectedIndex+1;
        y["thumbnail"]= thumbnail;
        y["type"]= typeAndNumQuestion[selectedIndex].type;
        y["문제개수"]= typeAndNumQuestion[selectedIndex].num;
        y["질문"] =typeBigQuestion[selectedIndex];
        y["본문텍스트"]= typeBigBodyQuestion[selectedIndex];
        y["세부문제정보"]= {} // {0: {}, 1: {}, ...} 유형별 세부 문제 정보.
        if(typeAndNumQuestion[selectedIndex].type== "리스닝") {
            y["리스닝파일"]= listeningmp3file;
        }
        for(var index=0; index<typeAndNumQuestion[selectedIndex].num; index++) {
            y["세부문제정보"][index+1]= {}
            y["세부문제정보"][index+1]["문제번호"]= index+1;
            y["세부문제정보"][index+1]["label"]= questionLabel[index];

            if(questionLabel[index]=="객관식") {
                y["세부문제정보"][index+1]["세부문제"]= multipleQuesTxt[index];
                y["세부문제정보"][index+1]["선택지개수"] =multipleQuesNum[index];
                y["세부문제정보"][index+1]["정답번호"]= multipleQuesChoiceCheck[index];
                y["세부문제정보"][index+1]["선택지"] =multipleQuesChoice[index];
                console.log(multipleQuesChoice);
            }
            else if(questionLabel[index]=="서술형") {
                y["세부문제정보"][index+1]["세부문제"] =narrativeQuestionTxt[index];
                y["세부문제정보"][index+1]["키워드"] =narrativeQuestionAnswer[index];
                y["세부문제정보"][index+1]["모범답"] =narrativeQuestionBestAnswer[index];
                console.log(narrativeQuestionTxt);
            }
            else if(questionLabel[index]=="단답형") {
                y["세부문제정보"][index+1]["세부문제"]= shortQuestionTxt[index];
                y["세부문제정보"][index+1]["키워드단어답"]= shortQuestionAnswer[index];
                console.log(shortQuestionTxt);
            }
        }
        console.log(y);
        
        axios
            .post(baseURL+"quiz/create-quiz/", {
                json: y,
                room_title: roomTitleValue,
                room_desc: roomDescValue,
                limit_time: limitTimeValue,
                type_num_ques: typeAndNumQuestion
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

    }
    const handleNext= ()=> {
        postToServer();
        setSelectedIndex(selectedIndex+1);
    };
    const getQuizFormSheet= (n)=> {

        //const n = typeAndNumQuestion[selectedIndex].num; // 세부 문제 개수만큼 루프를 돌리도록.
        const x = Array.from({length: n}).map(el => "");
        
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {x.map((_, index) => {
                    return (
                        <div style={{position: 'relative', marginTop: '20px'}}>
                            <Grid item xs={12}>
                                <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0"}}>
                                    <Typography component="h6" style={{fontFamily:'CookieRun-Regular', color: '#EC407A', fontWeight: 'bold'}}>
                                        {index+1}번.
                                    </Typography>
                                    <FormControl className={classes.formControl} style={{marginLeft: '30px', marginTop: '-3px'}}>
                                        <Select
                                            native
                                            value={questionLabel[index]}
                                            onChange={(e)=>handleChangeQuestionLabel(e, index)}
                                            input={<Input className={classes.changeFontFamilyClasses}/>}
                                        >
                                        <option value=""></option>
                                        <option value="객관식" className={classes.changeFontFamilyClasses}>객관식</option>
                                        <option value="단답형" className={classes.changeFontFamilyClasses}>단답형</option>
                                        <option value="서술형" className={classes.changeFontFamilyClasses}>서술형</option>
                                        </Select>
                                    </FormControl>  
                                    
                                    {multipleQuesNum!= undefined && questionLabel[index]== "객관식" && 
                                        <FormControl className={classes.formControl} style={{marginLeft: '30px', marginTop: '-3px'}}>
                                            <Select
                                                native
                                                value={multipleQuesNum[index]}
                                                onChange={(e)=>handleChangeMultipleChoiceNum(e, index)}
                                                input={<Input className={classes.changeFontFamilyClasses}/>}
                                            >
                                            <option value=""></option>
                                            <option value="1" className={classes.changeFontFamilyClasses}>1</option>
                                            <option value="2" className={classes.changeFontFamilyClasses}>2</option>
                                            <option value="3" className={classes.changeFontFamilyClasses}>3</option>
                                            <option value="4" className={classes.changeFontFamilyClasses}>4</option>
                                            <option value="5" className={classes.changeFontFamilyClasses}>5</option>
                                            </Select>
                                        </FormControl> 
                                    }
                                </div>   
                            </Grid> 
                            <Grid item xs={12}>
                                {multipleQuesNum!= undefined && questionLabel[index]== "객관식" && getMultipleQuesSheet(multipleQuesNum[index], index)}
                                
                                {questionLabel[index]== "단답형" && 
                                    <>
                                    <TextField 
                                        multiline={true}
                                        rows={3}
                                        style={{ width: "700px", marginLeft: '10px', marginTop: '20px'}}
                                        onChange={(e)=> handleChangeShortQuestion(e, index)}
                                        InputLabelProps={{
                                            style: { color: '#fff', fontStyle: "bold", height: '100%'}, 
                                        }} 
                                        inputProps={{
                                            style: {
                                                fontFamily: 'CookieRun-Regular',
                                            },
                                        }}
                                        placeholder="세부 질문 문제를 입력하세요."
                                        >
                                    </TextField>
                                    <TextField 
                                        rows={1}
                                        style={{ width: "300px", marginLeft: '10px', marginTop: '20px'}}
                                        onChange={(e)=> handleChangeShortQuestionAnswer(e, index)}
                                        InputLabelProps={{
                                            style: { color: '#fff', fontStyle: "bold", height: '100%'}, 
                                        }} 
                                        inputProps={{
                                            style: {
                                                fontFamily: 'CookieRun-Regular',
                                            },
                                        }}
                                        placeholder="답-키워드 단어 한개를 입력하세요."
                                        >
                                    </TextField></>
                                }
                                {questionLabel[index]== "서술형" && 
                                    <>
                                    <TextField 
                                        multiline={true}
                                        rows={3}
                                        style={{ width: "700px", marginLeft: '10px', marginTop: '20px'}}
                                        onChange={(e)=> handleChangeNarrQuestion(e, index)}
                                        InputLabelProps={{
                                            style: { color: '#fff', fontStyle: "bold", height: '100%'}, 
                                        }} 
                                        inputProps={{
                                            style: {
                                                fontFamily: 'CookieRun-Regular',
                                            },
                                        }}
                                        placeholder="세부 질문 문제를 입력하세요."
                                        >
                                    </TextField>
                                    <TextField 
                                        rows={1}
                                        style={{ width: "700px", marginLeft: '10px', marginTop: '20px'}}
                                        onChange={(e)=> handleChangeNarrQuestionAnswer(e, index)}
                                        InputLabelProps={{
                                            style: { color: '#fff', fontStyle: "bold", height: '100%'}, 
                                        }} 
                                        inputProps={{
                                            style: {
                                                fontFamily: 'CookieRun-Regular',
                                            },
                                        }}
                                        placeholder="세부 질문 키워드 답을 반점으로 구분지어 입력하세요."
                                        >
                                    </TextField>
                                    <TextField 
                                        multiline={true}
                                        rows={3}
                                        style={{ width: "700px", marginLeft: '10px', marginTop: '20px'}}
                                        onChange={(e)=> handleChangeNarrQuestionBestAnswer(e, index)}
                                        InputLabelProps={{
                                            style: { color: '#fff', fontStyle: "bold", height: '100%'}, 
                                        }} 
                                        inputProps={{
                                            style: {
                                                fontFamily: 'CookieRun-Regular',
                                            },
                                        }}
                                        placeholder="서술형 모범 답을 입력하세요."
                                        >
                                    </TextField></>
                                }
                            </Grid>
                        </div>
                    );
                })}
            </div>
        );
    };
    const handleChangeTypeQuestion= (e,i)=> {
        if(typeBigQuestion.length ==0) {
            let n = typeAndNumQuestion.length;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setTypeBigQuestion(x);
        }
        else {
            const x= [...typeBigQuestion];
            x.splice(i, 1, e.target.value);
            setTypeBigQuestion(x);
        }

    };
    const handleChangeTypeBodyQuestion= (e,i)=> {
        if(typeBigBodyQuestion.length ==0) {
            let n = typeAndNumQuestion.length;
            const x = Array.from({length: n}).map(el => "");
            x.splice(i, 1, e.target.value);
            setTypeBigBodyQuestion(x);
        }
        else {
            const x= [...typeBigBodyQuestion];
            x.splice(i, 1, e.target.value);
            setTypeBigBodyQuestion(x);
        }

    };
    const getStepContent = (step) => {
        switch (step) {
          case 0:
            return (
                <Grid
                container
                alignItems="flex-start"
                justify="space-around"
                direction="row"
                spacing={3}
                > 
                    <Grid item xs={12}>
                        <div className="basic-form form_file_input">
                            <form action="#">
                                <div className="input-group">
                                    <div className="from-file">
                                        <input id="b1" type="file" className="form-file-input form-control"  onChange={(e)=> handleOnChange(e)}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Grid>                    
                    <Grid item xs={12}>
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0"}}>
                            <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
                                QuizRoom Title  
                            </Typography>
                            <Input
                                placeholder="퀴즈 방 이름"
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                                style={{margin: "20px", marginTop: "-6px", width: "500px"}}
                                value={roomTitleValue}
                                onChange={roomTitleInputChange}
                            />
                        </div>
                    </Grid>      
                    <Grid item xs={12}>
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "-30px"}}>
                            <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
                                QuizRoom Description  
                            </Typography>
                            <Input
                                placeholder="퀴즈 방 관하여"
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                                style={{margin: "20px", marginTop: "-6px", width: "450px"}}
                                value={roomDescValue}
                                onChange={roomDescInputChange}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "-30px"}}>
                            <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
                               제한시간 
                            </Typography>
                            <Input
                                placeholder="분단위"
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                                style={{margin: "20px", marginTop: "-6px", width: "100px"}}
                                value={limitTimeValue}
                                onChange={limitTimeChange}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="p" style={{fontFamily:'CookieRun-Regular'}}>
                            유형별 10문제 초과해서는 안됩니다.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0px"}}>
                            {typeAndNumQuestion.map((val, index) =>{
                                return (
                                    <div style= {{display: 'flex', flexDirection: 'row', marginTop: "10px"}}>
                                    <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
                                        유형 &nbsp;
                                    </Typography>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            native
                                            value={val.type}
                                            onChange={(e)=>handleChangeType(e, index)}
                                            input={<Input className={classes.changeFontFamilyClasses}/>}
                                        >
                                        <option value=""></option>
                                        <option value="리딩" className={classes.changeFontFamilyClasses}>리딩</option>
                                        <option value="리스닝" className={classes.changeFontFamilyClasses}>리스닝</option>
                                        </Select>
                                    </FormControl>          
                                    <Input
                                        placeholder="x"
                                        inputProps={{
                                            'aria-label': 'Description',
                                        }}
                                        style={{margin: "20px", marginTop: "-6px", width: "60px"}}
                                        value={val.num}
                                        onChange={(e)=> handleChangeNumVal(e, index)}
                                    />                      
                                    <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>개</Typography>
                                    {index==0 && <Button className={classes.addButton} style={{marginTop: '-5px', marginLeft: '30px', height: '36px'}} onClick={addTypeAndNum}>추가</Button>}
                                    </div>
                                )
                            })}
                        </div>
                    </Grid>
                </Grid>
            );
          case 1:
            return(
                <div>
                    {check() ?
                        
                        <Grid
                            container
                            alignItems="flex-start"
                            justify="flex-start"
                            direction="row"
                            spacing={3}
                            > 
                            {typeAndNumQuestion.map((val, index) =>{
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
                            <Grid item xs={12}>
                            <Typography component="h6" style={{fontFamily:'CookieRun-Regular', fontSize:'23px'}}>
                                {selectedIndex+1} 번.&nbsp;&nbsp;{typeAndNumQuestion[selectedIndex]["type"]} 문제&nbsp;&nbsp;&nbsp;1번-{typeAndNumQuestion[selectedIndex]["num"]}번
                            </Typography>
                            </Grid>      
                            <Grid item xs={12}>
                                {typeAndNumQuestion[selectedIndex]["type"]== "리스닝" && 
                                    <div className="basic-form form_file_input">
                                        <form action="#">
                                            <div className="input-group">
                                                <div className="from-file">
                                                    <input id="b1" type="file" className="form-file-input form-control"  onChange={(e)=> handleOnChangeMp3(e)}/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                }
                            </Grid>
                            <Typography component="h6" style={{ fontFamily: 'CookieRun-Regular', fontSize: '15px', marginLeft: '30px' }}>
                                다음/완료를 누르면 해당 유형번호 퀴즈가 제출됩니다. 모든 필드를 채워넣어야 합니다.</Typography>
                            <Grid item xs={12}>
                                <TextField 
                                    style={{height: "35px", width: "70%", marginLeft: '10px', marginTop: '20px'}}
                                    onChange={(e)=> handleChangeTypeQuestion(e, selectedIndex)}
                                    InputLabelProps={{
                                        style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                    }}
                                    inputProps={{
                                        style: {
                                            fontFamily: 'CookieRun-Regular',
                                        },
                                    }}
                                    value={typeBigQuestion[selectedIndex]}
                                    placeholder="해당 유형 문제 질문을 입력하세요."
                                    >
                                </TextField>
                                <TextField 
                                    multiline={true}
                                    rows={9}
                                    style={{ width: "70%", marginLeft: '10px', marginTop: '20px'}}
                                    onChange={(e)=> handleChangeTypeBodyQuestion(e, selectedIndex)}
                                    InputLabelProps={{
                                        style: { color: '#fff', fontStyle: "bold", height: '100%'}, 
                                    }} 
                                    inputProps={{
                                        style: {
                                            fontFamily: 'CookieRun-Regular',
                                        },
                                    }}
                                    value={typeBigBodyQuestion[selectedIndex]}
                                    placeholder="해당 유형 문제 본문 문제를 입력하세요."
                                    >
                                </TextField>
                            </Grid>
                            {typeAndNumQuestion.map((val, index) =>{
                                return (
                                    <>
                                    {index==selectedIndex? 
                                        getQuizFormSheet(val["num"])
                                    :
                                        <div style={{display:'none'}}>{getQuizFormSheet(val["num"])}</div>
                                    }
                                    </>
                                );
                            })}
                            {typeAndNumQuestion.length-1 != selectedIndex &&
                                <Grid item xs={12}>
                                    <Button className={classes.button} onClick={()=> handleNext()}>다음</Button>
                                </Grid>
                            }
                            {typeAndNumQuestion.length-1== selectedIndex && <Grid item xs={12}>
                                <Button className={classes.button} onClick={()=> handleGoOut()}>완료</Button>
                            </Grid>}
                        </Grid> :
                        <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>퀴즈 양식을 잘못 제출하였습니다.
                        </Typography>
                    }
                </div>
            );
          default:
            return 'Unknown step';
        }
    };
    const steps = getSteps();
    const isStepOptional = (step) => step === 0;
    const [isLoaded, setIsLoaded]= useState(false);
    const handleClick = ()=> {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
            
        }
    },[isLoaded]);
    return (
        <div className={classes.root}>
        <PapperBlock title="퀴즈 출제방" whiteBg icon="ion-ios-grid-outline" desc="
        퀴즈 출제방을 생성하여 퀴즈를 출제하여 보세요.">
        <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                        <Typography>
                            <div style= {{display: 'flex', flexDirection: 'column', marginTop: "30px" , height: "100%"}}>
                                {getStepContent(index)}  
                                {isStepOptional(index) && 
                                    <Button
                                    className={classes.button}
                                    fullWidth
                                    variant="contained"
                                    onClick={() =>handleClick()}
                                    color="secondary"
                                    >
                                        다음
                                    </Button>
                                }
                            </div>
                        </Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </PapperBlock>
        </div>
    );
} 

export default CreateQuiz;