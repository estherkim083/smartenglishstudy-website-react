import React, {useEffect , useState, useCallback} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WritingBorderedTable from '../../Table/WritingBorderedTable';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    joinButton : {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, 
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.white,
        width:"8%",
        fontFamily: 'CookieRun-Regular',
        fontSize: '15px',
        marginTop: "30px",
        '&:hover': {
          backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark, 
        },
    }
}));

function EssayWritingView(props) {

    const classes = useStyles();
    let { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    const [expanded, setExpanded] = useState(null);

    const handleChange = useCallback(panel => {
        const expandedValue = expanded !== panel ? panel : false;
        setExpanded(expandedValue);
    }, [expanded]);

    const handleJoinButton= () => {
        axios
            .post(baseURL+"writing/join-essay-room/"+id , {},
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
                window.location.href="/smartenglishstudy-website-react/writing/essay/"+id;
            });
    };
    const handleUnJoinButton= () => {
        axios
            .post(baseURL+"writing/unjoin-essay-room/"+id , {},
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
                window.location.href="/smartenglishstudy-website-react/writing/essay/"+id;
            });
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
            axios
                .get(baseURL+"writing/get-essay-room-data/"+id, {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    }
                })
                .then(res => {
                    setData(res["data"]);
                    console.log(res["data"]);
                        
                })
                .catch(error => {});
        }

    }, [isLoaded]);
    return (
        <div>
            <PapperBlock title="EssayWriting Menu" whiteBg icon="ion-ios-grid-outline" desc="
            영어에세이 글쓰기 방 화면입니다. 에세이를 직접 작성하고 공유해보세요. ">
                <Grid
                    container
                    alignItems="flex-start"
                    justify="center"
                    direction="row"
                    style= {{padding: "80px", marginTop: '-100px'}}
                    spacing={2}>
                   {(data!= null && data!= undefined && Object.keys(data).length != 0) && 
                        <><Grid item md={12}>
                            {console.log(data)}
                            <Accordion expanded={expanded === 'panel1'} onChange={() => handleChange('panel1')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography style={{fontSize:'20px', fontWeight:'bold', fontFamily:'CookieRun-Regular'}}>{Object.keys(data.room_info.topic).length !=0 ? data.room_info.topic: ''}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography style={{fontFamily:'CookieRun-Regular'}}>
                                    {Object.keys(data.room_info.about_content).length !=0? data.room_info.about_content: ''}
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item md={12}>
                            <WritingBorderedTable datas={Object.keys(data.essays_info)!= 0 ? data.essays_info: null}/>
                        </Grid>
                        {data.room_info.participating ==false ? 
                        <Grid item md={12}>
                            <Button className={classes.joinButton} onClick={handleJoinButton}>방 참여하기</Button>
                        </Grid>: 
                        <Grid item md={12}>
                            <Button className={classes.joinButton} onClick={handleUnJoinButton}>방 탈퇴하기</Button>
                        </Grid>                       
                        }
                        </>
                    }
                </Grid>
            </PapperBlock>
        </div>
    );
} 

export default EssayWritingView;