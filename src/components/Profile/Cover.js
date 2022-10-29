import React, { useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import { withStyles } from '@material-ui/core/styles';
import styles from './cover-jss';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../../firebase';



function Cover(props) {
  const inputFileRef = createRef(null);
  const inputFileRefBg = createRef(null);
  const [image, _setImage] = useState(null);
  const {
    classes,
    avatar,
    name,
    desc,
    coverImg,
  } = props;


  const [bgImage, _setBgImage] = useState('');
  const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
  useEffect(() => {
    _setBgImage(coverImg);
  },[coverImg]);
  const handleEdit= () => {
    console.log("edit backgroundImage");
  };

  const axiosPost = (type, newImageName) => {
    axios
      .post(baseURL+"mypage/update-img-data/"+type , {
        img: newImageName
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

  const handleOnChange = (event, type) => {
    const newImage = event.target?.files?.[0];
    console.log(newImage);

    const email= localStorage.getItem("email");
    const metadata = {
      contentType: 'image/*',
    };
    const fileRef= ref(storage, `profile-img/${email}/${newImage.name}`);
    uploadBytes(fileRef, newImage, metadata).then(async()=> {
      console.log("uploaded!!");
    });

    if (newImage) {
      if(type=="bg") {
          if (bgImage) {
            URL.revokeObjectURL(bgImage);
            inputFileRefBg.current.value = null;
          }
          _setBgImage(URL.createObjectURL(newImage));
          axiosPost('bg-img', `${email}/${newImage.name}`);
      }
      else if(type=="profileimg") {
          if (image) {
            URL.revokeObjectURL(image);
            inputFileRef.current.value = null;
          }
          _setImage(URL.createObjectURL(newImage));
          axiosPost('profile-img', `${email}/${newImage.name}`);
      }
    }
  };
  
  const handleClick = (event) => {
    /*if (image) {
      event.preventDefault();
      setImage(null);
    }*/
  };
  return (
    <div className={classes.cover} style={{ backgroundImage: `url(${bgImage})`, backgroundSize: '500px' }} >
        <div className={classes.opt}>
          
          <input accept="image/*" className={classes.input} id="icon-button-file-bg" type="file" ref={inputFileRefBg} onChange={(e)=> handleOnChange(e, "bg")}/>
          <label htmlFor="icon-button-file-bg">
            <IconButton className={classes.button} component="span">
              <EditIcon />
            </IconButton>
          </label>
        </div>
        <div className={classes.content}>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" 
          ref={inputFileRef} onChange={(e)=> handleOnChange(e, "profileimg")}/>
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <Avatar alt={name} src={image || avatar} className={classes.avatar}/>
          </IconButton>
        </label>
        
        <Typography variant="h5" className={classes.name} gutterBottom>
          {name}
          <VerifiedUser className={classes.verified} />
        </Typography>
        <Typography className={classes.subheading} gutterBottom>
          {desc}
        </Typography>
        </div>
    </div>
  );
}

Cover.propTypes = {
  classes: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};

export default withStyles(styles)(Cover);
