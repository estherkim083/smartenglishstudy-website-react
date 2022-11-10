import React, {useEffect , useState} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import Grid from '@material-ui/core/Grid';
import coverimg from "../../../images/profiles/nature.jpg";
import ProfileCard from '../../../components/Profile/ProfileCard';
import profileimg from "../../../images/avatars/user.png";
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';


import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "15px"
    },    
    
    divider: {
        color: 'black'
    },
    grid: {
        marginTop: '40px'
    },
    gridcontainer: {
        marginTop: '40px'
    },
    search: {
        position: 'relative',
        marginTop: '5px',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: '5px',
        height: '50px',
        backgroundColor: alpha(theme.palette.primary.main, 0.8),
        '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.5),
        },
        marginLeft: 0,
        width: '30%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            marginTop: '5px',
            width: '30%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        marginTop: '8px',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    button : {
        margin: "10px",
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark, 
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.white,
        width:"12%",
        height: "40px",
        fontFamily: 'CookieRun-Regular',
        fontSize: '15px',
        marginTop: "30px",
        '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main, 
        },
    },
    formControl: {
        marginTop: '-8px'
    },
    select: {
        width: '140px',
        backgroundColor: theme.palette.primary.light
    },
    changeFontFamilyClasses: {
      fontFamily: "CookieRun-Regular",
    },
    dialogtitle: {
      fontFamily: "CookieRun-Regular",
      color: theme.palette.secondary.dark,
    },
    dialogPaper: {
        width: '500px'
    }
}));

