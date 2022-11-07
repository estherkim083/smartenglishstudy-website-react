
import React, {useEffect, useState, Fragment, useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UnderLine from '../../../images/underline.png';
import parse from 'html-react-parser';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import keycode from 'keycode';

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
    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    dialogtitle: {
        fontFamily: "CookieRun-Regular",
        color: theme.palette.secondary.dark,
    },
}));


function ReadingView(props) {
    
    let { id } = useParams();
    const actualTextAreaRef = useRef();
    const classes = useStyles();
    const [isLoaded, setIsLoaded] = useState(false);
    const [ title, setTitle] =useState(null);
    const [ text, setText ]= useState(null);
    const [ inputvalue, setInputVal ]= useState('');
    const [ editState, setEditState ]= useState(false);
    // const [ textToHighLight, setTextToHighLight ] = useState([]);
    var [ htmlText, sethtmlText] =useState('');
    
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState([]);
    const [ friendsName, setFriendsName ]= useState([]);
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;

    const inputValChange = (e)=> {
        setInputVal(e.target.value);
    };
    const btnSubmit= () => {
        document.getElementById('textarea').removeAttribute('readonly');
        setEditState(true);
        
    };
    
    const [dataState, setDataState] = useState({
        open: false,
        friends: [],
    });

        
    const handleClose = () => {
        setDataState({
            ...dataState,
            open: false
        });
    };

    const handleShareButton= () => {

        setDataState({
            ...dataState,
            open: true
        });
    }
    const handleSaveButton= ()=> {
        var x= document.getElementById("ActualTextArea").innerHTML;
        axios
            .post(baseURL+"reading/reading-edit-specific/"+id , {
                highlight_html: x,
                memo_html: inputvalue,
                tags: selectedItem,
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
        
    };
    const handleResetButton= () => {
        var html_content = `<p class='MuiTypography-root MuiTypography-body1' style='font-family: CookieRun-Regular;'>${text}</p>`;
        sethtmlText(html_content);
        setInputVal('');
        setSelectedItem([]);
        axios
            .post(baseURL+"reading/reading-edit-specific/"+id , {
                highlight_html: html_content,
                memo_html: '',
                tags: [],
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
                window.location.href= '/reading/view/'+id;
            });
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
        // let tmp_text = getSelectionText();
        // textToHighLight.push(tmp_text);
        // setTextToHighLight(textToHighLight);   
    };
    const handleSubmitShareButton= () => {
        console.log(dataState.friends)
        axios
            .post(baseURL+"reading/reading-share/"+id , {
                friends_data: dataState.friends
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
                window.location.href= '/reading/view/'+id;
            });

    };

    useEffect(() => {
        setIsLoaded(true);
    });

    useEffect(() => {
        if(isLoaded) {
            document.getElementById('textarea').setAttribute('readonly', 'readonly');
            
            axios
                .get(baseURL+"reading/reading-get-friends-data/"+id, {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    },
                })
                .then(res=> {
                    setFriendsName(res["data"]["friends_list"]);
                    setDataState({
                        ...dataState,
                        friends: res["data"]["friends"]
                    });

                })
            // 화면에서 필요한 여러 리딩 데이터들 불러오기.
            axios
                .get(baseURL+"reading/reading-edit-specific/"+id, {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    },
                })
                .then(res=> {
                    setTitle(res["data"]["title"]);
                    setText(res["data"]["text"]);
                    sethtmlText(res["data"]["highlight_html"]);
                    setSelectedItem(res["data"]["tags"]);
                    setInputVal(res["data"]["memo_html"]);
                })
        }
    }, [isLoaded]);   
    const handleKeyDown = event => {        
        if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
            setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
        }
      };
    
    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleDelete = item => () => {
        const selectedItemConst = [...selectedItem];
        selectedItemConst.splice(selectedItemConst.indexOf(item), 1);
    
        setSelectedItem(selectedItemConst);
    };
    const handleChange = (event, inputval) => {
        
        if(event.key === 'Enter'){ 
            let i= inputval;
            console.log(i);
            setInputValue('');
            let newSelectedItem = selectedItem;
        
            if (newSelectedItem.indexOf(inputval) === -1) {
                newSelectedItem = [...newSelectedItem, inputval];
            }
            
            setSelectedItem(newSelectedItem);
        }
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
        <PapperBlock title="Reading Menu" whiteBg icon="ion-ios-grid-outline" desc="
        리딩 메뉴 탭입니다. 영어 리딩 자료 업로드 및 자료 정리, 독해공부를 해봅시다.">      
            <Fragment>
                <Grid
                    container
                    alignItems="stretch"
                    justify="space-around"
                    direction="row"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "30px", height: "100%"}}>
                            <Typography component="p" style={{fontFamily:'CookieRun-Regular' , fontSize: "20px"}}>
                                {title} 
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        {  htmlText != '' ? (
                             editState ? <div id= "ActualTextArea" 
                                                onMouseUp={() => getSelection()}
                                                ref={actualTextAreaRef} 
                                                style= {{display: 'flex', flexDirection: 'row', marginTop: "30px" , height: "100%"}}>{parse(htmlText)}
                                            </div>
                                        : <div id= "ActualTextArea" style= {{display: 'flex', flexDirection: 'row', marginTop: "30px" , height: "100%"}} >{parse(htmlText)}</div> )
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
                                        startAdornment: selectedItem.map(item => (
                                            <Chip
                                            key={item}
                                            tabIndex={-1}
                                            label={item}
                                            className={classes.chip}
                                            onDelete={handleDelete(item)}
                                            />
                                        )),                                        
                                        onChange: handleInputChange,
                                        onKeyDown: handleKeyDown,
                                    }}
                                    fullWidth={true}
                                    className= {classes.input}
                                    value= {inputValue}
                                    onKeyPress={(e) => handleChange(e, inputValue)}
                                    placeholder ="리딩 단어들을 태그로 등록하세요."
                                />
                        </div>
                    </Grid>
                    <Grid item xs={12}>                            
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "30px" , height: "70%"}}>
                            
                            {    editState ?         
                                <><Button id="saveButton" className={classes.button} onClick={handleSaveButton}>저장</Button>           
                                <Button id="resetButton" className={classes.button} onClick= {handleResetButton}>초기화하기</Button></>
                                : 
                                <><Button id="submitButton" className={classes.button} onClick={btnSubmit}>연습하기</Button>
                                <Button id="shareButton" className={classes.button} onClick={handleShareButton}>공유하기</Button>
                                
                                <Dialog
                                    disableBackdropClick
                                    disableEscapeKeyDown
                                    open={dataState.open}
                                    onClose={handleClose}
                                    >
                                    <DialogTitle disableTypography={true} className={classes.dialogtitle}>공유할 친구들을 선택하세요. 자료가 실시간 양방향으로 공유됩니다. </DialogTitle>
                                    <DialogContent>
                                        <FormControl component="fieldset">
                                        <FormGroup>
                                              {  friendsName.map((friend, index)=> {
                                                    return dataState.friends[index] != undefined &&
                                                    <FormControlLabel
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
                                        <FormHelperText>공유할 친구들을 선택하세요.</FormHelperText>
                                        </FormControl>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                        Cancel
                                        </Button>
                                        <Button onClick={handleSubmitShareButton} color="primary">
                                        Ok
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                </>
                            }
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        </PapperBlock>
    );
}

export default ReadingView;