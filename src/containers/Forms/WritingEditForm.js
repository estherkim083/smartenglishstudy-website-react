import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { convertFromRaw, EditorState, convertToRaw, ContentState ,convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../../styles/components/react-draft-wysiwyg/react-draft-wysiwyg.css';
import styles from './edit-jss';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Slider from '@material-ui/core/Slider';

const PrettoSlider = withStyles({
  root: {
    color: '#EC407A',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);



function WritingEditForm(props) {


  const { classes, datas, type, progress } = props;
  const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
  let { id, userid, email } = useParams();
  
  // const [dataEditorState, setEditorState] = useState(tempEditorState);
  const [titleVal, setTitleVal]= useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ scriptText, setScriptText ]= useState('');
  const [ bookProgress, setBookProgress] = useState(null);

  

  const initialState = () => EditorState.createEmpty();

  const [editorState, setEditorState] = useState(initialState);


  const titleInputValChange = (e)=> {
    setTitleVal(e.target.value);
  }

  const onEditorStateChange = editorStateParam => {
    setEditorState(editorStateParam);
  };


  const btnSubmit= async() => {
    var x= draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(x);
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv)
    newDiv.setAttribute('id','newDiv');

    document.getElementById("newDiv").innerHTML=x;
    const divs = [...document.getElementById("newDiv").children];
    const text= divs
      .map(function(x){
          var results= x.textContent.trim();
          results+= '\n';
          return results;
      });
    var txt='';
    for(let i=0; i< text.length; i++) {
      txt+= text[i];
    }
    if(type=="book") {

      console.log(bookProgress);
      axios
        .post(baseURL+"writing/get-book-writing-data/edit/"+id+"/"+userid , {
          my_writing_topic: titleVal,
          my_writing_content: txt,
          book_progress: bookProgress
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
        })
        .then(function (res) {  
            console.log(res);
            window.location.href= "/writing/book/"+id+ "/"+userid+ '/'+email;
        });
    }else if(type=="essay") {

      axios
        .post(baseURL+"writing/get-essay-writing-data/edit/"+id+"/"+userid , {
          my_writing_topic: titleVal,
          my_writing_content: txt,
          book_progress: bookProgress
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
        })
        .then(function (res) {  
            console.log(res);
           window.location.href= "/writing/essay/"+id+ "/"+userid+ '/'+email;
        });
    }

  }
  
  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    
    if(isLoaded) {
        setTitleVal(datas.my_writing_topic);
        setEditorState(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(convertFromHTML(datas.my_writing_content))
          )
        );       
    }  
  }, [isLoaded]);  //isLoaded


  return (
    <Fragment>
      <Grid
        container
        alignItems="flex-start"
        justify="space-around"
        direction="row"
        spacing={3}
      >
        <Grid item xs={12}>
          <div style= {{display: 'flex', flexDirection: 'row', marginTop: "30px"}}>
              <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
                  제목 : 
              </Typography>
              <Input
              placeholder="제목"
              inputProps={{
                  'aria-label': 'Description',
              }}
              style={{margin: "20px", marginTop: "-6px", width: "500px"}}
              value={titleVal}
              onChange={titleInputValChange}
              />
          </div>
        </Grid>
        {type=="book" && <><Grid item xs= {12}>
          
          <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0"}}>
              <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
                  책 읽음 퍼센티지&nbsp;&nbsp;&nbsp;
              </Typography>
          <PrettoSlider style= {{width :'20%', marginLeft: '20px'}} valueLabelDisplay="auto" defaultValue={progress} onChange={(e, val) => setBookProgress(val)}/>
          </div>
        </Grid></>}
        <Grid item xs={12}>
          <Editor
            editorState={editorState}
            editorClassName={classes.textEditor}
            toolbarClassName={classes.toolbarEditor}
            onEditorStateChange={onEditorStateChange}
          />
        </Grid>
      </Grid>
      <Button className={classes.submitButton} onClick={btnSubmit}>Finish</Button>
      
    </Fragment>
    
  );
}

WritingEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  datas: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
};

export default withStyles(styles)(WritingEditForm);
