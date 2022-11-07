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



function ReadingEditForm(props) {


  const { classes } = props;
  const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
  let { id, myinbox } = useParams();
  
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

     if(txt!=='') {
      
      if(myinbox== "myinbox") {
          const strId= id.toString();
          axios
            .post(baseURL+"mypage/inbox-edit/" , {            
              key: strId,
              텍스트: txt,
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
              window.location.href="/my-inbox";
            });
      }
      else if(id!= null || id!== undefined) { // 내용을 편집하는 경우.

        axios
          .post(baseURL+"reading/reading-data-edit/"+id , {
            title: titleVal,
            actual_rsrc_txt: txt,
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
               window.location.href= '/reading';
          });

      }
      else{ // 내용을 새로 만드는 경우.
        console.log(titleVal);
        console.log(txt);
        axios
          .post(baseURL+"reading/reading-create/" , {            
            title: titleVal,
            text: txt,
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
            window.location.href="/reading";
          });
      }
    }

  }
  
  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    
    if(isLoaded) {
      if(myinbox=="myinbox") {
        const strId= id.toString();
        axios
          .get(baseURL+"mypage/inbox-edit/", {
            headers: {
              Authorization: localStorage.getItem('token')
                ? 'Token ' + localStorage.getItem('token')
                : null,
              'Content-Type': 'application/json',
              accept: 'application/json',
            },
            params: {
                key: strId

            }
          })
          .then(res => {
            const text= res["data"]["텍스트"];
            const title= text.substring(0, 10);
            setScriptText(text)
              
            if (text !== "") {
              
              const defaultValue = `<div>${text}</div>`;
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
      else if(id!= null || id!== undefined) {

        axios
          .get(baseURL+"reading/reading-get-data/"+id, {
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
            const text= res["data"]["text"];
            setScriptText(text)
              
            if (text !== "") {
              
              const defaultValue = `<div>${text}</div>`;
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
            editorStyle={{ height: '400px' }}
          />
        </Grid>
      </Grid>
      <Button className={classes.submitButton} onClick={btnSubmit}>Finish</Button>
      
    </Fragment>
    
  );
}

ReadingEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReadingEditForm);
