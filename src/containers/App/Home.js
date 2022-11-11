
import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import business from '../../images/business.jpg';
import studyimg from '../../images/study.jpg';
import uploadimg from '../../images/upload.jpg';
import studentimg1 from '../../images/student.png';
import circleshoes from '../../images/circleshoes.jpg';
import quiz from '../../images/quiz.jpg';
import readbooks from '../../images/readbooks.jpg';
import listening from '../../images/listening.png';
import write from '../../images/write.jpg';
import girldictionary from '../../images/girldictionary.jpg';
import mypage from '../../images/mypage.png';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:'170px',
    },
    t1: {      
     // borderBottom: `3px solid #273238`,
      color:theme.palette.type === 'dark' ? theme.palette.common.white : '#273238'
    },
    button : {
        margin: "10px",
        borderRadius: '0',
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, 
        color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.white,
        width:"100%",
        fontFamily: 'CookieRun-Regular',
        fontSize: '15px',
        marginTop: "30px",
        '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark, 
        },
    },    
    div_container_second: {
      backgroundColor: theme.palette.type === 'dark' ? alpha(theme.palette.secondary.main, 0.8): alpha(theme.palette.primary.main, 0.8),
      postiion:'relative', 
      width: '3000px', 
      height:'1000px', 
      marginLeft: '-100px',
      marginTop: '0px'
    }
}));
function Home() {
  const classes = useStyles();


    useEffect(()=> {

      if(localStorage.getItem("MyProfileOnce")) {
          localStorage.removeItem("MyProfileOnce");
      }
      if(localStorage.getItem("ChatMessageOnce")) {
        localStorage.removeItem("ChatMessageOnce");
      } 
    });
    return (
      <div className={classes.root}>
      <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          spacing={3}
      >
        <Grid item xs ={12}>
            <Typography component="h1" className={classes.t1} style={{fontFamily:'CookieRun-Regular', fontSize: "45px"}}>
              Our Platform for Smart English Study
            </Typography>
        </Grid>
        <Grid item xs ={12}>          
            <Typography component="h1" className={classes.t1} style={{fontFamily:'CookieRun-Regular', fontSize: "30px"}}>
                Do you want your english to be smart?
            </Typography>
        </Grid>
        <Grid item xs ={12}>          
            <Typography component="h1" className={classes.t1} style={{fontFamily:'CookieRun-Regular', fontSize: "30px", marginTop: '-30px'}}>
              Start with our english study website.
            </Typography>
        </Grid>
        <Grid item xs ={12}> 
            <Button className={classes.button} onClick={()=> {window.location.href= '/auth/email'}}>시작하세요.</Button>     
        </Grid>
      </Grid>
      <div style={{backgroundColor:'black', width:'3000px', height:'500px', marginLeft: '-100px', position: 'relative', marginTop: '30px'}}></div>
      <Grid
          container
          alignItems="center"
          justify="center"
          direction="row"
          style={{marginTop: '-470px', marginLeft: '15px', position: 'relative'}}
      >
      <Grid item xs ={4}> 
            <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0"}}>
              <img src={uploadimg} width="470px" height="300px"/>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px", color:' white'}}>
              공부하고자 하는 영어 리스닝, 리딩, 영어 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", color:' white'}}>
              글쓰기 자료, 어휘자료들을 업로드하세요. 또한, 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", color:' white'}}>
              공유하고자 하는 퀴즈자료들을 생성하여 업로드하세요.
              </Typography>
            </div>
        </Grid>
        <Grid item xs ={4}> 
            <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0"}}>
              <img src={studyimg} width="470px" height="300px"/>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px", color:' white'}}>
              자신이 업로드한 자료들을 바탕으로 빈칸 뚫기 연습,
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", color:' white' }}>
              하이라이트/메모/어휘등록,
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", color:' white'}}>
              에세이 및 영어책 관련 글쓰기를 진행해보세요. 
              </Typography>
            </div>
        </Grid>
        <Grid item xs ={4}> 
            <div style= {{display: 'flex', flexDirection: 'column', marginTop: "0"}}>
              <img src={business} width="470px" height="300px"/>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", marginTop: "20px", color:' white'}}>
              퀴즈나 연습결과를 확인하며, 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", color:' white'}}>
              다양한 자료들을 다른유저들과 공유하고
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "16px", color:' white'}}>
              영어글쓰기를 첨삭받아보세요.
              </Typography>
            </div>
        </Grid>
      </Grid>
      <div className={classes.div_container_second}></div>
      <Grid
          container
          alignItems="center"
          justify="flex-start"
          direction="row"
          style={{marginTop: '-870px', marginLeft: '30px', position: 'relative', marginBottom: '100px'}}
      >
        <Grid item xs ={5}> 
              <img src={studentimg1} width="550px" height="400px"/>
        </Grid>
        <Grid item xs ={5}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "25px", fontWeight: "bold", marginTop: "20px"}}>
              Learning English Smart
              </Typography>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px", marginTop: "20px"}}>
              다양한 영어학습 분야들을 각종 특화된 방법으로 공부할수 있습니다. 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" }}>
              영어에 자신감을 갖고 스마트한 영어 실력을 갖추어 보세요. 
              </Typography>
        
        </Grid>
        <Grid item xs ={5}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "25px", fontWeight: "bold", marginTop: "20px", marginLeft: "20px"}}>
              Share& Automatic Scoring System
              </Typography>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px", marginTop: "20px", marginLeft: "20px"}}>
              영어자료들을 공유하고, 첨삭받을수 있는 시스템입니다.  
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" , marginLeft: "20px"}}>
              또한, 자동으로 리스닝 빈칸 뚫기 및 영어 퀴즈들을 채점해줍니다. 
              </Typography>
        </Grid>
        <Grid item xs ={5}> 
              <img src={circleshoes} width="450px" height="350px" style={{marginTop:'10px'}}/>
        </Grid>
      </Grid>
        {/* <hr width="100%" 
          style={{marginTop:'50px', marginLeft:'-30px'}}
          size="1px" 
          align="center"/> */}
          
      <div style={{backgroundColor:'black', width:'3000px', height:'3010px', marginLeft: '-100px', position: 'relative', }}></div>
      
      <Grid
          container
          alignItems="center"
          justify="flex-start"
          direction="row"
          style={{marginTop: '-3000px', marginLeft: '30px', position: 'relative', marginBottom: '100px'}}
      >
        <Grid item xs ={12}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "30px", fontWeight: "bold", marginTop: "20px", color:' white'}}>
                  Several Features
              </Typography>
        </Grid>
        <Grid item xs ={5}> 
              <img src={listening} width="550px" height="400px" style={{marginTop:'50px'}}/>
        </Grid>
        <Grid item xs ={5}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "25px", fontWeight: "bold", marginTop: "20px", color:' white'}}>
              Listening 빈칸뚫기 학습
              </Typography>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px", marginTop: "20px", color:' white'}}>
              리스닝 스크립트를 사용자가 설정한 빈칸 정도에 따라  
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" , color:' white'}}>
              빈칸을 자동으로 뚫어주며, 채점됩니다.
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" , color:' white'}}>
              빈칸을 채우면서 리스닝 공부에서의 집중력을 향상시킬수 있습니다.
              </Typography>
        
        </Grid>
        <Grid item xs ={5}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "25px", fontWeight: "bold", marginTop: "20px", color:' white'}}>
              Reading
              </Typography>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px", marginTop: "20px", color:' white'}}>
              각종 영어독해자료들을 업로드하면, 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" , color:' white'}}>
              하이라이트, 메모, 중요어휘 해시태그로의 등록이 가능합니다.
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px", color:' white' }}>
              또한, 리딩 단어장에는 태그로 등록한 어휘단어들이 자동으로 저장되며,
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px", color:' white' }}>
              리딩 단어장에서 의미 등을 수정할수 있습니다.
              </Typography>
        </Grid>
        <Grid item xs ={5}> 
              <img src={readbooks} width="550px" height="400px" style={{marginTop:'50px'}}/>
        </Grid>
        <Grid item xs ={5}> 
              <img src={write} width="550px" height="400px" style={{marginTop:'50px'}}/>
        </Grid>
        <Grid item xs ={5}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "25px", fontWeight: "bold", marginTop: "20px", color:' white'}}>
              Writing
              </Typography>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px", marginTop: "20px", color:' white'}}>
              영어 에세이 및 영어 책 글쓰기 두가지 영역에서 방을 만들면,  
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px", color:' white' }}>
              다른 유저들과 방을 공유하여, 에세이를 서로 첨삭해주고, 피드백해줄수 있는 공간입니다. 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px", color:' white' }}>
              첨삭자료실에서 확인할수있으며, 첨삭자로 지정되지 않아도 에세이 열람 및 comment로 피드백을 받을수 있습니다.
              </Typography>
        
        </Grid>
        <Grid item xs ={6}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "25px", fontWeight: "bold", marginTop: "20px", color:' white'}}>
              Quiz
              </Typography>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px", marginTop: "20px", color:' white'}}>
              Reading, Listening 두가지 유형으로 각 유형별 문제들을 출제하고 공유할수 있습니다.
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px", color:' white'}}>
              각 유형별로 최대10문제 출제제한이 있습니다.
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" , color:' white'}}>
              객관식, 서술형, 단답형 문제들을 출제하고 다른 유저들이 퀴즈를 수행하면, 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px", color:' white' }}>
              자동으로 성적리스트에 업데이트되는 시스텝입니다.
              </Typography>
        </Grid>
        <Grid item xs ={5}> 
              <img src={quiz} width="350px" height="400px" style={{marginTop:'50px'}}/>
        </Grid>
        <Grid item xs ={5}> 
              <img src={girldictionary} width="550px" height="400px" style={{marginTop:'50px'}}/>
        </Grid>
        <Grid item xs ={5}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "25px", fontWeight: "bold", marginTop: "20px", color:' white'}}>
              Vocab
              </Typography>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px", marginTop: "20px", color:' white'}}>
              영어에서 중요하거나 자신이 모르는 어휘들을 어휘단어장에 하나씩 등록해보세요. 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" , color:' white'}}>
              암기용 퀴즈실에서 랜덤하게 암기 퀴즈를 볼수 있으며, 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px", color:' white' }}>
                자동채점 결과를 통해 영어 단어 암기 속도를 향상시킬수 있습니다.
              </Typography>
        </Grid>
        <Grid item xs ={5}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "25px", fontWeight: "bold", marginTop: "20px", color:' white'}}>
              마이페이지
              </Typography>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px", marginTop: "20px", color:' white'}}>
              다른 유저들을 조회, 친구 연결 및 영어 학습과정에서의 피드백이 필요한 경우 메세지를 주고받을 수 있습니다.
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" , color:' white'}}>
              또한, 나의 프로필에서 계정을 삭제할수 있으며, 
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" , color:' white'}}>
              MyInbox에 중요한 영어 텍스트 자료들을 정리할수 있습니다.
              </Typography>
        </Grid>
        <Grid item xs ={6}> 
              <img src={mypage} width="500px" height="400px" style={{marginTop:'50px'}}/>
        </Grid>
      </Grid>
        {/* <Footer/> */}
      </div>
    );
  }
  
  export default Home;