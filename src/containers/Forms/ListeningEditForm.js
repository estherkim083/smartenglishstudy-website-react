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



function ListeningEditForm(props) {


  const { classes } = props;
  const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
  let { id } = useParams();
  
  // const [dataEditorState, setEditorState] = useState(tempEditorState);
  const [titleVal, setTitleVal]= useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ scriptText, setScriptText ]= useState('');

  

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
    console.log(txt);
    //여기서 얻은 pure text(스크립트)와 file object와 제목, 유저 토큰(!!) 을 axios로 django 에 보낸다.
    
    var data= JSON.stringify(localStorage);
    var parsedData = JSON.parse(data);

    delete parsedData["user_name"];
    delete parsedData["email"];
    delete parsedData["token"];

    var audioFileName= {}
    let count =0;
    for(var key in parsedData) {
      audioFileName[count]= parsedData[key];
      localStorage.removeItem(key);
      count+= 1;
    }
    
    console.log(audioFileName);
     if(txt!=='') {
      if(id!= null || id!== undefined) {

        axios
          .post(baseURL+"listening/listening-edit-scripts/"+id , {
            script_file_name: audioFileName,
            title: titleVal,
            script_text: txt,
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
  
              window.location.href= '/smartenglishstudy-website-react/listening';
          });

      }
      else{
        axios
          .post(baseURL+"listening/listening-create-scripts/" , {
            email: localStorage.getItem("email"),
            script_file_name: audioFileName,
            title: titleVal,
            script_text: txt,
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

              window.location.href= '/smartenglishstudy-website-react/listening';
          });
      }
    }

  }
  
  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    
    if(isLoaded) {
      if(id!= null || id!== undefined) {

        axios
          .get(baseURL+"listening/listening-get-data/"+id, {
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
          .then(res => {
            const title= res["data"]["title"];
            const script_text= res["data"]["script_text"];
            setScriptText(script_text)
              
            if (script_text !== "") {
              
              const defaultValue = `<div>${script_text}</div>`;
              console.log(defaultValue);
              setEditorState(
                EditorState.createWithContent(
                  ContentState.createFromBlockArray(convertFromHTML(defaultValue))
                )
              );
            }
            setTitleVal(title);
          })
          .catch(error => {});
        }
        
    }}, [isLoaded]);  


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
              placeholder="Placeholder"
              inputProps={{
                  'aria-label': 'Description',
              }}
              style={{margin: "20px", marginTop: "-6px", width: "500px"}}
              value={titleVal}
              onChange={titleInputValChange}
              />
          </div>
        </Grid>
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

ListeningEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListeningEditForm);
