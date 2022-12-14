import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles/colorManipulator";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import business from "../../images/business.jpg";
import studyimg from "../../images/study.jpg";
import uploadimg from "../../images/upload.jpg";
import quiz from "../../images/quiz.jpg";
import readbooks from "../../images/readbooks.jpg";
import listening from "../../images/listening.png";
import write from "../../images/write.jpg";
import girldictionary from "../../images/girldictionary.jpg";
import mypage from "../../images/mypage.png";
import "./animation.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "170px",
  },
  t1: {
    // borderBottom: `3px solid #273238`,
    color:
      theme.palette.type === "dark" ? theme.palette.common.white : "#273238",
  },
  button: {
    margin: "10px",
    borderRadius: "0",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
    color:
      theme.palette.type === "dark"
        ? theme.palette.common.white
        : theme.palette.common.white,
    width: "100%",
    fontFamily: "CookieRun-Regular",
    fontSize: "15px",
    marginTop: "30px",
    "&:hover": {
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.primary.main
          : theme.palette.primary.dark,
    },
  },
  div_container_second: {
    backgroundColor:
      theme.palette.type === "dark"
        ? alpha(theme.palette.secondary.main, 0.8)
        : alpha(theme.palette.primary.main, 0.8),
    postiion: "relative",
    width: "3000px",
    height: "1000px",
    marginLeft: "-100px",
    marginTop: "0px",
  },
}));
function Home() {
  const classes = useStyles();

  useEffect(() => {
    if (localStorage.getItem("MyProfileOnce")) {
      localStorage.removeItem("MyProfileOnce");
    }
    if (localStorage.getItem("ChatMessageOnce")) {
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
        <Grid item xs={12}>
          <Typography
            component="h1"
            className={classes.t1}
            style={{ fontFamily: "CookieRun-Regular", fontSize: "45px" }}
          >
            Our Platform for Smart English Study
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h1"
            className={classes.t1}
            style={{ fontFamily: "CookieRun-Regular", fontSize: "30px" }}
          >
            Do you want your english to be smart?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h1"
            className={classes.t1}
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "30px",
              marginTop: "-30px",
            }}
          >
            Start with our english study website.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            onClick={() => {
              window.location.href = "/auth/email";
            }}
          >
            ???????????????.
          </Button>
        </Grid>
      </Grid>
      <div
        style={{
          backgroundColor: "black",
          width: "3000px",
          height: "500px",
          marginLeft: "-100px",
          position: "relative",
          marginTop: "30px",
        }}
      ></div>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="row"
        style={{
          marginTop: "-470px",
          marginLeft: "15px",
          position: "relative",
        }}
      >
        <Grid item xs={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "0",
            }}
          >
            <img
              src={uploadimg}
              width="470px"
              height="300px"
              alt="post function"
            />
            <Typography
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "16px",
                marginTop: "20px",
                color: " white",
              }}
            >
              ??????????????? ?????? ?????? ?????????, ??????, ??????
            </Typography>
            <Typography
              display="block"
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "16px",
                color: " white",
              }}
            >
              ????????? ??????, ?????????????????? ??????????????????. ??????,
            </Typography>
            <Typography
              display="block"
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "16px",
                color: " white",
              }}
            >
              ??????????????? ?????? ?????????????????? ???????????? ??????????????????.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "0",
            }}
          >
            <img
              src={studyimg}
              width="470px"
              height="300px"
              alt="practice function"
            />
            <Typography
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "16px",
                marginTop: "20px",
                color: " white",
              }}
            >
              ????????? ???????????? ???????????? ???????????? ?????? ?????? ??????,
            </Typography>
            <Typography
              display="block"
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "16px",
                color: " white",
              }}
            >
              ???????????????/??????/????????????,
            </Typography>
            <Typography
              display="block"
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "16px",
                color: " white",
              }}
            >
              ????????? ??? ????????? ?????? ???????????? ??????????????????.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "0",
            }}
          >
            <img
              src={business}
              width="470px"
              height="300px"
              alt="share function"
            />
            <Typography
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "16px",
                marginTop: "20px",
                color: " white",
              }}
            >
              ????????? ??????????????? ????????????,
            </Typography>
            <Typography
              display="block"
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "16px",
                color: " white",
              }}
            >
              ????????? ???????????? ?????????????????? ????????????
            </Typography>
            <Typography
              display="block"
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "16px",
                color: " white",
              }}
            >
              ?????????????????? ?????????????????????.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.div_container_second}></div>
      <Grid
        className="reveal fade-bottom"
        container
        alignItems="center"
        justify="center"
        direction="row"
        style={{
          marginTop: "-870px",
          marginLeft: "28px",
          position: "relative",
          marginBottom: "100px",
        }}
      >
        <Grid item xs={5}>
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "20px",
              fontStyle: "italic",
            }}
          >
            Learning English Smart
          </Typography>
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              fontStyle: "italic",
            }}
          >
            ????????? ???????????? ???????????? ?????? ????????? ???????????? ???????????? ????????????.
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              fontStyle: "italic",
            }}
          >
            ????????? ???????????? ?????? ???????????? ?????? ????????? ????????? ?????????.
          </Typography>
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              marginLeft: "0",
              fontStyle: "italic",
            }}
          >
            ?????????????????? ????????????, ??????????????? ?????? ??????????????????.
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              marginLeft: "0",
              fontStyle: "italic",
            }}
          >
            ??????, ???????????? ????????? ?????? ?????? ??? ?????? ???????????? ??????????????????.
          </Typography>
        </Grid>
        {/* <Grid item xs ={5}> 
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "25px", fontWeight: "bold", marginTop: "20px", marginLeft: "20px"}}>
              Share& Automatic Scoring System
              </Typography>
              <Typography component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px", marginTop: "20px", marginLeft: "20px"}}>
              ?????????????????? ????????????, ??????????????? ?????? ??????????????????.  
              </Typography>
              <Typography display="block" component="h1" style={{fontFamily:'CookieRun-Regular', fontSize: "20px",marginTop: "20px" , marginLeft: "20px"}}>
              ??????, ???????????? ????????? ?????? ?????? ??? ?????? ???????????? ??????????????????. 
              </Typography>
        </Grid>
        <Grid item xs ={5}> 
              <img src={circleshoes} width="450px" height="350px" style={{marginTop:'10px'}}/>
        </Grid> */}
      </Grid>
      {/* <hr width="100%" 
          style={{marginTop:'50px', marginLeft:'-30px'}}
          size="1px" 
          align="center"/> */}

      <div
        style={{
          backgroundColor: "black",
          width: "3000px",
          height: "3010px",
          marginLeft: "-100px",
          position: "relative",
        }}
      ></div>

      <Grid
        container
        alignItems="center"
        justify="flex-start"
        direction="row"
        style={{
          marginTop: "-3000px",
          marginLeft: "30px",
          position: "relative",
          marginBottom: "100px",
        }}
      >
        <Grid item xs={12} className="reveal fade-bottom">
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "20px",
              color: " white",
            }}
          >
            Several Features
          </Typography>
        </Grid>
        <Grid item xs={5} className="reveal fade-left">
          <img
            src={listening}
            width="550px"
            height="400px"
            style={{ marginTop: "50px" }}
          />
        </Grid>
        <Grid item xs={5} className="reveal fade-bottom">
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "20px",
              color: " white",
            }}
          >
            Listening ???????????? ??????
          </Typography>
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ????????? ??????????????? ???????????? ????????? ?????? ????????? ??????
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ????????? ???????????? ????????????, ???????????????.
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ????????? ???????????? ????????? ??????????????? ???????????? ??????????????? ????????????.
          </Typography>
        </Grid>
        <Grid item xs={5} className="reveal fade-bottom">
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "20px",
              color: " white",
            }}
          >
            Reading
          </Typography>
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ?????? ???????????????????????? ???????????????,
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ???????????????, ??????, ???????????? ?????????????????? ????????? ???????????????.
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ??????, ?????? ??????????????? ????????? ????????? ?????????????????? ???????????? ????????????,
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ?????? ??????????????? ?????? ?????? ???????????? ????????????.
          </Typography>
        </Grid>
        <Grid item xs={5} className="reveal fade-left">
          <img
            src={readbooks}
            width="550px"
            height="400px"
            style={{ marginTop: "50px" }}
          />
        </Grid>
        <Grid item xs={5} className="reveal fade-left">
          <img
            src={write}
            width="550px"
            height="400px"
            style={{ marginTop: "50px" }}
          />
        </Grid>
        <Grid item xs={5} className="reveal fade-bottom">
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "20px",
              color: " white",
            }}
          >
            Writing
          </Typography>
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ?????? ????????? ??? ?????? ??? ????????? ????????? ???????????? ?????? ?????????,
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ?????? ???????????? ?????? ????????????, ???????????? ?????? ???????????????, ??????????????????
            ?????? ???????????????.
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ????????????????????? ?????????????????????, ???????????? ???????????? ????????? ????????? ??????
            ??? comment??? ???????????? ????????? ????????????.
          </Typography>
        </Grid>
        <Grid item xs={6} className="reveal fade-bottom">
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "20px",
              color: " white",
            }}
          >
            Quiz
          </Typography>
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            Reading, Listening ????????? ???????????? ??? ????????? ???????????? ????????????
            ???????????? ????????????.
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ??? ???????????? ??????10?????? ??????????????? ????????????.
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ?????????, ?????????, ????????? ???????????? ???????????? ?????? ???????????? ?????????
            ????????????,
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ???????????? ?????????????????? ?????????????????? ??????????????????.
          </Typography>
        </Grid>
        <Grid item xs={5} className="reveal fade-left">
          <img
            src={quiz}
            width="350px"
            height="400px"
            style={{ marginTop: "50px" }}
          />
        </Grid>
        <Grid item xs={5} className="reveal fade-left">
          <img
            src={girldictionary}
            width="550px"
            height="400px"
            style={{ marginTop: "50px" }}
          />
        </Grid>
        <Grid item xs={5} className="reveal fade-bottom">
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "20px",
              color: " white",
            }}
          >
            Vocab
          </Typography>
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ???????????? ??????????????? ????????? ????????? ???????????? ?????????????????? ?????????
            ??????????????????.
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ????????? ??????????????? ???????????? ?????? ????????? ?????? ?????????,
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ???????????? ????????? ?????? ?????? ?????? ?????? ????????? ??????????????? ????????????.
          </Typography>
        </Grid>
        <Grid item xs={5} className="reveal fade-bottom">
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "20px",
              color: " white",
            }}
          >
            ???????????????
          </Typography>
          <Typography
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ?????? ???????????? ??????, ?????? ?????? ??? ?????? ????????????????????? ???????????? ?????????
            ?????? ???????????? ???????????? ??? ????????????.
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            ??????, ?????? ??????????????? ????????? ???????????? ?????????,
          </Typography>
          <Typography
            display="block"
            component="h1"
            style={{
              fontFamily: "CookieRun-Regular",
              fontSize: "20px",
              marginTop: "20px",
              color: " white",
            }}
          >
            MyInbox??? ????????? ?????? ????????? ???????????? ???????????? ????????????.
          </Typography>
        </Grid>
        <Grid item xs={6} className="reveal fade-left">
          <img
            src={mypage}
            width="500px"
            height="400px"
            style={{ marginTop: "50px" }}
            alt="inbox"
          />
        </Grid>
      </Grid>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
