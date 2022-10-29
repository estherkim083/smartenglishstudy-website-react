
import React, {useEffect, useState} from 'react';
import ListeningEditForm from '../../Forms/ListeningEditForm';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import CloudUpload from '@material-ui/icons/CloudUpload';
import '../../../styles/components/react-dropzone/react-dropzone.css';
import { storage } from '../../../firebase';
import { ref, uploadBytes } from '@firebase/storage';
import classNames from 'classnames';
import {useDropzone} from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '200px'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    dropItem: {
      borderColor: theme.palette.divider,
      background: theme.palette.background.default,
      borderRadius: theme.rounded.medium,
      color: theme.palette.text.disabled,
      textAlign: 'center'
  
    },
  uploadIconSize: {
    alignItems: 'center',
    '& svg': {
      width: 72,
      height: 72,
      fill: theme.palette.secondary.main,
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
    '& svg': {
      fill: theme.palette.common.white
    }
  }
}));
  
function getSteps() {
    return ['리스닝 mp3 파일 업로드', '리스닝 텍스트 스크립트 업로드'];
  }
  
  function getStepContent(step, classes, dict) {
    switch (step) {
      case 0:
          const files = dict.filesArray;
          
          const fileShow = files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ));
          console.log(files.length);
          let dropzoneRef;
        return(
          <div>
            <div className="row preview">
            </div>
            <div {...dict.getRootProps()} className={classNames(classes.dropItem, 'dropZone')}>
              <div className="dropzoneTextStyle">
                <input {...dict.getInputProps()} />
                <div className={classes.uploadIconSize}>
                  <CloudUpload/>
                </div>
              </div>
            </div>
            
            <h4>Files</h4>
            <ul>{fileShow}</ul>
          {/* end */}
        </div>
        );
      case 1:
        return (<ListeningEditForm />);
      default:
        return 'Unknown step';
    }
  }

function ListeningCreateScripts(props) {
  
  const [filesArray, setFilesArray] = useState([]); // eslint-disable-line
  // const [acceptedFiles] = useState(props.acceptedFiles); // eslint-disable-line
  
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    onDrop: files => {
      console.log(files);
      let x= files[0].name.split(".");
      const length_x= x.length;
      if(x[length_x-1] === "mp3") {
        let oldFiles = filesArray;
        oldFiles = oldFiles.concat(files);
        if (oldFiles.length > 5) {
          console.log(`Cannot upload more than 5 items.`);
        } else {
          setFilesArray(oldFiles);
        }
        console.log(filesArray);
      }else{
        console.log("cannot upload (파일확장자가 mp3 이어야 한다.)")
      }
    }
  });

  const handleClick= (files) => {
    console.log(files);
    const metadata = {
      contentType: 'audio/mpeg',
    };
    for(var i=0;i<files.length;i++) {

      const fileRef= ref(storage, `posts/${files[i].name}`);
      uploadBytes(fileRef, files[i], metadata).then(async()=> {
        console.log("uploaded!!");
      });
      localStorage.setItem("audio"+i, files[i].name);
    }
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const isStepOptional = (step) => step === 0;

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
    });

  return (
    
    <div className={classes.root}>
        <PapperBlock title="리스닝 스크립트 업로드" icon="ion-ios-filing-outline" desc="연습하고자 하는 리스닝 스크립트를 업로드하여 리스닝 빈칸 채우기 연습을 해보세요.">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index, classes, {filesArray, getRootProps, getInputProps, handleClick})}
              {isStepOptional(index) && 
                <Button
                  className={classes.button}
                  fullWidth
                  variant="contained"
                  onClick={ () => { handleClick(filesArray) } }
                  color="secondary"
                >
                  [ 동기화 - Sync ]  파일을 먼저 업로드하여 버튼을 눌러 동기화시켜 주세요.
                  <span className={classes.rightIcon}>
                    <CloudUpload />
                  </span>
                </Button>
              }
            
             </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </PapperBlock>
  </div>
  );
}


export default ListeningCreateScripts;
