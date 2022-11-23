import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import styles from './tableStyle-jss';
import Loading from '../../components/Loading';

// let id = 0;
function createData(typeNumber, type, number1, number2, number3, number4, number5, number6, number7, number8, number9, number10) {
  // id += 1;
  return {
    typeNumber,
    type,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
    number10,
  };
}


function QuizMyScoreViewTable(props) {

    const { classes } = props;
    const [datas, setDatas] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    let { id } = useParams();
    const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
    const [rowsPerPage, setRowsPerPage] = React.useState(-1);
    const [page, setPage] = React.useState(0);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, datas.length - page * rowsPerPage);
  

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
                .get(baseURL+"quiz/quiz-score-view/"+id, {
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    }
                })
                .then(res => {
                    setDatas(res["data"]);
                    console.log(res["data"]);
                    const typeAndNumDatas= res["data"]["유형_문제개수"];
                    const checklist= res["data"]["체크리스트"];
                    let tmp_datas= [];
                    if(typeAndNumDatas.length== checklist.length) {
                        for(var i=0;i<typeAndNumDatas.length;i++) {
                            var type= typeAndNumDatas[i].type;
                            var typeNumber= i+1;
                            var x= checklist[i];
                            var x_length= Object.keys(x).length;
                            var x_keys= Object.keys(x);
                            var checkVal = Array.from({length: 10}).map(el => "");
                            for(var j=0; j<10;j++) {
                                if(j<x_length) {
                                    checkVal[j]= x[x_keys[j]];
                                }else{
                                    checkVal[j]= '';
                                }
                            }
                            var tmp= createData(typeNumber, type, checkVal[0], checkVal[1], checkVal[2], checkVal[3], checkVal[4], checkVal[5], checkVal[6], checkVal[7], checkVal[8], checkVal[9]);
                            tmp_datas[i]= tmp;
                        }
                        setDatas(tmp_datas);
                        console.log(tmp_datas);
                    }
                    setIsPageLoaded(true);
                })
                .catch(error => {});
            
        }
    },[isLoaded]);
    if(!isPageLoaded) {
        return <Loading/>;
    }
    return (
        <div className={classes.rootTable}>
        <Table className={classNames(classes.table, classes.bordered, classes.hover)} > 
            <TableHead>
            <TableRow> 
                <TableCell width={40} align='center' className={classes.cellTitleStyle}>유형번호</TableCell>
                <TableCell width={20} align="right" className={classes.cellTitleStyle}>유형</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>1</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>2</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>3</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>4</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>5</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>6</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>7</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>8</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>9</TableCell>
                <TableCell width={10} align="right" className={classes.cellTitleStyle}>10</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {datas!= undefined && datas.length > 0 && (rowsPerPage > 0
                ? datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : datas
            ).map((n) => (
                <TableRow key={n.id}> 
                <TableCell padding="default" align='center' className={classes.cellRegularStyle}>{n.typeNumber}번</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.type}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number1}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number2}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number3}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number4}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number5}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number6}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number7}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number8}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number9}</TableCell>
                <TableCell align="right" className={classes.cellRegularStyle}>{n.number10}</TableCell>
                </TableRow>
            ))}
            {emptyRows > 0 && (
                <TableRow style={{ height: 0 * emptyRows }}>
                <TableCell colSpan={6} className={classes.cellRegularStyle}>. . . . .</TableCell>
                </TableRow>
            )}
            </TableBody>
            
        </Table>
        </div>
    );
} 

QuizMyScoreViewTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(QuizMyScoreViewTable);