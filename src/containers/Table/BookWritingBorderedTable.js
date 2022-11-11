import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import styles from './tableStyle-jss';
import TablePagination from '@material-ui/core/TablePagination';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import progressStyles from '../../styles/Progress.scss';

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
function createData(id, name, joined_at, created_at, essaytitle) {
  // id += 1;
  return {
    id,
    name,
    joined_at,
    created_at,
    essaytitle
  };
}



function BookWritingBorderedTable(props) {
  const { classes, datas } = props;
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const baseURL= process.env.REACT_APP_BASE_BACKEND_URL;

  const getProgress = progressNum => {
    switch (progressNum) {
      case progressNum<=10: return progressStyles.bgError;
      case progressNum<=20: return progressStyles.bgWarning;
      case progressNum<=70: return progressStyles.bgDefault;
      case progressNum<=85: return progressStyles.bgInfo;
      case progressNum<=100: return progressStyles.bgSuccess;
      default: return progressStyles.bgDefault;
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false); 
  let { id } = useParams();

  const emptyRows = datas != null? rowsPerPage - Math.min(rowsPerPage, datas.length - page * rowsPerPage)
                                    : -1;

  const history = useHistory();
  const handleDelete= (id) => {
  };
  useEffect(() => {
    setIsLoaded(true);
  });
  
  useEffect(() => {
    if (isLoaded) {
        setIsPageLoaded(true);
    }   console.log(datas);
  }, [isLoaded]);

  const moveToSpecificPage= (n_id, n) => {
    
    history.push('/writing/book/'+id+'/'+n_id+'/'+n.email); ///writing/essay/:id/:userid
  };
  return (
    <div className={classes.rootTable}>
      <Table className={classNames(classes.table, classes.bordered, classes.hover)} > 
        <TableHead>
          <TableRow> 
            <TableCell width={130} className={classes.cellTitleStyle}>이름&nbsp;&nbsp;☘</TableCell>
            <TableCell width={150} align="right" className={classes.cellTitleStyle}>방참여날짜</TableCell>
            <TableCell width={150} align="right" className={classes.cellTitleStyle}>수정날짜</TableCell>
            <TableCell width={430} align="center" className={classes.cellTitleStyle}>에세이제목</TableCell>
            <TableCell width={150} align="right" className={classes.cellTitleStyle}>책진행정도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas != null && (rowsPerPage > 0
            ? Object.entries(datas).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : Object.entries(datas)
          ).map(([n_id, n]) => (
            <TableRow key={n_id}> 
              <TableCell padding="default" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n)}>{n.user_name}</TableCell>
              <TableCell align="right" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n)}>{n.participated_at}</TableCell>
              <TableCell align="right" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n)}>{n.modified_at}</TableCell>
              <TableCell align="center" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n)}>{n.topic}</TableCell>
              <TableCell align="center" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n)}>
                <LinearProgress variant="determinate" className={getProgress(parseInt(n.book_progress))} value={parseInt(n.book_progress)} /> {console.log(parseInt(n.book_progress))}
              </TableCell>
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
            {datas!= null && datas!= undefined && <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={Object.keys(datas).length}
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
            />}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

BookWritingBorderedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookWritingBorderedTable);
