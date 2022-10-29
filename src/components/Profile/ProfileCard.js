import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Favorite from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';
import styles from './cardStyle-jss';
import axios from 'axios';

import { storage } from '../../firebase';
import { ref, getDownloadURL } from "firebase/storage";

function ProfileCard(props) {
  const {
    classes,
    id, 
    cover,
    avatar,
    name,
    title,
    connection,
    isVerified,
    followers,
    liked,
    following,
    liking,
    isfriend
  } = props;
  const [labelLike, setLabelLike ]= useState('');
  const [labelFollow, setLabelFollow ]= useState('');
  const [btnText, setBtnText]= useState('');
  const [ isLoaded, setIsLoaded] =useState(false);
  const [avatarFile, setAvatarFile ]= useState(null);
  const [coverFile, setCoverFile ]= useState(null);
  const [IsFollowing, setIsFollowing ]= useState(null);
  const [IsLiking, setIsLiking ]= useState(null);
  const baseURL= process.env.REACT_APP_BASE_BACKEND_URL;


  useEffect(() => {
    setLabelLike("Liked by "+liked);
    setLabelFollow("Followed by "+followers);
    setIsLoaded(true);
  });
  useEffect(() => {
    setIsFollowing(following);
    setIsLiking(liking);
    if(isfriend) {
      setBtnText("친구 삭제");
    }else{
      setBtnText("친구 연결");
    }
    getDownloadURL(ref(storage, `profile-img/${avatar}`))
        .then((url) => {
          setAvatarFile(url);
        })
        .catch((error) => {
        });
    getDownloadURL(ref(storage, `profile-img/${cover}`))
        .then((url) => {
          setCoverFile(url);
        })
        .catch((error) => {
        });
  },[isLoaded]);
  const handleFollowFalse= () => {
    setIsFollowing(false);
    axios
      .post(baseURL+"mypage/unfollow-friends/" , {
        name: name
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
      });
  }
  const handleFollow= () => { //follow-friends
    setIsFollowing(true);

    axios
      .post(baseURL+"mypage/follow-friends/" , {
        name: name
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
      });
  };
  const handleLikeFalse= () => {
    setIsLiking(false);
    
      axios
        .post(baseURL+"mypage/unlike-friends/" , {
          name: name
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
        });
  }
  const handleLike= () => {
    setIsLiking(true);
    axios
      .post(baseURL+"mypage/like-friends/" , {
        name: name
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
        
      });
  };
  const handleConnectBtnClick= () => {
    if(btnText=="친구 삭제") {
      
      setBtnText("친구 연결");
        
      axios
        .post(baseURL+"mypage/delete-friends/" , {
          name: name
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
        });
    }else if(btnText=="친구 연결"){

      setBtnText("친구 삭제");
      axios
        .post(baseURL+"mypage/add-friends/" , {
          name: name
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
        });
    }
  }

  return (
    <Card className={classes.cardSocmed}>
      <CardMedia
        className={classes.mediaProfile}
        image={coverFile}
        title="cover"
      />
      <CardContent className={classes.contentProfile}>
        <Avatar alt="avatar" src={avatarFile} className={classes.avatarBig} />
        <Typography variant="h6" className={classes.name} gutterBottom>
          {name}
          {isVerified && <VerifiedUser className={classes.verified} />}
        </Typography>
        <Typography className={classes.subheading} gutterBottom>
          <span className={classes.textspan}>{title}</span>
        </Typography>
        <Typography variant="caption" component="p">
          {connection}
            &nbsp;connection
        </Typography>
        <Button className={classes.buttonProfile} size="large" variant="outlined" color="secondary" onClick={handleConnectBtnClick}>
          {btnText}
        </Button>
      </CardContent>
      <Divider />
      <CardActions>
        <BottomNavigation
          showLabels
          className={classes.bottomLink}
        >
         {IsFollowing!= null && IsFollowing ?
                <BottomNavigationAction label="Following" icon={<SupervisorAccount color="primary"/>} onClick={handleFollowFalse}/>
                :<BottomNavigationAction label="Follow" icon={<SupervisorAccount color="secondary"/>} onClick={handleFollow}/>}
          {labelFollow && <BottomNavigationAction label={labelFollow} icon={<SupervisorAccount />} />}
          {IsLiking!= null && IsLiking ?
                <BottomNavigationAction label="Liking" icon={<Favorite color="primary"/>} onClick={handleLikeFalse}/>
                :<BottomNavigationAction label="Like" icon={<Favorite color="secondary"/>} onClick={handleLike}/>
          }
          {labelLike && <BottomNavigationAction label={labelLike} icon={<Favorite />} />}
        </BottomNavigation>
      </CardActions>
    </Card>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  cover: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  connection: PropTypes.number.isRequired,
  isVerified: PropTypes.bool,
  followers : PropTypes.number.isRequired,
  liked: PropTypes.number.isRequired,
  following: PropTypes.bool,
  liking: PropTypes.bool,
  isfriend: PropTypes.bool,
};

ProfileCard.defaultProps = {
  isVerified: false
};

export default withStyles(styles)(ProfileCard);