function ProfilePeerList(props) {

    const classes = useStyles();
    const [ searchInputValue, setSearchInputValue ]= useState('');
    const [ addgroupInputText, setAddgroupInputText ]= useState('');
    const [datas, setDatas ]= useState([]);
 
    const createData = (id, cover, avatar, name, title, connection, verified, 
                                followers, liked, following, liking, isfriend) => {
        return {
            id,
            cover,
            avatar,
            name,
            title,
            connection, //친구수
            verified,
            followers,
            liked,
            following,
            liking,
            isfriend,
        };
    }
    const handleSearchChange= event => {
        setSearchInputValue(event.target.value);
    };
    const handleSearchKeyDown =(event, inputval) => {
        if(event.key === 'Enter'){ 

            if(inputval) {
                console.log(inputval);
                localStorage.setItem("profile-peer-list-keyword", inputval);
                window.location.reload();
            }
        }
    }

    const [dataState, setDataState] = useState({
        group: ''
    });
    const [ friendsName, setFriendsName ]= useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const baseURL= process.env.REACT_APP_BASE_BACKEND_URL;
    
    const handleChange = name => event => {
        setDataState({
            ...dataState,
            [name]: event.target.value
        });
        console.log(event.target.value);
        const group = event.target.value;
        
        localStorage.setItem("profile-peer-list-group", group);
        window.location.reload();
    };
    const [DialogDataState, setDialogDataState] = useState({
        open: false,
        groupName: '',
    });

    const [DialogDataState2, setDialogDataState2] = useState({
        open: false,
        friends: {},
        group: '',
        toGroup: '',
    });

    const handleChangeSelectedGroup = group => event => {
        setDialogDataState2({
            ...DialogDataState2,
            [group]: event.target.value
        });
    };
    
    const handleCloseDialog1 = () => {
        setDialogDataState({
            ...DialogDataState,
            open: false
        });
    };
    const handleCloseDialog2 = () => {
        setDialogDataState2({
            ...DialogDataState2,
            open: false
        });
    };
    const handleClickOpenDialog1= () => {
        setDialogDataState({
            ...DialogDataState,
            open: true
            });
    };
    const handleClickOpenDialog2= () => {
        setDialogDataState2({
            ...DialogDataState2,
            open: true
            });
    };
    const handleGroupInputChange = event => {

        setAddgroupInputText(event.target.value);
    };
    const handleGroupInputKeyDown = (event, inputval) => {
        
    };
    const handleCheckFriendsChange = (group, friend) => event => {
        console.log(DialogDataState2.friends);
        DialogDataState2.friends[group][friend]= event.target.checked
        setDialogDataState2({
          ...DialogDataState2,
          friends: DialogDataState2.friends
        });
      };
    const [ groupsName, setGroupsName ]= useState([]);
    useEffect(() => {
        setIsLoaded(true);
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
    });
    useEffect(() => {
        if(isLoaded) {
            axios
                .get(baseURL+"mypage/move-groups/", {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    },
                })
                .then(res => {
                    const all_datas= res["data"]["all_datas"];
                    const all_groups= res["data"]["all_groups"];

                    var tmp= {};
                    var group_names= Object.keys(res['data']["all_datas"]);
                    for (const group of group_names) {
                        var emails= all_datas[group]; // 그룹마다의 이메일 리스트
                        if(emails.length != 0) {
                            var tmp2= {}; 
                            for(var i=0;i<emails.length;i++) {
                                tmp2[emails[i]]= false;
                            }
                            tmp[group]= tmp2;
                        }else{
                            tmp[group]= {};
                        }
                    }
                    setGroupsName(all_groups);
                    setFriendsName(all_datas);
                    // { '그룹명' : [email, email, email...] , '그룹2명' : [email, email, email...] }
                    setDialogDataState2({
                        ...DialogDataState2,
                        friends: tmp
                    });
                })
                .catch(error => {});
                //friends: { '그룹명': {'estherkim083@gmail.com': false, 'ss2019hi@daum.net': false, 'khi@gmail.com': false}}
            if(localStorage.getItem("profile-peer-list-group")) {
                const group= localStorage.getItem("profile-peer-list-group");
                axios
                    .get(baseURL+"mypage/profile-search-based-on-groups/", {
                        headers: {
                        Authorization: localStorage.getItem('token')
                            ? 'Token ' + localStorage.getItem('token')
                            : null,
                        'Content-Type': 'application/json',
                        accept: 'application/json',
                        },
                        params: {
                            group: group
                        }
                    })
                    .then(res => {
                        var count = Object.keys(res['data']).length;
                        var ids= Object.keys(res['data']);
                        let tmp= [];
                        for(var i = 0; i < count; i++) {
                            var res_data= res['data'][ids[i]];
                            console.log(res_data);
                            tmp[i]=createData(ids[i], res_data['cover'], res_data['avatar'], res_data['name'], res_data['title'], res_data['connection'], res_data['verified'], res_data['followers'], res_data['liked'], res_data['following'], res_data['liking'], res_data['isfriend']);
                            
                        }
                        setDatas(tmp);
                    })
                    .catch(error => {});
                localStorage.removeItem("profile-peer-list-group");
            }
            if(localStorage.getItem("profile-peer-list-keyword")) {
                const inputval= localStorage.getItem("profile-peer-list-keyword");
                
                axios
                    .get(baseURL+"mypage/profile-search-based-on-friends/", {
                        headers: {
                        Authorization: localStorage.getItem('token')
                            ? 'Token ' + localStorage.getItem('token')
                            : null,
                        'Content-Type': 'application/json',
                        accept: 'application/json',
                        },
                        params: {
                            userinfo: inputval
                        }
                    })
                    .then(res => {

                        var count = Object.keys(res['data']).length;
                        var ids= Object.keys(res['data']);
                        let tmp= [];
                        for(var i = 0; i < count; i++) {
                            var res_data= res['data'][ids[i]];
                            console.log(res_data);
                            tmp[i]=createData(ids[i], res_data['cover'], res_data['avatar'], res_data['name'], res_data['title'], res_data['connection'], res_data['verified'], res_data['followers'], res_data['liked'], res_data['following'], res_data['liking'], res_data['isfriend']);
                            
                        }
                        setDatas(tmp);
                    })
                    .catch(error => {});
                localStorage.removeItem("profile-peer-list-keyword");
            }
        }
    }, [isLoaded]);   
    const handleAddGroups= () => {
        axios
            .post(baseURL+"mypage/add-groups/" , {
                group: addgroupInputText
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
        
        setDialogDataState({
            ...DialogDataState,
            open: false
        });
        setAddgroupInputText('');
        window.location.reload();
    };
    const handleToGroup= () => {
        var x= DialogDataState2.friends;        
        var groupSelected= DialogDataState2.group;

        var tmp= [];
        var checklist= x[groupSelected];
        console.log(checklist);
        var emails= Object.keys(checklist);
        for (const email of emails) {
            var checkedTmp = checklist[email];
            if(checkedTmp== true) {
                tmp.push(email);
            }
        }
        console.log(tmp);
        axios
            .post(baseURL+"mypage/move-groups/" , {
                group: DialogDataState2.group,
                toGroup: DialogDataState2.toGroup,
                checked: tmp, //체크된 친구 리스트 
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
        
        setDialogDataState2({
            ...DialogDataState2,
            open: false
        });
        window.location.reload();
    };

    return (
        <div className={classes.root}>
            <PapperBlock title="친구/그룹 프로필 조회" whiteBg icon="ion-ios-grid-outline" desc="
            친구/그룹 프로필들을 검색하여 조회할 수 있습니다.">
                
                <Typography component="p">
                        <span style={{color:'#EC407A', fontFamily:'CookieRun-Regular', marginLeft: '12px'}}>유저 이메일과 이름을 검색창에 입력하여 엔터를 치면 조회가 됩니다.</span> 
                </Typography>         
                
                <div style= {{display: 'flex', flexDirection: 'row', marginTop: "10px"}}>  
                
                    <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="group-native-helper">그룹</InputLabel>
                            <Select
                            native
                            value={dataState.group}
                            onChange={handleChange('group')}
                            input={<Input id="age-native-helper" />}
                            className= {classes.select}
                            >
                            <option value=""></option>
                            {groupsName.map((group, i) =>(
                                <option value={group}>{group}</option>
                            ))}
                            </Select>
                            <FormHelperText>검색할 그룹을 선택하세요.</FormHelperText>
                    </FormControl> 
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 
                            'aria-label': 'search',                        
                            onChange: handleSearchChange
                        }}
                        onKeyPress={(e) => handleSearchKeyDown(e, searchInputValue)}
                        />
                    </div>
                    <Button color="primary" style={{marginLeft: '25px', marginTop: '6px', width: '80px', borderRadius: '6px'}} className= {classes.button} onClick={handleClickOpenDialog1}>
                                        그룹추가
                    </Button>
                    <Dialog
                        disableBackdropClick
                        disableEscapeKeyDown
                        open={DialogDataState.open}
                        onClose={handleCloseDialog1}
                        classes={{ paper: classes.dialogPaper }}
                        >
                        <DialogTitle disableTypography="true" className={classes.dialogtitle}>추가할 그룹명을 입력하세요.</DialogTitle>
                        <DialogContent>
                            <TextField
                                InputProps={{                    
                                    style : {width :"170%", fontFamily:'CookieRun-Regular', borderColor: "#EC407A",
                                        marginTop: '-5px', marginLeft: "15px"},
                                    onChange: handleGroupInputChange
                                }}
                                fullWidth={false}
                                defaultValue= {addgroupInputText}         
                                onKeyPress={(e) => handleGroupInputKeyDown(e, addgroupInputText)}
                             />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog1} color="primary">
                            Cancel
                            </Button>
                            <Button color="primary" onClick={handleAddGroups}>
                            Ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Button color="primary" style={{marginLeft: '10px', marginTop: '6px', width: '80px' , borderRadius: '6px'}} className= {classes.button} onClick={handleClickOpenDialog2}>
                                        그룹옮기기
                    </Button>
                    
                    <Dialog
                        disableBackdropClick
                        disableEscapeKeyDown
                        open={DialogDataState2.open}
                        onClose={handleCloseDialog2}
                        >
                        <DialogTitle disableTypography="true" className={classes.dialogtitle}>친구 그룹을 옮기세요. </DialogTitle>
                        <DialogContent>
                            <form className={classes.container}>
                                
                                <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0px"}}>   
                                    <div style= {{display: 'flex', flexDirection: 'row', marginTop: "0px", padding: '5px'}}>   
                                        <FormControl className={classes.formControl}> {/* 친구 리스트의 기준이 되는 그룹 */}
                                            <InputLabel className={classes.changeFontFamilyClasses}>그룹</InputLabel>
                                            <Select
                                            native
                                            value={DialogDataState2.group}
                                            onChange={handleChangeSelectedGroup('group')}
                                            input={<Input className={classes.changeFontFamilyClasses}/>}
                                            >
                                            <option value=""></option>
                                            {groupsName.map((group, i) =>(
                                                <option value={group} className={classes.changeFontFamilyClasses}>{group}</option>
                                            ))}
                                            </Select>
                                        </FormControl>
                                        <ArrowForwardIcon style={{margin: '20px'}}/>
                                        <FormControl className={classes.formControl}> 
                                            <InputLabel className={classes.changeFontFamilyClasses}>이동그룹</InputLabel>
                                            <Select
                                            native
                                            value={DialogDataState2.toGroup}
                                            onChange={handleChangeSelectedGroup('toGroup')}
                                            input={<Input className={classes.changeFontFamilyClasses}/>}
                                            >
                                            <option value=""></option>
                                            {groupsName.map((group, i) =>(
                                                <option value={group} className={classes.changeFontFamilyClasses}>{group}</option>
                                            ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <FormControl component="fieldset">
                                    <FormGroup style={{marginTop: '20px'}}>
                                            { friendsName != null && DialogDataState2.group!= '' && friendsName[DialogDataState2.group].map((friend, index)=> {
                                                return <FormControlLabel
                                                    key={index}
                                                    control= {(
                                                        <Checkbox
                                                            checked={DialogDataState2.friends[DialogDataState2.group][friend]}
                                                            onChange={handleCheckFriendsChange(DialogDataState2.group, friend)}
                                                            value= {friend}
                                                        />
                                                    )}
                                                    label={friend}
                                                />;
                                            })
                                            }
                                    </FormGroup>
                                    <FormHelperText>해당그룹으로 이동할 친구들을 선택하세요.</FormHelperText>
                                    </FormControl>
                                </div>
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog2} color="primary">
                            Cancel
                            </Button>
                            <Button  color="primary" onClick={handleToGroup}>
                            Ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <Grid
                    container
                    alignItems="stretch"
                    justify="start"
                    direction="row"
                    spacing={1}
                    className={classes.gridcontainer}
                    >
                    {
                        datas.map((data, index) => (
                        <Grid item xs={5} key={index.toString()} 
                        className={classes.grid}>
                            <ProfileCard
                                cover={data.cover}
                                avatar={data.avatar}
                                name={data.name}
                                title={data.title}
                                connection={data.connection}
                                isVerified={data.verified}
                                followers={data.followers}
                                liked={data.liked}
                                following= {data.following}
                                liking= {data.liking}
                                isfriend= {data.isfriend}
                            />
                        </Grid>
                    ))
                    }
                </Grid>
            </PapperBlock>
        </div>
    );
} 

export default ProfilePeerList;