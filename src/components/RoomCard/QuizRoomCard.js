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
import styles from './cardStyle-jss';
import EditIcon from '@material-ui/icons/Edit';
import { storage } from '../../firebase';
import { ref, getDownloadURL } from "firebase/storage";
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

function QuizRoomCard(props) {
    const {
        classes,
        roomtitle,
        aboutroom,
        hash,
        id,
        participating,
        type,
        owner,
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
        getDownloadURL(ref(storage, `quiz-room/${hash}`))
            .then((url) => {
            setThumbnail(url);
            })
            .catch((error) => {
            });
    },[isLoaded]);
    const detailOpen= () => {
        window.location.href= "/smartenglishstudy-website-react/quiz/make-quiz/"+id;
    }
    const detailOpen2= ()=> {
      window.location.href= "/smartenglishstudy-website-react/quiz/take-quiz/"+id;
    };
    const handleDeleteQuizRoom= () => {
        axios
          .post(baseURL+"quiz/delete-quiz-room/"+id , {},
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
              window.location.href= "/smartenglishstudy-website-react/quiz/make-quiz/";
          });

    };
  return (
    <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
      <div className={classes.status}>
        {type=="QuizOwnerViewRoomCard" ?
          <Chip label="직접 만듦" style={{fontFamily: "CookieRun-Regular"}} className={classes.chipDiscount} /> :
          <></>
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
          {aboutroom} &nbsp; (출제자: {owner})
        </Typography>
        {/* <div className={classes.ratting}>
          <Rating value={ratting} max={5} readOnly />
        </div> */}
        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0"}}>
        {type=="QuizOwnerViewRoomCard" && 
            <><Button size="small" variant="outlined" color="secondary" onClick={detailOpen} style={{fontFamily: "CookieRun-Regular"}}>
                See Detail
            </Button>
            <IconButton onClick={handleDeleteQuizRoom} style= {{marginTop: '-3px'}}>
                <DeleteIcon></DeleteIcon>
            </IconButton></>
        }
        {type=="QuizViewRoomCard" && 
            <><Button size="small" variant="outlined" color="secondary" onClick={detailOpen2} style={{fontFamily: "CookieRun-Regular"}}>
                See Detail
            </Button></>
        }
          </div>
      </CardContent>
    </Card>
  );
}

QuizRoomCard.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  roomtitle: PropTypes.string.isRequired,
  aboutroom: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  participating: PropTypes.bool.isRequired,
  list: PropTypes.bool,
  id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

QuizRoomCard.defaultProps = {
  list: false,
};

const QuizRoomCardResponsive = withWidth()(QuizRoomCard);
export default withStyles(styles)(QuizRoomCardResponsive);
