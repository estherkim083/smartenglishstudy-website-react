import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PapperBlock from "../../../components/PapperBlock/PapperBlock";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useWindowDimensions from "../../../useWindowDimensions";
import axios from "axios";
import { useParams } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Loading from "../../../components/Loading";

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
    width: "50%",
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

function SolveRoom(props) {
  const classes = useStyles();
  const [datas, setDatas] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps
  const { height, width } = useWindowDimensions();
  const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
  let { id } = useParams();
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
        .get(baseURL + "vocab/vocab-quiz-result/", {
          headers: {
            Authorization: localStorage.getItem("token")
              ? "Token " + localStorage.getItem("token")
              : null,
            "Content-Type": "application/json",
            accept: "application/json",
          },
        })
        .then((res) => {
          console.log(res["data"]);
          setDatas(res["data"]);
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
        title="어휘퀴즈 문제풀이방"
        whiteBg
        icon="ion-ios-grid-outline"
        desc="
            퀴즈 문제 풀이방에서 어휘 암기문제를 풀어보세요."
      >
        <Grid
          container
          alignItems="flex"
          justify="center"
          direction="column"
          spacing={3}
        >
          {datas != {} &&
            Object.entries(datas).map(([key, value], index) => {
              return (
                <Grid item md={12}>
                  <Typography
                    component="h1"
                    style={{
                      fontFamily: "CookieRun-Regular",
                      fontSize: "16px",
                      marginTop: "20px",
                    }}
                  >
                    {index + 1} 번.
                  </Typography>
                  {value["label"] == "type1" && (
                    <>
                      <Typography
                        component="h1"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        영어단어가 주어지면, 영어로 해석 풀이 적는 문제입니다.
                      </Typography>
                      <Typography
                        component="h1"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        {value["영단어"]}
                      </Typography>

                      {value["iscorrect"] == true && (
                        <>
                          <TextField
                            style={{
                              height: "35px",
                              width: "70%",
                              marginLeft: "10px",
                              marginTop: "20px",
                            }}
                            InputLabelProps={{
                              style: {
                                color: "#fff",
                                fontStyle: "bold",
                                fontFmaily: "CookieRun-Regular",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "CookieRun-Regular",
                              },
                            }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(119,221,119, 0.9)",
                              },
                            }}
                            value={value["학생답"]}
                          ></TextField>
                        </>
                      )}
                      {value["iscorrect"] == false && (
                        <>
                          <TextField
                            style={{
                              height: "35px",
                              width: "70%",
                              marginLeft: "10px",
                              marginTop: "20px",
                            }}
                            InputLabelProps={{
                              style: {
                                color: "#fff",
                                fontStyle: "bold",
                                fontFmaily: "CookieRun-Regular",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "CookieRun-Regular",
                              },
                            }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(255,105,97, 0.9)",
                              },
                            }}
                            value={value["학생답"]}
                          ></TextField>
                        </>
                      )}

                      <Typography
                        component="h6"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          color: "red",
                          fontSize: "12px",
                          marginTop: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: "10px",
                          }}
                        >
                          {value["답"].map((val, key) => {
                            return key == value["답"].length - 1 ? (
                              <div>{val} &nbsp;</div>
                            ) : (
                              <div>{val}, &nbsp;</div>
                            );
                          })}
                        </div>
                      </Typography>
                    </>
                  )}
                  {value["label"] == "type2" && (
                    <>
                      <Typography
                        component="h1"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        영어단어가 주어지면, 한글 의미를 적는 문제입니다.
                      </Typography>
                      <Typography
                        component="h1"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        {value["영단어"]}
                      </Typography>

                      {value["iscorrect"] == true && (
                        <>
                          <TextField
                            style={{
                              height: "35px",
                              width: "70%",
                              marginLeft: "10px",
                              marginTop: "20px",
                            }}
                            InputLabelProps={{
                              style: {
                                color: "#fff",
                                fontStyle: "bold",
                                fontFmaily: "CookieRun-Regular",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "CookieRun-Regular",
                              },
                            }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(119,221,119, 0.9)",
                              },
                            }}
                            value={value["학생답"]}
                          ></TextField>
                        </>
                      )}
                      {value["iscorrect"] == false && (
                        <>
                          <TextField
                            style={{
                              height: "35px",
                              width: "70%",
                              marginLeft: "10px",
                              marginTop: "20px",
                            }}
                            InputLabelProps={{
                              style: {
                                color: "#fff",
                                fontStyle: "bold",
                                fontFmaily: "CookieRun-Regular",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "CookieRun-Regular",
                              },
                            }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(255,105,97, 0.9)",
                              },
                            }}
                            value={value["학생답"]}
                          ></TextField>
                        </>
                      )}
                      <Typography
                        component="h6"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          color: "red",
                          fontSize: "12px",
                          marginTop: "20px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: "10px",
                          }}
                        >
                          {value["답"].map((val, key) => {
                            return key == value["답"].length - 1 ? (
                              <div>{val} &nbsp;</div>
                            ) : (
                              <div>{val}, &nbsp;</div>
                            );
                          })}
                        </div>
                      </Typography>
                    </>
                  )}
                  {value["label"] == "type3" && (
                    <>
                      <Typography
                        component="h1"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        한글 의미 또는 영어 해석이 주어지면, 영어단어를 적는
                        문제입니다.
                      </Typography>
                      <Typography
                        component="h1"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        {value["한글의미"]}
                      </Typography>
                      <Typography
                        component="h1"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        {value["영어의미글"]}
                      </Typography>
                      {value["iscorrect"] == true && (
                        <>
                          <TextField
                            style={{
                              height: "35px",
                              width: "70%",
                              marginLeft: "10px",
                              marginTop: "20px",
                            }}
                            InputLabelProps={{
                              style: {
                                color: "#fff",
                                fontStyle: "bold",
                                fontFmaily: "CookieRun-Regular",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "CookieRun-Regular",
                              },
                            }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(119,221,119, 0.9)",
                              },
                            }}
                            value={value["학생답"]}
                          ></TextField>
                        </>
                      )}
                      {value["iscorrect"] == false && (
                        <>
                          <TextField
                            style={{
                              height: "35px",
                              width: "70%",
                              marginLeft: "10px",
                              marginTop: "20px",
                            }}
                            InputLabelProps={{
                              style: {
                                color: "#fff",
                                fontStyle: "bold",
                                fontFmaily: "CookieRun-Regular",
                              },
                            }}
                            inputProps={{
                              style: {
                                fontFamily: "CookieRun-Regular",
                              },
                            }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(255,105,97, 0.9)",
                              },
                            }}
                            value={value["학생답"]}
                          ></TextField>
                        </>
                      )}
                      <Typography
                        component="h1"
                        style={{
                          fontFamily: "CookieRun-Regular",
                          color: "red",
                          fontSize: "16px",
                          marginTop: "20px",
                        }}
                      >
                        {value["답"]}
                      </Typography>
                    </>
                  )}
                </Grid>
              );
            })}
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
              결과없음
            </Typography>
          )}
        </Grid>
      </PapperBlock>
    </div>
  );
}

export default SolveRoom;
