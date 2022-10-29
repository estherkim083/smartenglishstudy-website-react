import React, {useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import profileimg from "../../../images/avatars/user.png";
import coverimg from "../../../images/profiles/nature.jpg";
import Cover from '../../../components/Profile/Cover';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import EmailIcon from '@material-ui/icons/Email';

import Card from '@material-ui/core/Card';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import keycode from 'keycode';
import axios from 'axios';
import { storage } from '../../../firebase';
import { ref, getDownloadURL } from "firebase/storage";
import DeleteIcon from '@material-ui/icons/Delete';

function TabPanel(props) {
    const {
      children, value, index, ...other
    } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3} sx={{width: '100%', height: '100%'}}>
              {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "130px",
        padding: "30px",
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
        flexGrow: 1,
    },    
    gridList: {
        width: 500,
        height: 450,
    },
    img: {
        maxWidth: 'none'
    },
    appbar: {
        width: "900px",
        backgroundColor: theme.palette.secondary.main, 
        color: theme.palette.common.white
    },
    tab: {
        fontFamily: 'CookieRun-Regular',
        fontWeight: 'bold',
    },
    card: {
        marginLeft: '-20px',
        width: '80%'
    },
    title: {
      fontSize: 20,
      height: 30,
      fontWeight: 'bold',
      fontFamily: 'CookieRun-Regular',
    },
    divider: {
      margin: `${theme.spacing(3)}px 0`
    },
    avatar: {
      boxShadow: theme.shadows[7]
    },
    cardAboutMeText: {      
        fontFamily: 'CookieRun-Regular',
        fontSize: '20px',
        color: theme.palette.common.black
    },
    cardAboutMeTextSmall: {
        fontFamily: 'CookieRun-Regular',
        fontSize: '14px',
        color: theme.palette.common.black
    },
    cardNumberStat: {        
        fontFamily: 'CookieRun-Regular',
        fontSize: '23px',
        marginLeft: '80px'
    },
    cardNumber: {     
        fontFamily: 'CookieRun-Regular',
        fontSize: '20px',
        marginLeft: '80px',
        textAlign: 'center'
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
    img: {
        marginTop: '-20px',
    }
}));
// validation functions
const emailValidator = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

