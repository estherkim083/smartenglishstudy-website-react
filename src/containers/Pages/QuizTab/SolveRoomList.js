import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PapperBlock from "../../../components/PapperBlock/PapperBlock";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useWindowDimensions from "../../../useWindowDimensions";
import QuizRoomCard from "../../../components/RoomCard/QuizRoomCard";
import axios from "axios";
import Loading from "../../../components/Loading";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
  },
  button: {
    margin: "10px",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
    color:
      theme.palette.type === "dark"
        ? theme.palette.common.white
        : theme.palette.common.white,
    width: "45%",
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
}));

function SolveRoomList(props) {
  const classes = useStyles();
  const [datas, setDatas] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps
  const { height, width } = useWindowDimensions();
  const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
  useEffect(() => {
    var author = localStorage.getItem("user_name");
    if (author === null) {
      window.location.href = "/auth/email";
    }
    if (localStorage.getItem("MyProfileOnce")) {
      localStorage.removeItem("MyProfileOnce");
    }
    if (localStorage.getItem("ChatMessageOnce")) {
      localStorage.removeItem("ChatMessageOnce");
    }
    setIsLoaded(true);
  });
  useEffect(() => {
    if (isLoaded) {
      axios
        .get(baseURL + "quiz/get-quiz-room-list/", {
          headers: {
            Authorization: localStorage.getItem("token")
              ? "Token " + localStorage.getItem("token")
              : null,
            "Content-Type": "application/json",
            accept: "application/json",
          },
        })
        .then((res) => {
          setDatas(res["data"]);
          console.log(res["data"]);
          setIsPageLoaded(true);
        })
        .catch((error) => {});
    }
  }, [isLoaded]);
  if (!isPageLoaded) {
    return <Loading />;
  }
  return (
    <div className={classes.root}>
      <PapperBlock
        title="?????? ???????????????"
        whiteBg
        icon="ion-ios-grid-outline"
        desc="
             ?????? ????????????????????? ????????? ???????????????."
      >
        <Grid
          container
          alignItems="stretch"
          justify="space-around"
          direction="row"
          spacing={3}
        >
          {Object.keys(datas).length === 0 && (
            <Typography
              component="h1"
              style={{
                fontFamily: "CookieRun-Regular",
                fontSize: "20px",
                marginTop: "20px",
                marginLeft: "70px",
              }}
            >
              ????????? ????????? ????????????
            </Typography>
          )}
          {datas != {} &&
            Object.entries(datas).map(([key, value]) => {
              return (
                <Grid item md={12}>
                  <QuizRoomCard
                    id={key}
                    owner={value.owner}
                    roomtitle={value.?????????}
                    aboutroom={value.?????????}
                    hash={value.thumbnail}
                    participating={value.?????????}
                    type="QuizViewRoomCard"
                    list
                  />
                </Grid>
              );
            })}
        </Grid>
      </PapperBlock>
    </div>
  );
}

export default SolveRoomList;
