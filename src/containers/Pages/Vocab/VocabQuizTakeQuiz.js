import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useWindowDimensions from '../../../useWindowDimensions';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "15px"
    },      
    button : {
        margin: "10px",
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, 
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.white,
        width:"50%",
        fontFamily: 'CookieRun-Regular',
        fontSize: '15px',
        marginTop: "30px",
        '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark, 
        },
    },
}));

function SolveRoom(props) {

    const classes = useStyles();
    const [datas, setDatas] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const { height, width } = useWindowDimensions();
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    let { id } = useParams();
    
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
            axios
                .get(baseURL+"vocab/vocab-quiz/", {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    }
                })
                .then(res => {
                    console.log(res["data"]);
                    setDatas(res["data"]);
                })
                .catch(error => {});   
        }
    },[isLoaded]);
    const [studentAnswers, setStudentAnswers] = useState([]); // ['1', '...', '1, 2, 3']
    const handleChangeAnswer= (e, index)=> {
        var n = Object.keys(datas).length;
        if(studentAnswers.length==0) {
            const xx=  Array.from({length: n}).map(el => "");
            xx.splice(index, 1, e.target.value);
            setStudentAnswers(xx);
        }
        else {
            const xx= [...studentAnswers];
            xx.splice(index, 1, e.target.value);
            setStudentAnswers(xx);
        }
    };
    const handleSubmit= () => {
        console.log(studentAnswers);
        axios
            .post(baseURL+"vocab/vocab-quiz/", {
                student_answer: studentAnswers
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
                window.location.href= '/vocab/quiz-memorization';
            });
    };
    return (
        <div className={classes.root}>
            <PapperBlock title="어휘퀴즈 문제풀이방" whiteBg icon="ion-ios-grid-outline" desc="
            퀴즈 문제 풀이방에서 어휘 암기문제를 풀어보세요.">
                
                <Grid
                    container
                    alignItems="flex"
                    justify="center"
                    direction="column"
                    spacing={3}
                    >
                    {datas!= {} && 
                        Object.entries(datas).map( ([key, value], index) => {
                            return <Grid item md={12}>
                                    <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px"}}>{index+1} 번.</Typography>
                                    {value["label"]== "type1" && 
                                        <><Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px"}}>영어단어가 주어지면, 영어로 해석 풀이 적는 문제입니다.</Typography>
                                        <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px"}}>{value["영단어"]}</Typography>
                                            
                                        <TextField 
                                            style={{height: "35px", width: "70%", marginLeft: '10px', marginTop: '20px'}}
                                            onChange={(e)=> handleChangeAnswer(e, index)}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder="영어해석을 적으세요."
                                            >
                                        </TextField>        
                                        </>
                                    }
                                    {value["label"]== "type2" && 
                                        <><Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px"}}>영어단어가 주어지면, 한글 의미를 적는 문제입니다.</Typography>
                                        <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px"}}>{value["영단어"]}</Typography>
                                        
                                        <TextField 
                                            style={{height: "35px", width: "70%", marginLeft: '10px', marginTop: '20px'}}
                                            onChange={(e)=> handleChangeAnswer(e, index)}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder="한글의미를 적으세요."
                                            >
                                        </TextField>        
                                        </>
                                    }
                                    {value["label"]== "type3" && 
                                        <><Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px"}}>한글 의미 또는 영어 해석이 주어지면, 영어단어를 적는 문제입니다.</Typography>
                                        <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px"}}>{value["한글의미"]}</Typography>
                                        <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px"}}>{value["영어의미글"]}</Typography>                                           
                                        
                                        <TextField 
                                            style={{height: "35px", width: "70%", marginLeft: '10px', marginTop: '20px'}}
                                            onChange={(e)=> handleChangeAnswer(e, index)}
                                            InputLabelProps={{
                                                style: { color: '#fff', fontStyle: "bold" , fontFmaily: 'CookieRun-Regular'}, 
                                            }}
                                            inputProps={{
                                                style: {
                                                    fontFamily: 'CookieRun-Regular',
                                                },
                                            }}
                                            placeholder="영어단어를 적으세요. 철자에 주의하세요."
                                            >
                                        </TextField>        
                                        </>
                                    }
                                </Grid>
                        })
                    }
                    <Grid item md={12}>
                        <Button className={classes.button} onClick={()=> handleSubmit()}>Submit</Button>
                    </Grid>
                </Grid>
            </PapperBlock>
        </div>
    );
} 

export default SolveRoom;