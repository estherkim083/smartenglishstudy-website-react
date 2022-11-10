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
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    let { id, label } = useParams();
    const [ datas, setDatas ]= useState({});
    const actualTextAreaRef = useRef();
    const [ inputvalue, setInputVal ]= useState('');
    const [ editState, setEditState ]= useState(false);
    const [rating, setRating] = useState(null);
    const [ text, setText ]= useState(null);
    var [ htmlText, sethtmlText] =useState('');
  
    const handleChange = value => {
      setRating(value);
    };

    const inputValChange = (e)=> {
        setInputVal(e.target.value);
    };

    useEffect(() => {
        var author= localStorage.getItem("user_name");
        if(author === null) {
            window.location.href="/smartenglishstudy-website-react/auth/email";
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
            document.getElementById('textarea').setAttribute('readonly', 'readonly');
            if(label== "book") {
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
                    })
                    .catch(error => {});

            }else if(label=="essay") {
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
                    })
                    .catch(error => {});

            }
        }
    }, [isLoaded]);
    
    const handleSaveButton= ()=> {
         var x= document.getElementById("ActualTextArea").innerHTML;
         if(label== "book") { 
            axios
                .post(baseURL+"writing/edit-book-writing/"+id , {
                    highlight_html: x,
                    memo_html: inputvalue,
                    rating: rating,
                    evaluation_text: textFieldInput
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
                    setEditState(false);
                    document.getElementById('textarea').setAttribute('readonly', 'readonly');
                });
         }else if(label =="essay") {
            axios
               .post(baseURL+"writing/edit-essay/"+id , {
                   highlight_html: x,
                   memo_html: inputvalue,
                   rating: rating,
                   evaluation_text: textFieldInput
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
                   setEditState(false);
                   document.getElementById('textarea').setAttribute('readonly', 'readonly');
               });

         }
        
    };
    const handleResetButton= () => {
        var html_content = `<p class='MuiTypography-root MuiTypography-body1' style='font-family: CookieRun-Regular;'>${text}</p>`;
        setInputVal('');
        setTextFieldInput('');
        setRating(0);
        sethtmlText(html_content);
        if(label== "book") {
            axios
                .post(baseURL+"writing/edit-book-writing/"+id , {
                    highlight_html: html_content,
                    memo_html: '',
                    rating: 0,
                    evaluation_text: ''
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
                    window.location.href= '/smartenglishstudy-website-react/writing/editorpage/book/'+id;
                });
        }else if(label== "essay") {
            axios
                .post(baseURL+"writing/edit-essay/"+id , {
                    highlight_html: html_content,
                    memo_html: '',
                    rating: 0,
                    evaluation_text: ''
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
                    window.location.href= '/smartenglishstudy-website-react/writing/editorpage/essay/'+id;
                });
        }
    };
    const btnSubmit= () => {
        document.getElementById('textarea').removeAttribute('readonly');
        setEditState(true);
        
    };
    const [ textFieldInput, setTextFieldInput ]= useState('');

    const handleTextFieldChange= event => {
        
        setTextFieldInput(event.target.value);
    };
    const getSelectionText= ()=> {
        let textTmp= ''
        if (window.getSelection) {
            try {
                textTmp=window.getSelection().toString();                
                var span = document.createElement("span");
                span.style.backgroundColor = "#e06f6f";

                var sel = window.getSelection();
                if (sel.rangeCount) {
                    var range = sel.getRangeAt(0).cloneRange();
                    range.surroundContents(span);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
                //let oRange = window.getSelection().getRangeAt(0);
                //console.log(text.substring(oRange.startOffset, oRange.endOffset));
                return textTmp;
            } catch (e) {
                console.log('Cant get selection textTmp')
            }
        } 
        
    }
    
    const getSelection= ()=> {        
        getSelectionText();
    };

    return (
        <div>
            <PapperBlock title="첨삭자료실" whiteBg icon="ion-ios-grid-outline" desc="
            첨삭자료실 첨삭해야 할 자료 보기 화면입니다.">
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
                        {  datas.highlight_html != undefined && datas.highlight_html? (
                             editState ? <div id= "ActualTextArea" 
                                                onMouseUp={() => getSelection()}
                                                ref={actualTextAreaRef} 
                                                style= {{display: 'flex', flexDirection: 'row', marginTop: "30px" , height: "100%"}}>{parse(datas.highlight_html)}
                                            </div>
                                        : <div id= "ActualTextArea" style= {{display: 'flex', flexDirection: 'row', marginTop: "30px" , height: "100%"}} >{parse(datas.highlight_html)}</div> )
                            : <></>
                        }
                    </Grid>
                    <Grid item xs={4}>                            
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "30px" , height: "100%"}}>
                            <textarea 
                                id= "textarea"
                                className= {classes.textArea}
                                value={inputvalue}
                                onChange={inputValChange}
                             ></textarea>
                        </div>
                    </Grid>
                    <Grid item xs={12}>        
                            <div className={classes.container}>
                                    <TextField
                                            InputProps={{                    
                                                style : {width :"610%", height:"80px", fontFamily:'CookieRun-Regular', borderColor: "#EC407A", 
                                                    marginTop: '70px', marginLeft: "15px", lineHeight: '25px', padding: '5px'},
                                                onChange: handleTextFieldChange
                                            }}
                                            fullWidth={false}
                                            defaultValue= {textFieldInput}
                                            placeholder ="평가글을 입력하세요."
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
                                        onChange={(value) => handleChange(value)}
                                    />}
                                </div>
                            </FormControl>
                    </Grid>
                    <Grid item xs={12}>                            
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "30px" , height: "70%"}}>
                            
                            {    editState ?         
                                <><Button id="saveButton" className={classes.button} onClick={handleSaveButton}>저장</Button>           
                                <Button id="resetButton" className={classes.button} onClick= {handleResetButton}>초기화하기</Button></>
                                : 
                                <><Button id="submitButton" className={classes.button} onClick={btnSubmit}>수정하기</Button></>
                            }
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
            </PapperBlock>
        </div>
    );
} 

export default EditorPageView;