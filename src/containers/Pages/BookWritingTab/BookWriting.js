import React, {useEffect , useState, Fragment, useCallback} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WritingEditForm from '../../Forms/WritingEditForm';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
// import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useFirestoreQuery } from './hooks';
import {db} from '../../../firebase';
import { doc, getDoc } from "firebase/firestore";
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    
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

function BookWriting(props) {

    const classes = useStyles();
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    let { id, userid, email } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [ bookWritingDatas, setBookWritingDatas] = useState({});
    const [ metaDatas, setMetaDatas ]= useState({});
    const [ editable, setEditable] = useState(false);
    const [ actualEditState ,setActualEditState ] = useState(false);
    const [currentUserDataJson, setCurrentUserData] = useState({});

    // const email= localStorage.getItem("email");
    const docId= email+"@"+id+ "@"+ userid;
    const dataJson = useFirestoreQuery(
        doc(db, "book_comment", docId)
    );
    const [dataJsons, setDataJsons ] = useState(null);
    
    const [dataState, setDataState] = useState({
        open: false,
        friends: [],
    });
    const [ friendsName, setFriendsName ]= useState([]);

    const editClicked= () => {
        setActualEditState(true);
    };
    const [expanded, setExpanded] = useState(null);

    const handleChange = useCallback(panel => {
        const expandedValue = expanded !== panel ? panel : false;
        setExpanded(expandedValue);
    }, [expanded]);

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
        console.log(userid);
        console.log(id);

        console.log(dataJson);
        console.log(currentUserDataJson);
        if(dataJson && dataJson!= undefined&& Object.keys(dataJson).length== 0 ) {
            console.log(dataJson);
        }else{
            setDataJsons(dataJson);
        }
        setIsLoaded(true);
    });
    useEffect(() => {
        if(isLoaded) {
            axios
                .get(baseURL+"writing/define-book-writing-editor/"+id+"/"+userid, { //첨삭가능한 친구 목록 불러오기.
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    }
                })
                .then(res => {
                    setFriendsName(res["data"]["friends_list"]);
                    setDataState({
                        ...dataState,
                        friends: res["data"]["friends"]
                    });
                    
                })
                .catch(error => {});

            getDoc(doc(db, "current_user_data", localStorage.getItem("email"))).then(docSnap => {
                if (docSnap.exists()) {
                  console.log("Document data:", docSnap.data());
                  setCurrentUserData(docSnap.data());
                } else {
                  console.log("No such document!");
                }
            })
            axios
            .get(baseURL+"writing/check-if-book-writing-participant-user/"+id+"/"+userid, {
                headers: {
                Authorization: localStorage.getItem('token')
                    ? 'Token ' + localStorage.getItem('token')
                    : null,
                'Content-Type': 'application/json',
                accept: 'application/json',
                }
            })
            .then(res => {
                setEditable(res["data"]["editable"]);
                console.log(res["data"]["editable"]);
                if(res["data"]["editable"] != true) {
                    console.log("not true");
                    axios
                        .get(baseURL+"writing/get-book-writing-data/view/"+id+"/"+userid, {
                            headers: {
                            Authorization: localStorage.getItem('token')
                                ? 'Token ' + localStorage.getItem('token')
                                : null,
                            'Content-Type': 'application/json',
                            accept: 'application/json',
                            }
                        })
                        .then(res => {                        
                            setBookWritingDatas(res["data"]);
                        })
                        .catch(error => {});
    
                }else {
                    console.log("true");
                    axios
                        .get(baseURL+"writing/get-book-writing-data/edit/"+id+"/"+userid, {
                            headers: {
                            Authorization: localStorage.getItem('token')
                                ? 'Token ' + localStorage.getItem('token')
                                : null,
                            'Content-Type': 'application/json',
                            accept: 'application/json',
                            }
                        })
                        .then(res => {
                            
                            const sliceAt = -3;
                            const dataArr = Object.entries(res["data"]);
                            const metaDatas = Object.fromEntries(dataArr.slice(0, sliceAt));
                            const datas = Object.fromEntries(dataArr.slice(sliceAt));
                            console.log(datas);
                            console.log(metaDatas);
                            setBookWritingDatas(datas);
                            setMetaDatas(metaDatas);
                        })
                        .catch(error => {});
    
                }
            })
            .catch(error => {});
            
            
        }
    }, [isLoaded]);
    const handleSubmitComment= (data) => {
        console.log(data);
        axios
          .post(baseURL+"writing/submit-book-writing-comment/"+id+"/"+userid , { 
            submitData: data,
            roomUserEmail: email
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
          });
    }
    const shareClicked =() => {
        setDataState({
            ...dataState,
            open: true
        });
    };
        
    const handleClose = () => {
        setDataState({
            ...dataState,
            open: false
        });
    };
    const handleSubmitEditorButton= () => {

        var share_friends_var = [];
        for(var i=0; i<friendsName.length;i++) {
            if(dataState.friends[i][friendsName[i]] == true) {
                share_friends_var.push(friendsName[i]);
            }
        }
        axios
            .post(baseURL+"writing/define-book-writing-editor/"+id+"/"+userid , { 
                checkedData: dataState.friends
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
                window.location.href='/writing/editor';
            });
    };
    const handleChangeForm = (index, friend) => event => {
        console.log(dataState.friends);
        dataState.friends[index][friend]= event.target.checked
        setDataState({
          ...dataState,
          friends: dataState.friends
        });
      };
    
    return (
        <div>
            <PapperBlock title="BookWriting Menu" whiteBg icon="ion-ios-grid-outline" desc="
            영어책 Summary 또는 주제별 글을 작성하고 공유해보세요. (글 편집에서는 사진 첨부 불가) ">
                <Fragment>
                    <Grid
                        container
                        alignItems="stretch"
                        justify="space-around"
                        direction="row"
                        spacing={3}
                    >
                        {editable == true && metaDatas != {} && metaDatas &&
                            <><Grid item xs={12}>
                                <div style= {{display: 'flex', flexDirection: 'row', marginTop: "30px", height: "100%"}}>
                                    <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "14px"}}>
                                        {/*{String.fromCharCode(60)}{String.fromCharCode(60)} 제목  {String.fromCharCode(62)}{String.fromCharCode(62)}*/}
                                        Created by&nbsp;-&nbsp;{metaDatas.owner_name}/ {metaDatas.owner_email}
                                    </Typography>
                                    <IconButton onClick={editClicked} style= {{marginTop: '-30px'}}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton onClick={shareClicked} style= {{marginTop: '-30px'}}>
                                        <AccessibilityNewIcon/>
                                    </IconButton>
                                    {console.log(dataState)}
                                    {dataState!= undefined && dataState && localStorage.getItem("email") == email && <Dialog
                                        disableBackdropClick
                                        disableEscapeKeyDown
                                        open={dataState.open}
                                        onClose={handleClose}
                                        >
                                        <DialogTitle disableTypography={true} className={classes.dialogtitle}>첨삭할 친구들을 선택하세요.</DialogTitle>
                                        <DialogContent>
                                            <FormControl component="fieldset">
                                            <FormGroup>
                                                { friendsName&& friendsName!= undefined&& dataState.friends.length >0 &&friendsName.map((friend, index)=> {
                                                    {console.log(dataState.friends[index][friend])}
                                                        return <FormControlLabel
                                                            key={index}
                                                            control= {(
                                                                <Checkbox
                                                                    checked={dataState.friends[index][friend]}
                                                                    onChange={handleChangeForm(index, friend)}
                                                                    value= {index}
                                                                />
                                                            )}
                                                            label={friend}
                                                        />;
                                                    })
                                                }
                                            </FormGroup>
                                            <FormHelperText>첨삭자를 선택하세요.</FormHelperText>
                                            </FormControl>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose} color="primary">
                                            Cancel
                                            </Button>
                                            <Button onClick={handleSubmitEditorButton} color="primary">
                                            Ok
                                            </Button>
                                        </DialogActions>
                                    </Dialog>}
                                </div>
                            </Grid>
                            {/* <Grid item xs={12}>                                
                                <Accordion expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{fontSize:'14px', fontWeight:'bold', fontFamily:'CookieRun-Regular', color: '#EC407A'}}>Writing-Topic: {metaDatas.topic}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography style={{fontFamily:'CookieRun-Regular', color: '#EC407A', fontSize:'14px'}}>
                                        {metaDatas.about_content}
                                    </Typography>
                                    </AccordionDetails>
                                    {console.log(metaDatas)}
                                </Accordion>
                            </Grid></> */}</>
                        }
                        {editable== true && actualEditState== true && bookWritingDatas != {} && bookWritingDatas ? 
                            <> {console.log(bookWritingDatas.book_progress)}
                                <WritingEditForm type="book" datas={bookWritingDatas} progress={bookWritingDatas.book_progress}/>
                            </>
                        :
                            <>
                            <Grid item xs={12}>
                                <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0px", height: "100%"}}>
                                    <Typography component="p" style={{fontFamily:'CookieRun-Regular' , fontSize: "20px"}}>
                                        {bookWritingDatas.my_writing_topic}
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="p" style={{fontFamily:'CookieRun-Regular' , fontSize: "15px"}}>
                                    {bookWritingDatas.my_writing_content}
                                </Typography>
                            </Grid></>
                        }
                        
                        <Grid item xs={12}>
                            { currentUserDataJson &&currentUserDataJson!=undefined && Object.keys(currentUserDataJson).length!=0 && 
                            <CommentSection
                                currentUser={currentUserDataJson}
                                commentData={dataJsons!= undefined && dataJsons && Object.keys(dataJsons).length!=0? dataJsons: []}
                                onSubmitAction={(submitData) => {
                                    if(dataJsons!= undefined && dataJsons&& Object.keys(dataJsons).length!=0) {
                                        var x =dataJsons;
                                        x.push(submitData);
                                        setDataJsons(x);
                                        handleSubmitComment(x);
                                    }else{
                                        var x= [submitData];
                                        setDataJsons(x);
                                        handleSubmitComment(x);
                                    }
                                }}
                                onDeleteAction= {(deleteData)=> {
                                    for(var i=0;i<dataJsons.length; i++) {
                                        if(deleteData["parentOfDeleteId"]!= undefined && deleteData["parentOfDeleteId"]== dataJsons[i]["comId"]) {
                                            var x= dataJsons;
                                            x.splice(i,1);
                                            console.log(x);
                                            setDataJsons(x);
                                            handleSubmitComment(x);
                                            break;
                                        }
                                        else if(deleteData["parentOfDeleteId"]== undefined && dataJsons[i]["comId"] == deleteData["comIdToDelete"]) {
                                            var x= dataJsons;
                                            x.splice(i,1);
                                            console.log(x);
                                            setDataJsons(x);
                                            handleSubmitComment(x);
                                            break;
                                        }
                                    }     
                                }}
                                onReplyAction={(data) => {    
                                    
                                    if(data != undefined) {
                                        if(dataJsons!= undefined && dataJsons&& Object.keys(dataJsons).length!=0) {
                                            console.log(data);
                                            console.log(dataJsons);
                                            setDataJsons(dataJsons);
                                            handleSubmitComment(dataJsons);
                                        }  
                                    } 
                                    
                                }}
                            />}
                        </Grid>
                    </Grid>
                </Fragment>
            </PapperBlock>
        </div>
    );
} 

export default BookWriting;