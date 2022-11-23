import React, {useEffect , useState, Fragment, useRef} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UnderLine from '../../../images/underline.png';
import parse from 'html-react-parser';
import Rating from '../../../components/Rating/Rating';
import FormControl from '@material-ui/core/FormControl';
import Loading from '../../../components/Loading';

const useStyles = makeStyles((theme) => ({
    textArea: {
        fontFamily:'CookieRun-Regular',
        border: 'none',
        background: `transparent url(${UnderLine}) repeat`,
        backgroundSize: '95px',
        overflow: 'hidden',
        lineHeight:'33.51px',
        fontWeight:'bold',
        dataRole :'none',
        wrap: "hard",
        width: "100%",
        resize: 'none',
        '&:focus': {
            outline: 'none'
        }
    },
    button : {
        margin: "10px",
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, 
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.white,
        width:"12%",
        fontFamily: 'CookieRun-Regular',
        fontSize: '15px',
        marginTop: "30px",
        '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark, 
        },
    },
    input: {
        margin: theme.spacing(3),
        width: "90%",
        "& input::placeholder": {            
            fontFamily: 'CookieRun-Regular',
        }
    },    
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    
    medium: {
        '& button': {
            width: 48,
            height: 48,
            padding: 12
        },
        '& svg': {
            width: 24,
            height: 24
        }
    },
}));
function EditorPageView(props) {

    const classes = useStyles();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps 
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    let { label, id } = useParams();
    const [ datas, setDatas ]= useState({});
    const [ inputvalue, setInputVal ]= useState('');
    const [ editState, setEditState ]= useState(false);
    const [rating, setRating] = useState(null);
    const [ text, setText ]= useState(null);
    var [ htmlText, sethtmlText] =useState('');
    const [ textFieldInput, setTextFieldInput ]= useState('');
  
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
        setIsLoaded(true);
    });
    useEffect(() => {
        if(isLoaded) {
            if(label== "book") {
                setEditState(true);
                axios
                    .get(baseURL+"writing/edit-book-writing/"+id, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                            ? 'Token ' + localStorage.getItem('token')
                            : null,
                        'Content-Type': 'application/json',
                        accept: 'application/json',
                        }
                    })
                    .then(res => {
                        setDatas(res["data"]);
                        setRating(res["data"].rating);
                        setText(res["data"].essay_actual_rsrc_text);
                        setTextFieldInput(res["data"].evaluation_text);
                        setInputVal(res["data"].memo_html);
                        setIsPageLoaded(true);
                        document.getElementById('textarea').setAttribute('readonly', 'readonly');
                    })
                    .catch(error => {});
            }else if(label== "essay") {
                setEditState(false);
                axios
                    .get(baseURL+"writing/edit-essay/"+id, {
                        headers: {
                        Authorization: localStorage.getItem('token')
                            ? 'Token ' + localStorage.getItem('token')
                            : null,
                        'Content-Type': 'application/json',
                        accept: 'application/json',
                        }
                    })
                    .then(res => {
                        setDatas(res["data"]);
                        console.log(typeof(res["data"].highlight_html));
                        setRating(res["data"].rating);
                        setText(res["data"].essay_actual_rsrc_text);
                        setTextFieldInput(res["data"].evaluation_text);
                        setInputVal(res["data"].memo_html);
                        setIsPageLoaded(true);
                        document.getElementById('textarea').setAttribute('readonly', 'readonly');
                    })
                    .catch(error => {});
            }
        }
    }, [isLoaded]);
    
    if(!isPageLoaded) {
        return <Loading/>;
    }

    return (
        <div>
            <PapperBlock title="첨삭자료실" whiteBg icon="ion-ios-grid-outline" desc="
            첨삭자료실 공유된 자료 보기 화면입니다. ">
                <Fragment>
                <Grid
                    container
                    alignItems="stretch"
                    justify="space-around"
                    direction="row"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0px", height: "100%"}}>
                            <Typography component="p" style={{fontFamily:'CookieRun-Regular' , fontSize: "20px"}}>
                                {datas.topic} - 첨삭자: &nbsp;{datas.editor_name}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        {  datas.highlight_html != undefined && datas.highlight_html? 
                                (<div id= "ActualTextArea" style= {{display: 'flex', flexDirection: 'row', marginTop: "30px" , height: "100%"}} >{parse(datas.highlight_html)}</div>)
                            : <></>
                        }
                    </Grid>
                    <Grid item xs={4}>                            
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "30px" , height: "100%"}}>
                            <textarea 
                                id= "textarea"
                                className= {classes.textArea}
                                value={inputvalue}
                             ></textarea>
                        </div>
                    </Grid>
                    <Grid item xs={12}>        
                            <div className={classes.container}>
                                    <TextField
                                            InputProps={{                    
                                                style : {width :"610%", height:"80px", fontFamily:'CookieRun-Regular', borderColor: "#EC407A", 
                                                    marginTop: '70px', marginLeft: "15px", lineHeight: '25px', padding: '5px'}
                                            }}
                                            fullWidth={false}
                                            defaultValue= {textFieldInput}
                                            minRows={2}
                                            multiline={true}
                                        />
                                </div>
                    </Grid>
                    <Grid item xs= {12}>
                            <FormControl className={classes.formControl}>
                                <div className={classes.medium}>
                                    {rating != null && rating != undefined && <Rating
                                        value={rating}
                                        max={5}
                                    />}
                                </div>
                            </FormControl>
                    </Grid>
                </Grid>
            </Fragment>
            </PapperBlock>
        </div>
    );
} 

export default EditorPageView;