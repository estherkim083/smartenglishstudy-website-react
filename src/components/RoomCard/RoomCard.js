import React ,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Rating from '../Rating/Rating';
import styles from './cardStyle-jss';
import EditIcon from '@material-ui/icons/Edit';
import { storage } from '../../firebase';
import { ref, getDownloadURL } from "firebase/storage";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import workshop from '../../images/workshop.jpg';

function RoomCard(props) {
  const {
    classes,
    roomtitle,
    aboutroom,
    topic,
    hash,
    id,
    participating,
    type,
    aboutbook,
    list,
    width,
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [ thumbnail, setThumbnail]= useState(null);
  const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;

  useEffect(()=> {
    setIsLoaded(true);
  });
  useEffect(()=> {
    console.log(hash);
    if(type=="EssayRoom") {
      getDownloadURL(ref(storage, `posts/essayroom/${hash}`))
        .then((url) => {
          setThumbnail(url);
        })
        .catch((error) => {
        });
    }else if(type=="BookWritingRoom") {
      getDownloadURL(ref(storage, `posts/bookwritingroom/${hash}`))
        .then((url) => {
          setThumbnail(url);
        })
        .catch((error) => {
        });
    }
  },[isLoaded]);
  const detailOpen= () => {
    window.location.href= "/writing/essay/"+id;
  }
  const detailWritingOpen= () => {
    window.location.href= "/writing/book/"+id;
  }
  const handleDeleteEssayRoom= () => {
    axios
      .post(baseURL+"writing/delete-essay-room/"+id , {},
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
          window.location.href= "/writing/essay/";
      });

  };
  const handleEditEssayRoom= () => {
      axios
        .get(baseURL+"writing/access-edit-essay-room/"+id,
        {
            headers: {
            Authorization: localStorage.getItem('token')
                ? 'Token ' + localStorage.getItem('token')
                : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
            }
        })
        .then(res => {
          if(res["data"]["msg"]== "can access") {

            window.location.href= '/writing/essay/create/' + id;
          }
        })
        .catch(error => {});
  };
  const handleEditBookWritingRoom =() => {

    axios
      .get(baseURL+"writing/access-edit-book-writing-room/"+id,
      {
          headers: {
          Authorization: localStorage.getItem('token')
              ? 'Token ' + localStorage.getItem('token')
              : null,
          'Content-Type': 'application/json',
          accept: 'application/json',
          }
      })
      .then(res => {
        if(res["data"]["msg"]== "can access") {

          window.location.href= '/writing/book/create/' + id;
        }
      })
      .catch(error => {});
  };
  const handleDeleteBookWritingRoom=() => {
    
    axios
      .post(baseURL+"writing/delete-book-writing-room/"+id , {},
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
          window.location.href= "/writing/book/";
      });
  };
  return (
    <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
      <div className={classes.status}>
        {participating ?
          <Chip label="참여 중" style={{fontFamily: "CookieRun-Regular"}} className={classes.chipDiscount} /> :
          <Chip label="미참여 중" style={{fontFamily: "CookieRun-Regular"}} className={classes.chipDiscount} /> 
        }
      </div>
      {thumbnail != null && 
        <CardMedia
          className={classes.mediaProduct}
          image={thumbnail}
          title={roomtitle}
        />
      }
      <CardContent className={classes.floatingButtonWrap}>
        <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
          {roomtitle}
        </Typography>
        <Typography component="p" className={classes.desc}>
          {aboutroom}
        </Typography>
        <br/>
        <Typography component="p" className={classes.desc}>
          {topic}
        </Typography>
        {type== "BookWritingRoom" && <Typography component="p" className={classes.desc2}>
          {aboutbook}
          </Typography>}
        {/* <div className={classes.ratting}>
          <Rating value={ratting} max={5} readOnly />
        </div> */}
          <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0"}}>
          {type != "EssayRoom"? 
            <><Button size="small" variant="outlined" color="secondary" onClick={detailWritingOpen} style={{fontFamily: "CookieRun-Regular"}}>
              See Detail
            </Button>
            <IconButton onClick={handleEditBookWritingRoom} style= {{marginTop: '-3px'}}>
              <EditIcon></EditIcon>
            </IconButton>
            <IconButton onClick={handleDeleteBookWritingRoom} style= {{marginTop: '-3px'}}>
              <DeleteIcon></DeleteIcon>
            </IconButton></>
          :        
          <><Button size="small" variant="outlined" color="secondary" onClick={detailOpen} style={{fontFamily: "CookieRun-Regular"}}>
                See Detail
            </Button>
            <IconButton onClick={handleEditEssayRoom} style= {{marginTop: '-3px'}}>
              <EditIcon></EditIcon>
            </IconButton>
            <IconButton onClick={handleDeleteEssayRoom} style= {{marginTop: '-3px'}}>
              <DeleteIcon></DeleteIcon>
            </IconButton></>}
          </div>
      </CardContent>
    </Card>
  );
}

RoomCard.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  roomtitle: PropTypes.string.isRequired,
  aboutroom: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  participating: PropTypes.bool.isRequired,
  aboutbook: PropTypes.string.isRequired,
  list: PropTypes.bool,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

RoomCard.defaultProps = {
  list: false,
};

const RoomCardResponsive = withWidth()(RoomCard);
export default withStyles(styles)(RoomCardResponsive);
