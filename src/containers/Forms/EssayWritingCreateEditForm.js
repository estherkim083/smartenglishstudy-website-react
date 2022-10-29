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
import { storage } from '../../firebase';
import { ref, uploadBytes } from '@firebase/storage';
import classNames from 'classnames';
import {useDropzone} from 'react-dropzone';
import CloudUpload from '@material-ui/icons/CloudUpload';
import '../../styles/components/react-dropzone/react-dropzone.css';



function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


function EssayWritingCreateEditForm(props) {


  const { classes } = props;
  const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
  let { id } = useParams();
  
  const [thumbnail, setThumbnail] = useState(''); 
  const [hash, setHash ]= useState('');

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    onDrop: file => {
      console.log(file[0].name.split("."));
      let x= file[0].name.split(".");
      const length_x= x.length;
      if(x[length_x-1] === "jpg" || x[length_x-1] === "png") { // 이미지 파일만 가능.
        console.log(file);
        setThumbnail(file[0]);
        uploadToFirebase(file[0]);
      }else{
        console.log("cannot upload (파일확장자가 jpg 또는 png 이어야 한다.)")
      }
    }
  });
  // const [dataEditorState, setEditorState] = useState(tempEditorState);
  const [titleVal, setTitleVal]= useState(null);
  const [aboutRoomVal, setAboutRoomVal]= useState(null);
  const [topicVal, setTopicVal]= useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const initialState = () => EditorState.createEmpty();
  const [editorState, setEditorState] = useState(initialState);

  const titleInputValChange = (e)=> {
    setTitleVal(e.target.value);
  }
  const aboutRoomInputValChange = (e)=> {
    setAboutRoomVal(e.target.value);
  }
  const topicInputValChange = (e)=> {
    setTopicVal(e.target.value);
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
    console.log(txt); // about topic input value text (about_content)
    if(id != 9999999999) {
        axios
          .post(baseURL+"writing/edit-essay-room/"+id , {            
            topic: topicVal,
            about_content: txt,         
            about_room: aboutRoomVal,
            room_title: titleVal,
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
            window.location.href="/writing/essay/";
          });
    }else {
      var hashVal='';
      if(hash == '') {
        hashVal= 'default/workshop.jpg';
      }
      else{
        hashVal= hash;
      }
      axios
          .post(baseURL+"writing/create-essay-room/" , {            
            topic: topicVal,
            about_content: txt,         
            about_room: aboutRoomVal,
            room_title: titleVal,        
            hash: hashVal,  
            email: localStorage.getItem("email"),
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
            window.location.href="/writing/essay/";
          });
    }

  }
  
  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    
    if(isLoaded) {
      if(id != 9999999999) { // 세부 보기로 글쓰기 방 내용을 변경할 경우.
        axios
          .get(baseURL+"writing/edit-essay-room/"+id, {
            headers: {
              Authorization: localStorage.getItem('token')
                ? 'Token ' + localStorage.getItem('token')
                : null,
              'Content-Type': 'application/json',
              accept: 'application/json',
            }
          })
          .then(res => {
            const topic= res["data"]["topic"];
            const about_room= res["data"]["about_room"];
            const about_content= res["data"]["about_content"];
            const room_title= res["data"]["room_title"];
            const hash= res["data"]["hash"];
            setTitleVal(room_title);
            setAboutRoomVal(about_room);
            setTopicVal(topic);
            setHash(hash);

            if (about_content !== "") {
              
              const defaultValue = `<div>${about_content}</div>`;
              console.log(defaultValue);
              setEditorState(
                EditorState.createWithContent(
                  ContentState.createFromBlockArray(convertFromHTML(defaultValue))
                )
              );
            }
          })
          .catch(error => {});
        }
      }
        
    }, [isLoaded]);  //isLoaded

  
    const uploadToFirebase = (file) => {
      const metadata = {
        contentType: 'image/*',
      };
      if(id == 9999999999) {
          const hashes= makeid(10);
          const fileRef= ref(storage, `posts/essayroom/${hashes}/${file.name}`);
          uploadBytes(fileRef, file, metadata).then(async()=> {
            console.log("uploaded!!");
          });
          const hashroot= `${hashes}/${file.name}`;
          setHash(hashroot);
      }else{        
        const hashes= hash.split('/')[0];
        const fileRef= ref(storage, `posts/essayroom/${hashes}/${file.name}`);
        uploadBytes(fileRef, file, metadata).then(async()=> {
          console.log("uploaded!!");
        });
      }
    };

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
          <div>
              <div className="row preview">
              </div>
              <div {...getRootProps()} className={classNames(classes.dropItem, 'dropZone')}>
                <div className="dropzoneTextStyle">
                  <input {...getInputProps()} />
                  <div className={classes.uploadIconSize}>
                    <CloudUpload/>
                  </div>
                </div>
              </div>
              
              <h4 style={{fontFamily:'CookieRun-Regular'}}>ThumbnailFile Upload - {thumbnail.name}</h4>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0"}}>
              <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
                  Room Title : 
              </Typography>
              <Input
              placeholder="글쓰기 방 이름"
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
          <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0"}}>
              <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
                  About Room : 
              </Typography>
              <Input
              placeholder="글쓰기 방에 관해서."
              inputProps={{
                  'aria-label': 'Description',
              }}
              style={{margin: "20px", marginTop: "-6px", width: "500px"}}
              value={aboutRoomVal}
              onChange={aboutRoomInputValChange}
              />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0"}}>
              <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
                  Writing Topic :
              </Typography>
              <Input
              placeholder="글쓰기 주제"
              inputProps={{
                  'aria-label': 'Description',
              }}
              style={{margin: "20px", marginTop: "-6px", width: "500px"}}
              value={topicVal}
              onChange={topicInputValChange}
              />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style= {{display: 'flex', flexDirection: 'column', margin: "3px"}}>
            <Typography component="h6" style={{fontFamily:'CookieRun-Regular'}}>
            About Topic 
            </Typography>
            <Editor
                editorState={editorState}
                editorClassName={classes.textEditor}
                toolbarClassName={classes.toolbarEditor}
                onEditorStateChange={onEditorStateChange}
            />
            </div>
        </Grid>
      </Grid>
      <Button className={classes.submitButton} onClick={btnSubmit}>Finish</Button>
      
    </Fragment>
    
  );
}

EssayWritingCreateEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EssayWritingCreateEditForm);
