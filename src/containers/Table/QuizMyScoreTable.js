import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import styles from './tableStyle-jss';
// import FloatingButtons from '../FloatingButton/ListeningBoardFloatingButtons';
import TablePagination from '@material-ui/core/TablePagination';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


// let id = 0;
function createData(id, title, student, score) {
  // id += 1;
  return {
    id,
    title,
    student,
    score,
  };
}



function QuizMyScoreTable(props) {
  const { classes, type } = props;
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps 
  const [datas, setDatas] = useState([]);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, datas.length - page * rowsPerPage);

  const baseURL = process.env.REACT_APP_BASE_BACKEND_URL;
  
  const history = useHistory();

  const moveToSpecificListeningPage =(n) => {
    if(type== "myscore") {
    
        history.push('/smartenglishstudy-website-react/quiz/my-score/'+n.id);

    }else {
        
        history.push('/smartenglishstudy-website-react/quiz/student-score/'+n.id);
    }
    console.log(n.id);
  }

  useEffect(() => {
    setIsLoaded(true);
  });
  
  useEffect(() => {
    if (isLoaded) {
        setIsPageLoaded(true);
        var urlPath= '';
        if(type=="myscore") {
            urlPath='quiz-score-list/';
        }else{
            urlPath='quiz-student-score-list/';
        }
        axios
          .get(baseURL+"quiz/"+urlPath, {
            headers: {
              Authorization: localStorage.getItem('token')
                ? 'Token ' + localStorage.getItem('token')
                : null,
              'Content-Type': 'application/json',
              accept: 'application/json',
            }
          })
          .then(res => {
            var count = Object.keys(res['data']).length;
            var tmp_key_array= Object.keys(res['data']);
            let tmp_datas= [];
            for(var i = 0; i < count; i++) {
              var res_data= res['data'][tmp_key_array[i]];
              console.log(res_data);
              var tmp=createData(tmp_key_array[i], res_data['quiz_room_title'], res_data['시험본학생'], res_data['성적']);
              tmp_datas[i]= tmp;
            }
            setDatas(tmp_datas);
            console.log(tmp_datas);
          })
          .catch(error => {});
    }
  }, [isLoaded]);

  return (
    <div className={classes.rootTable} style={{marginTop: '-10px'}}>
      <Table className={classNames(classes.table, classes.bordered, classes.hover)} > 
        <TableHead>
          <TableRow> 
            <TableCell width={500} className={classes.cellTitleStyle}>퀴즈방제목</TableCell>
            <TableCell width={300} align="center" className={classes.cellTitleStyle}>시험본유저</TableCell>
            <TableCell width={500} align="center" className={classes.cellTitleStyle}>최근 총 성적</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : datas
          ).map((n) => (
            <TableRow key={n.id}> 
              <TableCell padding="default" className={classes.cellRegularStyle} onClick={() => moveToSpecificListeningPage(n)}>{n.title}</TableCell>
              <TableCell align="center" className={classes.cellRegularStyle} onClick={() => moveToSpecificListeningPage(n)}>{n.student}</TableCell>
              <TableCell align="center" className={classes.cellRegularStyle} onClick={() => moveToSpecificListeningPage(n)}>{n.score}%</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 0 * emptyRows }}>
              <TableCell colSpan={6} className={classes.cellRegularStyle}>. . . . .</TableCell>
            </TableRow>
          )}
        </TableBody>
        
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={datas.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': '페이지당 몇개' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              labelRowsPerPage={'페이지당 몇개'}
              labelDisplayedRows={({ from, to, count }) =>
                    `전체 ${count !== -1 ? count : `MORE THAN ${to}`}개, ${from}-${to}`}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

QuizMyScoreTable.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles)(QuizMyScoreTable);