function MyProfile(props) {
    
    const classes = useStyles();
    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ desc, setDesc ] = useState('');
    const [selectedItem, setSelectedItem] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    const [value, setValue] = React.useState(0);
    const [ emailInput, setEmailInput ]= useState('');
    const [ passwordInput, setPasswordInput ]= useState('');
    const [ inboxTextFieldInput, setInboxTextFieldInput ]= useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [followersNum ,setFollowersNum] =useState(-1);
    const [likedNum ,setLikedNum] =useState(-1);
    const [profileBgImgs, setProfileBgImgs]=useState(null);
    const [ profileImgs, setProfileImgs]=useState(null);
    const [ bgImgs, setBgImgs]=useState(null);
    const [ currentProfileImg, setCurrentProfileImg] =useState('');
    const [ currentBgImg, setCurrentBgImg] =useState('');
    const [ registerDate, setRegisterDate] =useState('');
    const [ friendsNum, setFriendsNum] =useState(-1);
    const [ key, setKey ]=useState('');

    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;

    const handleInboxTextFieldChange= event => {
        
        setInboxTextFieldInput(event.target.value);
    };
    const handleDeleteAccount= ()=> {
        axios
            .post(baseURL+"mypage/my-account/delete/" , {},
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
        localStorage.removeItem("user_name");
        localStorage.removeItem("email");
        localStorage.removeItem("token");

        window.location.href= "/auth/email";

    };
    const handlePostTextMyInbox= () =>{
        axios
            .post(baseURL+"mypage/inbox-data/" , {
                inbox_text: inboxTextFieldInput
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
        
            setInboxTextFieldInput('');
            window.location.href= "/my-inbox";
    };

    const handleResetPasswordKeyDown =(event, inputval) => {
        if(event.key === 'Enter'){ 

            if(inputval) {
                console.log(inputval);
            }
            axios
                .post(baseURL+"mypage/my-account/password-change/" , {
                    change_password: inputval
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
    };
    const handleResetPasswordChange = event => {

        setPasswordInput(event.target.value);
    };

    const handleEmailChange = event => {

        setEmailInput(event.target.value);
    };
    const handleEmailKeyDown = (event, inputval) => {
        
        if(event.key === 'Enter'){

            if(inputval) {
                var x= emailValidator(inputval);
                if(x==undefined) {
                    console.log('post this email');
                    axios
                        .post(baseURL+"mypage/my-account/email-change/" , {
                            change_email: inputval
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
                            localStorage.setItem("email", inputval);
                        });
                }else {
                    console.log('do not post this email');
                }
            }
        }
    };
    
    const handleDelete = item => () => {
        const selectedItemConst = [...selectedItem];
        selectedItemConst.splice(selectedItemConst.indexOf(item), 1);
    
        setSelectedItem(selectedItemConst);
        axios
            .post(baseURL+"mypage/delete-about-hashtags/" , {
                hashtags: item
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
    };

    const handleChangeTags = (event, inputval) => {
        
        if(event.key === 'Enter'){ 
            let i= inputval;
            console.log(i);

            setInputValue('');
            let newSelectedItem = selectedItem;
        
            if (newSelectedItem.indexOf(inputval) === -1) {
                newSelectedItem = [...newSelectedItem, inputval];
            }
            
            setSelectedItem(newSelectedItem);

            // axios로 백앤드에 관심태그들을 post 해야 한다.
            axios
                .post(baseURL+"mypage/about-edit-hashtags/" , {
                    hashtags: i
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
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleKeyDown = event => {        
        if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
            setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
        }
      };
    
    const handleInputChange = event => {
        setInputValue(event.target.value);
    };
    const imgData= [
        {
          img: coverimg,
          title: 'Breakfast',
          author: 'jill111',
          cols: 2,
          featured: true,
        },
        {
          img: coverimg,
          title: 'Tasty burger',
          author: 'director90',
        },
        {
          img: coverimg,
          title: 'Tasty burger',
          author: 'director90',
        },
        {
          img: coverimg,
          title: 'Tasty burger',
          author: 'director90',
        },
        {
          img: coverimg,
          title: 'Tasty burger',
          author: 'director90',
        },
    ];

    useEffect(() => {
        var author= localStorage.getItem("user_name");
        var emails= localStorage.getItem("email");
        if(author === null) {
            window.location.href="/auth/email";
        }
        setUserName(author);
        setEmail(emails);
        setEmailInput(emails);
        var description= `이메일 : ${email}`;
        setDesc(description);
        setIsLoaded(true);

        if(!localStorage.getItem("MyProfileOnce")) {
            localStorage.setItem("MyProfileOnce", true);
            window.location.reload();
        }
        if(localStorage.getItem("ChatMessageOnce")) {
          localStorage.removeItem("ChatMessageOnce");
        } 
    }, [userName]);

    useEffect(() => {
        if(isLoaded) {
            axios
                .get(baseURL+"mypage/get-my-profile-data/", {
                headers: {
                    Authorization: localStorage.getItem('token')
                    ? 'Token ' + localStorage.getItem('token')
                    : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                }
                })
                .then(res => {
                    setFollowersNum(res["data"]['followers_num']);
                    setLikedNum(res["data"]['liked_num']);
                    setRegisterDate(res["data"]['register_date']);
                    setFriendsNum(res["data"]["friends_num"]);
                    setSelectedItem(res["data"]["about_hash_tags"]);

                    const profilecurrentimg= res["data"]['current_profile_img'];

                    getDownloadURL(ref(storage, `profile-img/${profilecurrentimg}`))
                            .then((url) => {
                                setCurrentProfileImg(url);
                            })
                            .catch((error) => {
                            });
                    const bgcurrentimg= res["data"]['current_bg_img'];
                    
                    getDownloadURL(ref(storage, `profile-img/${bgcurrentimg}`))
                            .then((url) => {
                                setCurrentBgImg(url);
                            })
                            .catch((error) => {
                            });
                    
                    const profileimgs= res["data"]['profile_imgs'];
                    const bgimgs= res["data"]['bg_imgs'];

                    setProfileImgs(profileimgs);
                    setBgImgs(bgimgs);

                    console.log(profileimgs);
                    console.log(bgimgs);
                    var profileimgsURL= {};
                    for(var i=0;i<profileimgs.length;i++) {
                        const x= profileimgs[i];
                        getDownloadURL(ref(storage, `profile-img/${profileimgs[i]}`))
                        .then((url) => {
                            profileimgsURL[x]=url;
                        })
                        .catch((error) => {
                        });
                    }
                    var bgimgsURL= {};
                    for(var i=0;i<bgimgs.length;i++) {
                        const x= bgimgs[i];
                        getDownloadURL(ref(storage, `profile-img/${bgimgs[i]}`))
                        .then((url) => {
                            bgimgsURL[x]=url;
                        })
                        .catch((error) => {
                        });
                    }
                    setProfileBgImgs({"profile": profileimgsURL, "bg":bgimgsURL});
                })
                .catch(error => {});
                
        }
    }, [!isLoaded]);
    
    const handleDeleteTiles=(item, type)=> {
        console.log(item);
        console.log(type); 
        axios
            .post(baseURL+"mypage/delete-img-data/" , {
                img: item,
                type:type
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
                window.location.href="/my-profile";
            });
    };

    return (
        <div className={classes.root}>

            <Cover
                coverImg={currentBgImg}
                avatar={currentProfileImg}
                name={userName}
                desc={desc}
            />
            
            <Grid
                container
                alignItems="stretch"
                justify="space-around"
                direction="row"
                spacing={3}
                >
                    
                    <Grid item xs={3}>
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "60px", height: "100%"}}>
                            {console.log(profileBgImgs)}
                            {profileBgImgs!= null &&
                                <GridList cellHeight={160} className={classes.gridList} cols={2}>
                                     {profileImgs.map((item, index) => {
                                            const url =profileBgImgs["profile"][item];
                                            return <GridListTile key={index.toString()} cols={1}  padding={0}>
                                                <span style={{zIndex: 100,position:'relative'}} onClick={()=>handleDeleteTiles(item, "profile")}>
                                                    <DeleteIcon/>
                                                </span>
                                                <img src={url} className={classes.img} />
                                            </GridListTile>;
                                    })}
                                    {bgImgs.map((item, index) => {
                                        const url =profileBgImgs["bg"][item];
                                        return <GridListTile key={index.toString()} cols={1}  padding={0}>
                                            <span style={{zIndex: 100,position:'relative'}} onClick={()=>handleDeleteTiles(item, "bg")}>
                                                <DeleteIcon/>
                                            </span>
                                            <img src={url} className={classes.img} />
                                        </GridListTile>;
                                    })}
                                </GridList>
                            }
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div style= {{display: 'flex', flexDirection: 'row', marginTop: "30px", height: "100%"}}>
                            <div style= {{display: 'flex', flexDirection: 'column', marginTop: "30px", height: "100%"}}>
                                <AppBar position="static" color="default" className={classes.appbar}>
                                    <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="secondary"
                                    textColor="primary"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                    >
                                    <Tab label="About Me" {...a11yProps(0)} className={classes.tab}/>
                                    <Tab label="Account Settings" {...a11yProps(1)} className={classes.tab}/>
                                    <Tab label="MyInbox Post" {...a11yProps(2)} className={classes.tab}/>
                                    </Tabs>
                                </AppBar>
                                <TabPanel value={value} index={0}>                                 
                                    <Card className={classes.card}>
                                    <CardContent>
                                        <Typography variant="subtitle1" className={classes.title}>ABOUT ME</Typography>
                                        <Divider className={classes.divider} />
                                        <ListItem>
                                        <ListItemAvatar>
                                            <Avatar
                                            alt={userName}
                                            src={profileimg}
                                            className={classes.avatar}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText primary="Name" secondary={userName} classes={{primary: classes.cardAboutMeText, secondary:classes.cardAboutMeTextSmall}} />
                                        </ListItem>
                                        <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}>
                                            <EmailIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Email" secondary={email} classes={{primary: classes.cardAboutMeText, secondary:classes.cardAboutMeTextSmall}}/>
                                        </ListItem>
                                        <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.avatar}>
                                            <CalendarTodayIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="가입일" secondary={registerDate} classes={{primary: classes.cardAboutMeText, secondary:classes.cardAboutMeTextSmall}}/>
                                        </ListItem>
                                                         
                                        <div style= {{display: 'flex', flexDirection: 'row', height: "100%", padding: '30px'}}>        
                                            <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0px"}}>     
                                                <Typography component="p" className={classes.cardNumberStat}>
                                                    <span style={{color:'#EC407A'}}>팔로어수  </span> 
                                                </Typography>                               
                                                <Typography component="p" className={classes.cardNumber}>
                                                    <span style={{color:'black'}}>{followersNum}</span> 
                                                </Typography>                             
                                            </div>
                                            <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0px"}}>     
                                                <Typography component="p" className={classes.cardNumberStat}>
                                                    <span style={{color:'#EC407A'}}>Like수  </span> 
                                                </Typography>                               
                                                <Typography component="p" className={classes.cardNumber}>
                                                    <span style={{color:'black'}}>{likedNum}</span> 
                                                </Typography>                             
                                            </div>
                                            <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0px"}}>     
                                                <Typography component="p" className={classes.cardNumberStat}>
                                                    <span style={{color:'#EC407A'}}>친구수  </span> 
                                                </Typography>                               
                                                <Typography component="p" className={classes.cardNumber}>
                                                    <span style={{color:'black'}}>{friendsNum}</span> 
                                                </Typography>                             
                                            </div>
                                        </div>
                                        <Divider className={classes.divider} />
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
                                            onKeyPress={(e) => handleChangeTags(e, inputValue)}
                                            placeholder ="#자신의 관심분야들을 해시태그로 등록하세요."
                                        />
                                    </CardContent>
                                    </Card>    
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    
                                    <Typography component="p">
                                                    <span style={{color:'#EC407A', fontFamily:'CookieRun-Regular'}}>유효한 이메일 또는 비밀번호를 입력하고 엔터를 치면 갱신됩니다.  </span> 
                                    </Typography>         
                                    <div style= {{display: 'flex', flexDirection: 'row', marginTop: "20px"}}>   
                                        <Typography component="p">
                                                    <span style={{color:'#EC407A', fontFamily:'CookieRun-Regular'}}>이메일  </span> 
                                        </Typography>         
                                        <TextField
                                                InputProps={{                    
                                                    style : {width :"170%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                                        marginTop: '-5px', marginLeft: "15px"},
                                                    onChange: handleEmailChange
                                                }}
                                                fullWidth={false}
                                                defaultValue= {emailInput}         
                                                onKeyPress={(e) => handleEmailKeyDown(e, emailInput)}
                                            />
                                    </div>
                                    
                                    <div style= {{display: 'flex', flexDirection: 'row', marginTop: "40px"}}>   
                                        <Typography component="p">
                                                    <span style={{color:'#EC407A', fontFamily:'CookieRun-Regular'}}>비번 재설정  </span> 
                                        </Typography>         
                                        <TextField
                                                InputProps={{                    
                                                    style : {width :"170%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                                        marginTop: '-5px', marginLeft: "15px"},
                                                    onChange: handleResetPasswordChange
                                                }}
                                                fullWidth={false}
                                                defaultValue= {passwordInput}         
                                                onKeyPress={(e) => handleResetPasswordKeyDown(e, passwordInput)}
                                                type="password"
                                            />
                                    </div>
                                    
                                    <Button onClick={handleDeleteAccount} color="primary" style={{marginLeft: '-5px'}}className= {classes.button}>
                                        계정삭제
                                    </Button>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    
                                    <TextField
                                            InputProps={{                    
                                                style : {width :"300%", height:"300px", fontFamily:'CookieRun-Regular', borderColor: "#EC407A", 
                                                    marginTop: '10px', marginLeft: "15px", lineHeight: '25px', padding: '5px'},
                                                onChange: handleInboxTextFieldChange
                                            }}
                                            fullWidth={false}
                                            defaultValue= {inboxTextFieldInput}
                                            placeholder ="MyInbox에 저장하고 싶은 텍스트자료를 입력하세요."
                                            minRows={11}
                                            multiline={true}
                                        />
                                        
                                    <Button onClick={handlePostTextMyInbox} color="primary" style={{marginLeft: '-210px', marginTop: '350px', width: '50%'}} className= {classes.button}>
                                        저장
                                    </Button>
                                </TabPanel>
                            </div>
                        </div>
                    </Grid>
            </Grid>
        </div>
    );
} 

export default MyProfile;