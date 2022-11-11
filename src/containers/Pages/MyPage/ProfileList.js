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
        borderRadius: 10,
        marginTop: '15px',
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
}));

function ProfileList(props) {

    const classes = useStyles();
    const [ searchInputValue, setSearchInputValue ]= useState('');
    const [datas, setDatas ]= useState([]);
    const [ isLoaded, setIsLoaded ]= useState(false);
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    const handleSearchChange= event => {
        setSearchInputValue(event.target.value);
    };
    const createData = (ids, covers, avatars, names, titles, connections, verifieds, 
                                    followerss, likeds, followings, likings, isfriends) => {
        return {
            id: ids,
            cover: covers,
            avatar: avatars,
            name: names,
            title: titles,
            connection: connections, //친구수
            verified: verifieds,
            followers: followerss,
            liked: likeds,
            following: followings,
            liking: likings,
            isfriend: isfriends,
        };
    }
    const handleSearchKeyDown =(event, inputval) => {
        if(event.key === 'Enter'){ 

            if(inputval) {

                console.log(inputval);
                localStorage.setItem("profile-search", inputval);
                window.location.reload();
            }
        }
    };

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
    useEffect(()=> {
        if(localStorage.getItem("profile-search")) {
            const inputval= localStorage.getItem("profile-search");
            axios
                .get(baseURL+"mypage/profile-search/", {
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
            localStorage.removeItem("profile-search");
        }
        
    },[isLoaded]);
    return (
        <div className={classes.root}>
            <PapperBlock title="프로필 조회" whiteBg icon="ion-ios-grid-outline" desc="
            유저프로필들을 검색하여 조회할 수 있습니다.">
                
                <Typography component="p">
                        <span style={{color:'#EC407A', fontFamily:'CookieRun-Regular', marginLeft: '12px'}}>유저 이메일과 이름을 검색창에 입력하여 엔터를 치면 조회가 됩니다.</span> 
                </Typography>         
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
                                id={data.id}
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

export default ProfileList;