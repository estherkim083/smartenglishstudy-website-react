import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { storage } from '../../../firebase';
import { ref, getDownloadURL } from "firebase/storage";


import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Loading from '../../../components/Loading';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontFamily: "CookieRun-Regular",
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: "20px"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontFamily: "CookieRun-Regular",
    margin: "20px"
  },
  description : {
    fontFamily: "CookieRun-Regular",
    margin: "20px"
  },
  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  dialogtitle: {
    fontFamily: "CookieRun-Regular",
    color: theme.palette.secondary.dark,
  },
  changeFontFamilyClasses: {
    fontFamily: "CookieRun-Regular",
  }
}));

function getSteps() {
  return ['전체스크립트', '빈칸뚫기 수행하기', '빈칸 뚫기 연습하기', '채점/검토하기'];
}

function ListeningMenu(props) {
    let { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [ authorName, setAuthorName] = useState(null);
    const [ scriptFileName, setScriptFileName] = useState(null);
    const [ scriptText, setScriptText] = useState(null);
    const [ scriptTitle, setScriptTitle] = useState(null);
    const [ scriptBlankText, setScriptBlankText] = useState([]);
    const [ blankTextValue, setBlankTextValue] = useState({});
    const [ gradeList, setGradeList ]= useState(null);
    const [ blankWords, setBlankWords ] = useState(null);
    const [ URLVal, setURLVal ]= useState(null);
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    const [caseZeroLoaded, setCaseZeroLoaded] = useState(false);
    const [caseTwoLoaded, setCaseTwoLoaded] = useState(false);
    const [caseThreeLoaded, setCaseThreeLoaded] = useState(false);

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const isStepOptional = (step) => step === 2;
    
    const [dataState, setDataState] = useState({
        open: false,
        X: '',
        Y: '',
    });

    const handleClickOpen = () => {
        setDataState({
        ...dataState,
        open: true
        });
    };
    const handleChangeX = X => event => {
        setDataState({
            ...dataState,
            [X]: Number(event.target.value)
        });
    };
    
    const handleChangeY = Y => event => {
        setDataState({
            ...dataState,
            [Y]: Number(event.target.value)
        });
    };
        
    const handleClose = () => {
        setDataState({
            ...dataState,
            open: false
        });
    };

    
  
    const handleNext = (activeStep) => {
      var divaudio= document.getElementById("listeningmp3audio");
      var audio= document.getElementsByTagName("audio");
      for(var i=0; i<audio.length; i++) {
        divaudio.removeChild(audio[i]);
      }
      if(activeStep===1) {
        console.log("step 1");
        const audio= document.createElement('audio');
        audio.controls = 'controls';
        audio.src      = URLVal;
        audio.type     = 'audio/mpeg';
        document.getElementById('listeningmp3audio').appendChild(audio);

      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    // 나가기 버튼 눌렀을 때, 다시 리스닝 게시판 화면으로 돌아가기.
    const handleReset = () => {
        window.location.href= "/listening";
    };

    const handleblankTextValue = (e) => {
        let oldVal =blankTextValue;
        oldVal[e.target.id] = e.target.value;
        setBlankTextValue(oldVal);
        console.log(oldVal);
    }

    useEffect(() => {
        setIsLoaded(true);
    });

    useEffect(() => {
        console.log(id);
        if(isLoaded) {
            // 화면에서 필요한 여러 리스닝 데이터들 불러오기.
            axios
                .get(baseURL+"listening/listening-view-scripts/", {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    },
                    params: {
                    id: id
                    }
                })
                .then(res=> {
                    console.log(res["data"]);
                    // 리스닝 mp3 파일 데이터 배열로 만들기, id 키 없애고 value 만 배열에 넣기.
                    var script_file_names= res["data"]["script_file_name"];
                    var count = Object.keys(script_file_names).length;
                    var keys = Object.keys(script_file_names);
                    var tmp_script_file= [];
                    for(var i=0; i<count; i++) {
                        tmp_script_file.push(script_file_names[keys[i]]);
                    }
                    // 데이터 값들 대입하기.
                    setAuthorName(res["data"]["author_name"]);
                    setScriptFileName(tmp_script_file);
                    setScriptText(res["data"]["script_text"]);
                    setScriptTitle(res["data"]["title"]);

                    //firestorage 에서 리스닝 mp3 파일 가져오기
                    if(tmp_script_file) {
                        var count= Object.values(tmp_script_file).length;
                        console.log(count);
                        for(var i=0; i<count;i++) {
                            getDownloadURL(ref(storage, `posts/${tmp_script_file[i]}`))
                            .then((url) => {
                                setURLVal(url);
                                const audio= document.createElement('audio');
                                audio.controls = 'controls';
                                audio.src      = url;
                                audio.type     = 'audio/mpeg';
                                document.getElementById('listeningmp3audio').appendChild(audio);
                            })
                            .catch((error) => {
                            });
                        }
                    }
                    //firestorage 에서 리스닝 mp3 파일 가져오기 끝
                    setCaseZeroLoaded(true);

                })
        }
    }, [isLoaded]);    

    const handleSubmitStepTwo= () => {
        handleClose();
        axios
          .get(baseURL+"listening/listening-blank-create/", {
            headers: {
              Authorization: localStorage.getItem('token')
                ? 'Token ' + localStorage.getItem('token')
                : null,
              'Content-Type': 'application/json',
              accept: 'application/json',
            },
            params: {
                id: id,
                x: dataState.X,
                y: dataState.Y,

            }
          })
          .then(res => {
            const txt= res["data"]["blank_script_text"];
            let searchvalue = '_______';
            const str_txt= txt.split(searchvalue);
            setScriptBlankText(str_txt);
            setCaseTwoLoaded(true);
          })
          .catch(error => {});
    };
    const handleScore= () => {
        console.log("채점하기 버튼 누름 step 2 에서.")
        // 'listening-blank-grade'
        axios
          .get(baseURL+"listening/listening-blank-grade/", {
            headers: {
              Authorization: localStorage.getItem('token')
                ? 'Token ' + localStorage.getItem('token')
                : null,
              'Content-Type': 'application/json',
              accept: 'application/json',
            },
            params: {
                id: id,
                blank_text_value: blankTextValue

            }
          })
          .then(res => {
            setBlankWords(res["data"]["blank_words"]);
            setGradeList(res["data"]["grade_list"]);
            setCaseThreeLoaded(true);
          })
          .catch(error => {});
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const getStepContent= (step) => {
        switch (step) {
            case 0:
                if(!caseZeroLoaded) {
                    return <Loading/>;
                }
                return <div className="row preview">
                            <div id="listeningmp3audio"></div>
                            <Typography variant="h6" component="h2" className={classes.title}>
                            <hr/> 제목 : {scriptTitle} <hr/>
                            </Typography>
                            <Typography variant="h6" component="h2" className={classes.description}>
                                글쓴이 : {authorName} <hr/><br/> 전체 스크립트 본문 : 
                            </Typography>
                            <Typography component="p" className={classes.description}>
                                {scriptText} <br/><br/><br/>
                            </Typography>
                        </div>;
            case 1:
                return <div>
                            <div>
                                <Button variant="contained" color="secondary" style={{marginTop: "20px", borderRadius: "0", width: "50%"}} onClick={handleClickOpen}>빈칸 정도 선택하기</Button>
                                <Dialog
                                disableBackdropClick
                                disableEscapeKeyDown
                                open={dataState.open}
                                onClose={handleClose}
                                >
                                <DialogTitle disableTypography="true" className={classes.dialogtitle}>빈칸 뚫기 정도를 선택하시오 (X줄당 Y개 빈칸뚫기). </DialogTitle>
                                <DialogContent>
                                    <form className={classes.container}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel className={classes.changeFontFamilyClasses}>X</InputLabel>
                                        <Select
                                        native
                                        value={dataState.age}
                                        onChange={handleChangeX('X')}
                                        input={<Input className={classes.changeFontFamilyClasses}/>}
                                        >
                                        <option value="" />
                                        <option value={2} className={classes.changeFontFamilyClasses}>두문장</option>
                                        <option value={5} className={classes.changeFontFamilyClasses}>다섯문장</option>
                                        <option value={10} className={classes.changeFontFamilyClasses}>열문장</option>
                                        <option value={20} className={classes.changeFontFamilyClasses}>이십문장</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel className={classes.changeFontFamilyClasses}>Y</InputLabel>
                                        <Select
                                        value={dataState.age}
                                        onChange={handleChangeY('Y')}
                                        input={<Input className={classes.changeFontFamilyClasses}/>}
                                        >
                                        <MenuItem value={1} className={classes.changeFontFamilyClasses}>1개</MenuItem>
                                        <MenuItem value={2} className={classes.changeFontFamilyClasses}>2개</MenuItem>
                                        <MenuItem value={5} className={classes.changeFontFamilyClasses}>5개</MenuItem>
                                        <MenuItem value={10} className={classes.changeFontFamilyClasses}>10개</MenuItem>
                                        <MenuItem value={15} className={classes.changeFontFamilyClasses}>15개</MenuItem>
                                        <MenuItem value={20} className={classes.changeFontFamilyClasses}>20개</MenuItem>
                                        <MenuItem value={30} className={classes.changeFontFamilyClasses}>30개</MenuItem>
                                        </Select>
                                    </FormControl>
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                    Cancel
                                    </Button>
                                    <Button onClick={handleSubmitStepTwo} color="primary">
                                    Ok
                                    </Button>
                                </DialogActions>
                                </Dialog>
                            </div>
                        </div>
            case 2:
                if(!caseTwoLoaded) {
                    return <Loading/>;
                }
                return <div style= {{margin:"10px"}}>
                    <div style={{fontFamily:"CookieRun-Regular"}}>빈칸 뚫기 위한 시간이 걸립니다. 조금만 기다려주시기 바랍니다.</div><br/>
                    <div style={{fontFamily:"CookieRun-Regular"}}>최소한 한문장당 빈칸 1개가 생성됩니다.</div><br/>
                    {scriptBlankText && 
                            scriptBlankText.map((item, index)=>{
                                if (index!= scriptBlankText.length-1) {
                                    return <><span style={{position: 'relative', margin:"10px", display:'inline-block'}}>{item}</span> <TextField 
                                            id= {index}
                                            style={{height: "35px", width: "100px",}}
                                            onChange={handleblankTextValue}
                                            >
                                        </TextField> </>
                                }
                                else {
                                    return <>{item}</>
                                }
                            })
                    }
                </div>;
            case 3:
                if(!caseThreeLoaded) {
                    return <Loading/>;
                }
                return <div style= {{margin:"10px"}}>
                    {console.log(blankWords)}
                    {scriptBlankText && 
                            scriptBlankText.map((item, index)=>{
                                if (index!= scriptBlankText.length-1) {
                                    {console.log(blankTextValue[index])}
                                    if (gradeList && gradeList[index] == 0 && blankWords[index]!== undefined) {
                                        return <><span style={{position: 'relative', margin:"10px", display:'inline-block'}}>{item}</span> <TextField 
                                                id= {index}
                                                style={{height: "80%", width: "100px"}}
                                                onChange={handleblankTextValue}
                                                placeholder= {blankTextValue[index]}
                                                helperText={blankWords[index]}
                                                InputLabelProps={{
                                                    style: { color: '#fff', fontStyle: "bold" }, 
                                                 }}
                                                 InputProps={{
                                                    style: {backgroundColor: "rgba(255,105,97, 0.9)"}
                                                 }}
                                                 FormHelperTextProps={{
                                                    style: { marginTop: '0px', fontFamily: "CookieRun-Regular", fontSize: '13px'}
                                                 }}
                                                >
                                            </TextField> </>

                                    }
                                    else if (gradeList && gradeList[index] == 1 && blankWords[index]!== undefined) {
                                        return <><span style={{position: 'relative', margin:"10px", display:'inline-block'}}>{item}</span> <TextField 
                                                id= {index}
                                                style={{height: "100%", width: "100px"}}
                                                onChange={handleblankTextValue}
                                                placeholder= {blankTextValue[index]}
                                                helperText={blankWords[index]}
                                                InputLabelProps={{
                                                    style: { color: '#fff', fontStyle: "bold"}, 
                                                 }}
                                                 InputProps={{
                                                    style: {backgroundColor: "rgba(119,221,119, 0.9)"}
                                                 }}
                                                 FormHelperTextProps={{
                                                    style: { marginTop: '0px', fontFamily: "CookieRun-Regular", fontSize: '13px'}
                                                 }}
                                                >
                                            </TextField> </>

                                    }
                                }
                                else {
                                    return <>{item}</>
                                }
                            })
                    }
                </div>;
            default:
                return 'Unknown step';
      }
    }

    return (
    <div>
        <PapperBlock title="Listening 빈칸뚫기 연습" whiteBg icon="ion-ios-grid-outline" desc="
        리스닝 빈칸뚫기 연습창입니다. 빈칸 뚫기 연습과 비교를 통해서 듣기 실력을 향상시켜 보세요.">
            <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                return (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                <div>
                    <Typography className={classes.title} variant="h6" component="h2">
                        모두 끝났습니다. 
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                    나가기
                    </Button>
                </div>
                ) : (
                <div>{activeStep ===0 ? <div></div> :
                                    <div id="listeningmp3audio"></div>
                    }
                    
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <div>{isStepOptional(activeStep) ? 
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={handleScore}
                            className={classes.button}
                                >채점하기
                            </Button>
                            :<Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleNext(activeStep)}
                            className={classes.button}
                                >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        
                        }
                        
                    </div>
                </div>
                )}
            </div>
            </div>
        </PapperBlock>
    </div>
  );
} 

export default ListeningMenu;