
import React, {useEffect, useState, useRef} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { makeStyles } from '@material-ui/core/styles';
import DotImg from '../../../images/dots.png';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useWindowDimensions from '../../../useWindowDimensions';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dotmenu: {
        backgroundImage : `url(${DotImg})`,
        backgroundSize: '30px',
        height: '18px',
        backgroundRepeat: 'no-repeat',
        marginTop: '-10px',
    },
    papersheet: {    
        padding: 40,
        width: "80%",
        height: "100%",
        marginTop: "30px"
    },
    textTitle: {
        fontFamily:'CookieRun-Regular',
        marginTop :"20px",
        outline: `0 solid transparent`,
        color: 'black'
    },
    text: {        
        fontFamily:'CookieRun-Regular',
        marginTop :"10px",
        outline: `0 solid transparent`,
        color: 'black'
    },
    dialogtitle: {
      fontFamily: "CookieRun-Regular",
      color: theme.palette.secondary.dark,
    },
    dialogPaper: {
        width: '800px'
    },
    addtitle: {
        fontFamily:'CookieRun-Regular',
        position: 'relative',
        marginLeft: "15px",
        marginBottom : theme.spacing(3),
        color: theme.palette.primary.dark,
        textDecoration: 'underline',
        textDecorationColor: theme.palette.secondary.dark,
        textUnderlineOffset: '10px'
    },
    descBlock: {        
        display: 'flex',
        alignItems: 'center',
    }
}));

