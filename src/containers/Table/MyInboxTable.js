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
import Link from '@material-ui/core/Link';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import TablePagination from '@material-ui/core/TablePagination';
import axios from 'axios';

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
function createData(id, title, author, created_at, modified_at) {
  // id += 1;
  return {
    id,
    title,
    author,
    created_at,
    modified_at
  };
}



function MyInboxTable(props) {
  const { classes } = props;
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const baseURL= process.env.REACT_APP_BASE_BACKEND_URL;

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

  const handleDelete= (id) => {
    axios
        .post(baseURL+"mypage/inbox-delete/" , {
          key: id
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
        })
        .then(function (res) { 
          window.location.href="/my-inbox";
        });
  };
  useEffect(() => {
    setIsLoaded(true);
  });
  
  useEffect(() => {
    if (isLoaded) {
        setIsPageLoaded(true);
        axios
            .get(baseURL+"mypage/inbox-data/", {
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
                var ids= Object.keys(res['data']);
                let tmp= [];
                for(var i = 0; i < count; i++) {
                    var res_data= res['data'][ids[i]];
                    tmp[i]=createData(ids[i], res_data['제목'], res_data['글쓴이'], res_data['생성날짜'], res_data['수정날짜']);
                }
                setDatas(tmp);
            })
            .catch(error => {});
    }
  }, [isLoaded]);

  return (
    <div className={classes.rootTable}>
      <Table className={classNames(classes.table, classes.bordered, classes.hover)} > 
        <TableHead>
          <TableRow> 
            <TableCell width={340} className={classes.cellTitleStyle}>제목</TableCell>
            <TableCell align="right" className={classes.cellTitleStyle}>글쓴이</TableCell>
            <TableCell align="right" className={classes.cellTitleStyle}>만든 날짜</TableCell>
            <TableCell align="right" className={classes.cellTitleStyle}>수정 날짜</TableCell>
            <TableCell align="right" className={classes.cellTitleStyle}>Edit</TableCell>
            <TableCell align="right" className={classes.cellTitleStyle}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : datas
          ).map((n) => (
            <TableRow key={n.id}> 
              <TableCell padding="default" className={classes.cellRegularStyle}>{n.title}</TableCell>
              <TableCell align="right" className={classes.cellRegularStyle}>{n.author}</TableCell>
              <TableCell align="right" className={classes.cellRegularStyle}>{n.created_at}</TableCell>
              <TableCell align="right" className={classes.cellRegularStyle}>{n.modified_at}</TableCell>
              <TableCell align="right" className={classes.cellRegularStyle}>
                  <Link
                    color="textPrimary"
                    className={classes.link}
                    href={'/reading/create/' + 888888888 + n.id}
                  >
                    <EditIcon></EditIcon>
                  </Link>
              </TableCell>
              <TableCell align="right" className={classes.cellRegularStyle}>
                  <div
                        color="textPrimary" 
                        onClick= {() => handleDelete(n.id)}
                      >
                    <DeleteForeverIcon></DeleteForeverIcon>
                  </div>  
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

MyInboxTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyInboxTable);