function VocabView(props) {

    const classes = useStyles();
    const { height, width } = useWindowDimensions();

    
    const [openMenu, setOpenMenu] = useState([]);
    const anchorRef = React.useRef(null);
    const itemsRef = useRef([]);

    const [isLoaded, setIsLoaded] = useState(false);
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    const [ ids, setIds ]= useState([]);
    const [ keywords, setKeywords ]= useState([]);
    const [ mean_kor, setMeanKor ]= useState([]);
    const [ mean_en, setMeanEn ]= useState([]);
    const [ synonym, setSynonym ]= useState([]);
    const [ antonym, setAntonym ]= useState([]);
    const [ ExampleSen, setExampleSen ]= useState([]);
    const [ pronunciation, setPronunciation ]= useState('');
    const [ color, setColor ]= useState([]);
    const [ colorKor, setColorKor ]= useState([]);

    const handleToggle = (event, id) => {
        
        setOpenMenu([id]);
    };
    const setSpecValue= (e, index, type) => {
        console.log(e.currentTarget.textContent);
        var val= e.currentTarget.textContent;
        if(type== "meanKor") {
            mean_kor[index]= val;
            setMeanKor(mean_kor);
        }else if(type== "meanEn") {
            mean_en[index]= val;
            setMeanEn(mean_en);
        }else if(type== "syn") {
            synonym[index]= val;
            setSynonym(synonym);
        }else if(type== "ant") {
            antonym[index]= val;
            setAntonym(antonym);
        }else if(type== "exampleSen") {
            ExampleSen[index]= val;
            setExampleSen(ExampleSen);
        }else if(type== "pronunciation") {
            pronunciation[index]= val;
            setPronunciation(pronunciation);
        }
    };

    const handleClose = (event, id, index) => {
        console.log(event.target.innerText);
        var color= event.target.innerText;
        var _colorKor= colorKor;
        if(color.includes("노랑색")) {            
            document.getElementById(id.toString()).setAttribute("style", "background-color: #fff6dd;");
            _colorKor[index] = "노랑색";

        }else if(color.includes("빨간색")) {
            document.getElementById(id.toString()).setAttribute("style", "background-color: #ffdddd;");
            _colorKor[index] = "빨간색";

        }else if(color.includes("초록색")) {
            document.getElementById(id.toString()).setAttribute("style", "background-color: #ddffdd;");
            _colorKor[index] = "초록색";
            
        }else if(color.includes("파랑색")) {
            document.getElementById(id.toString()).setAttribute("style", "background-color: #ddffff;");
            _colorKor[index] = "파랑색";
            
        }else if(color.includes("보라색")) {
            document.getElementById(id.toString()).setAttribute("style", "background-color: #ddddff;");
            _colorKor[index] = "보라색";

        }
        setColorKor(_colorKor);

        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpenMenu([]);
    };
    const handleListKeyDown = (event, value) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpenMenu([]);
      }
    }
    const menuClicked= (event, value) => {
        console.log(value);
    };

    const handleDelete= (id) => {
        console.log('delete');
        axios
            .post(baseURL+"vocab/vocab-delete/"+id, {},
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
                window.location.href= '/vocab';
            });
    };
    const handleSave= (index, id) => {
        console.log('save');
        console.log(mean_kor[index]);
        axios
            .post(baseURL+"vocab/vocab-edit/"+id, {
                keyword: keywords[index],
                meaning_kor: mean_kor[index],
                meaning_en: mean_en[index],
                synonym: synonym[index],
                antonym: antonym[index],
                example_sen: ExampleSen[index],
                pronunciation: pronunciation[index],
                color: colorKor[index],
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
                window.location.href= '/vocab';
            });
         
    };

    useEffect(() => {
        setIsLoaded(true);
        
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
    });

    useEffect(() => {        
        if(isLoaded) {
            axios
                .get(baseURL+"vocab/", {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    },
                })
                .then(res => {
                    const data= res["data"];
                    var tmp = new Array(10);
                    
                    var num = Object.keys(res['data']).length;
                    for (var i = 0; i < tmp.length; i++) {                        
                        tmp[i] = new Array(num);
                    }
                    for (var key in data) {
                        tmp[0].push(data[key]["keyword"]);
                        tmp[1].push(data[key]["meaning_kor"]);
                        tmp[2].push(data[key]["meaning_en"]);
                        tmp[3].push(data[key]["synonym"]);
                        tmp[4].push(data[key]["antonym"]);
                        tmp[5].push(data[key]["example_sen"]);
                        tmp[6].push(data[key]["pronunciation"]);
                        tmp[7].push(key);
                        var _color= data[key]["color"];
                        var _color_var= ''
                        if(_color ==="노랑색") {
                            _color_var= '#fff6dd';
                        }else if(_color ==="빨간색") {
                            _color_var= '#ffdddd'; 
                        }else if(_color ==="초록색") {
                            _color_var= "#ddffdd";
                        }else if(_color ==="파랑색") {
                            _color_var= "#ddffff";
                        }else if(_color ==="보라색") {
                            _color_var= "#ddddff";
                        }
                        tmp[8].push(_color_var);
                        tmp[9].push(data[key]["color"]);
                    }
                    setKeywords(tmp[0]);
                    setMeanKor(tmp[1]);
                    setMeanEn(tmp[2]);
                    setSynonym(tmp[3]);
                    setAntonym(tmp[4]);
                    setExampleSen(tmp[5]);
                    setPronunciation(tmp[6]);
                    setIds(tmp[7]);
                    setColor(tmp[8]);
                    setColorKor(tmp[9]);
                    itemsRef.current = itemsRef.current.slice(0, tmp[0].length);
                })
                .catch(error => {});
            
            setOpenMenu([]);
        }
    }, [isLoaded]);  

    const [DialogDataState, setDialogDataState] = useState({
        open: false,
        groupName: '',
    });
    const handleDialogAddVocab= () => {
        setDialogDataState({
            ...DialogDataState,
            open: true
        });
    };
    const handleCloseDialog= () => {
        setDialogDataState({
            ...DialogDataState,
            open: false
        });

    };
    const [ vocabKeyWord, setVocabKeyword ]= useState('');
    const [ korMeaning, setKorMeaning ]= useState('');
    const [ enMeaning, setEnMeaning ]= useState('');
    const [ synonymWord, setSynonymWord ]= useState('');
    const [ antonymWord, setAntonymWord ]= useState('');
    const [ exSentence, setExSentence ]= useState('');
    const [ pronounication, setPronounication ]= useState('');
    const handleAddVocab= () => {
        axios
            .post(baseURL+"vocab/", {
                keyword: vocabKeyWord,
                meaning_kor: korMeaning,
                meaning_en: enMeaning,
                synonym: synonymWord,
                antonym: antonymWord,
                example_sen: exSentence,
                pronunciation: pronounication,
                color: "노랑색",
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
                window.location.href= '/vocab';
            });

    };
    
    const handleKeyWordInputChange= event => {
        setVocabKeyword(event.target.value);
    };
    const handleKorMeaningInputChange= event => {
        setKorMeaning(event.target.value);
    };
    const handleEnMeaningInputChange= event => {
        setEnMeaning(event.target.value);
    };
    const handleSynonymInputChange= event => {
        setSynonymWord(event.target.value);
    };
    const handleAntonymInputChange= event => {
        setAntonymWord(event.target.value);
    };
    const handleExSentenceInputChange= event => {
        setExSentence(event.target.value);
    };
    const handlePronounicationInputChange= event => {
        setPronounication(event.target.value);
    };
    return (
        // 카드 뷰로 변경하기.
        <div className={classes.root}>
            <PapperBlock title="어휘 단어장" icon="ion-ios-filing-outline" desc="중요한 어휘, 구문들을 정리하세요.">
           <div className={classes.descBlock}>
                <Fab color="secondary" aria-label="add" style={{width: "34px", height: "30px",position: 'relative', zIndex: "1000", marginTop: `-30px`, marginLeft: `0px`}} onClick={handleDialogAddVocab}>
                    <AddIcon />
                </Fab>                
                <Typography variant="h6" component="h2" className={classes.addtitle}>
                단어 추가하기
                </Typography>
                
                <Dialog
                        disableBackdropClick
                        disableEscapeKeyDown
                        open={DialogDataState.open}
                        onClose={handleCloseDialog}
                        classes={{ paper: classes.dialogPaper }}
                        >
                        <DialogTitle disableTypography="true" className={classes.dialogtitle}>추가할 단어정보를 입력하세요.</DialogTitle>
                        <DialogContent>
                            <div style= {{display: 'flex', flexDirection: 'column'}}>
                            <TextField
                                InputProps={{                    
                                    style : {width :"90%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                        marginTop: '0px', marginLeft: "15px"},
                                    onChange: handleKeyWordInputChange
                                }}
                                fullWidth={false}
                                defaultValue= {vocabKeyWord} 
                                placeholder="영어단어를 입력하세요."        
                             />
                             <TextField
                                 InputProps={{                    
                                     style : {width :"90%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                         marginTop: '10px', marginLeft: "15px"},
                                     onChange: handleKorMeaningInputChange
                                 }}
                                 fullWidth={false}
                                 defaultValue= {korMeaning} 
                                 placeholder="한글의미를 반점 구분으로 입력하세요."        
                              />
                              <TextField
                                  InputProps={{                    
                                      style : {width :"90%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                          marginTop: '10px', marginLeft: "15px"},
                                      onChange: handleEnMeaningInputChange
                                  }}
                                  fullWidth={false}
                                  defaultValue= {enMeaning} 
                                  placeholder="영어로 된 해석문장을 입력하세요."        
                               />
                               <TextField
                                   InputProps={{                    
                                       style : {width :"90%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                           marginTop: '10px', marginLeft: "15px"},
                                       onChange: handleSynonymInputChange
                                   }}
                                   fullWidth={false}
                                   defaultValue= {synonymWord} 
                                   placeholder="동의어를 입력하세요."        
                                />
                                <TextField
                                    InputProps={{                    
                                        style : {width :"90%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                            marginTop: '10px', marginLeft: "15px"},
                                        onChange: handleAntonymInputChange
                                    }}
                                    fullWidth={false}
                                    defaultValue= {antonymWord} 
                                    placeholder="반의어를 입력하세요."        
                                 />
                                 <TextField
                                     InputProps={{                    
                                         style : {width :"90%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                             marginTop: '10px', marginLeft: "15px"},
                                         onChange: handleExSentenceInputChange
                                     }}
                                     fullWidth={false}
                                     defaultValue= {exSentence} 
                                     placeholder="예문을 입력하세요."        
                                  />
                                  <TextField
                                      InputProps={{                    
                                          style : {width :"90%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                              marginTop: '10px', marginLeft: "15px"},
                                          onChange: handlePronounicationInputChange
                                      }}
                                      fullWidth={false}
                                      defaultValue= {pronounication} 
                                      placeholder="발음법을 입력하세요."        
                                   />
                                </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog} color="primary">
                            Cancel
                            </Button>
                            <Button color="primary" onClick={handleAddVocab}>
                            Ok
                            </Button>
                        </DialogActions>
                </Dialog>
            </div> 
            <div>
                { ids.map((id, index) => (
                    <Paper id={id.toString()} className={classes.papersheet} style={{
                        backgroundColor: color[index]}} elevation={4}>
                        <div className= {classes.dotmenu} onClick={(e)=> handleToggle(e, id)} key={index.toString()} ref={el => itemsRef.current[index] = el} 
                                    aria-controls={openMenu.indexOf(id) > -1 ? 'menu-list-grow' : undefined} aria-haspopup="true"></div>
                        <Popper style={{zIndex: "100", marginLeft: `calc(40% - ${width}px)`}} open={openMenu.indexOf(id) > -1} anchorEl={itemsRef.current[index]} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{position :'fixed', transformOrigin: 'bottom-start'}}
                            // style={{ transformOrigin: 'bottom-start' }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={(e)=> handleClose(e, id, index)}>
                                <MenuList autoFocusItem={openMenu.indexOf(id) > -1} id="menu-list-grow" onChange={(e)=> menuClicked(e, id)} onKeyDown={(e)=> handleListKeyDown(e,id)}>
                                    <MenuItem onClick={(e)=> handleClose(e, id, index)}>🔴&nbsp;빨간색</MenuItem>
                                    <MenuItem onClick={(e)=> handleClose(e, id, index)}>🟡&nbsp;노랑색</MenuItem>
                                    <MenuItem onClick={(e)=> handleClose(e, id, index)}>🟢&nbsp;초록색</MenuItem>
                                    <MenuItem onClick={(e)=> handleClose(e, id, index)}>🔵&nbsp;파랑색</MenuItem>
                                    <MenuItem onClick={(e)=> handleClose(e, id, index)}>🟣&nbsp;보라색</MenuItem>
                                    <MenuItem onClick={() =>handleSave(index, id)}><SaveIcon/>&nbsp;&nbsp;&nbsp;저장</MenuItem>
                                    <MenuItem onClick={() =>handleDelete(id)}><BackspaceIcon/>&nbsp;&nbsp;&nbsp;삭제</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                        { keywords[index]? 
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                                onInput={(e) => setSpecValue(e, index, "meanKor")} variant="h5" component="h3" className={classes.textTitle}>
                                {keywords[index]}
                            </Typography> :
                            
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "meanKor")} variant="h5" component="h3" className={classes.textTitle}>
                             영어단어(keyword)
                            </Typography>
                        
                        }
                        { mean_kor[index]? 
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "meanKor")} component="p" className={classes.text}>
                                {mean_kor[index]}
                            </Typography> :
                            
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "meanKor")} component="p" className={classes.text}>
                             한글의미를 적으세요.
                            </Typography>
                        
                        }
                        
                        { mean_en[index]? 
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "meanEn")} component="p" className={classes.text}>
                                {mean_en[index]}
                            </Typography> :
                            
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "meanEn")} component="p" className={classes.text}>
                            영어의미를 적으세요.
                            </Typography>
                        
                        }

                        { synonym[index]? 
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "syn")} component="p" className={classes.text}>
                                {synonym[index]}
                            </Typography> :
                            
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "syn")} component="p" className={classes.text}>
                            동의어를 적으세요.
                            </Typography>
                        
                        }
                        
                        { antonym[index]? 
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "ant")} component="p" className={classes.text}>
                                {antonym[index]}
                            </Typography> :
                            
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index ,"ant")} component="p" className={classes.text}>
                            반의어를 적으세요.
                            </Typography>
                        
                        }
                        { ExampleSen[index]? 
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "exampleSen")} component="p" className={classes.text}>
                                {ExampleSen[index]}
                            </Typography> :
                            
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "exampleSen")} component="p" className={classes.text}>
                            예문
                            </Typography>
                        
                        }
                        { pronunciation[index]? 
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "pronunciation")} component="p" className={classes.text}>
                                {pronunciation[index]}
                            </Typography> :
                            
                            <Typography suppressContentEditableWarning={true} contentEditable={true} 
                            onInput={(e) => setSpecValue(e, index, "pronunciation")} component="p" className={classes.text}>
                            발음법
                            </Typography>
                        
                        }
                        
                    </Paper>
                ))}
            </div>
                
            </PapperBlock>
            
        </div>
        
    );
}

export default VocabView;