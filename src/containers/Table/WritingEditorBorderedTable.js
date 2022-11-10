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
import axios from 'axios';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

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


function WritingEditorBorderedTable(props) {
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
    //const [datas, setDatas] = useState([]);
    const [datas, setDatas] = useState({});
    const [bookDatas, setBookDatas] = useState({});
    const emptyRows = datas != null && bookDatas != null? rowsPerPage - Math.min(rowsPerPage, datas.length + bookDatas.length - page * rowsPerPage) : -1;
                                    
    const history = useHistory();
    
    useEffect(() => {
        setIsLoaded(true);
    });
    
    useEffect(() => {
        if (isLoaded) {
            axios
                .get(baseURL+"writing/get-edit-view/", { //첨삭가능한 친구 목록 불러오기.
                    headers: {
                    Authorization: localStorage.getItem('token')
                        ? 'Token ' + localStorage.getItem('token')
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json',
                    }
                })
                .then(res => {
                    setDatas(res["data"]["essay_editor_data"]);
                    setBookDatas(res["data"]["book_editor_data"]);
                    console.log(res["data"]);
                    
                })
                .catch(error => {});
        }   

    }, [isLoaded]);

    const moveToSpecificPage= (n_id, n, label) => {
      axios
        .get(baseURL+`writing/check-editor-permission/${label}/`+n_id, { //첨삭가능한 친구 목록 불러오기.
            headers: {
            Authorization: localStorage.getItem('token')
                ? 'Token ' + localStorage.getItem('token')
                : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
            }
        })
        .then(res => {
            console.log(res["data"]["is_editor"])
            if(res["data"]["is_editor"]== true) {
              window.location.href= `/smartenglishstudy-website-react/writing/editorpage/${label}/`+n_id;
            }
            else {
              window.location.href= `/smartenglishstudy-website-react/writing/editorpageonlyview/${label}/`+n_id;
            }
        })
    };
    const handleEditClicked= (n_id, label) => {
      
      axios
        .get(baseURL+`writing/check-editor-permission/${label}/`+n_id, { //첨삭가능한 친구 목록 불러오기.
            headers: {
            Authorization: localStorage.getItem('token')
                ? 'Token ' + localStorage.getItem('token')
                : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
            }
        })
        .then(res => {
            console.log(res["data"]["is_editor"])
            if(res["data"]["is_editor"]== true) {              
              window.location.href= `/smartenglishstudy-website-react/writing/editorpage/${label}/`+n_id;
            }
        })
        .catch(error => {});
    };
    const handleDelete= (n_id, label) => {
        
        axios
            .post(baseURL+`writing/delete-editor-data/${label}/`+n_id , {},
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
                window.location.href= '/smartenglishstudy-website-react/writing/editor';
            });
    }
    return (
        <div className={classes.rootTable}>
        <Table className={classNames(classes.table, classes.bordered, classes.hover)} > 
            <TableHead>
            <TableRow> 
                <TableCell width={130} className={classes.cellTitleStyle}>첨삭자 이름&nbsp;&nbsp;☘</TableCell>
                <TableCell width={130} className={classes.cellTitleStyle}>분류</TableCell>
                <TableCell width={150} align="right" className={classes.cellTitleStyle}>수정날짜</TableCell>
                <TableCell width={430} align="center" className={classes.cellTitleStyle}>에세이제목</TableCell>
                <TableCell width={100} align="right" className={classes.cellTitleStyle}>Edit</TableCell>
                <TableCell width={100} align="right" className={classes.cellTitleStyle}>Delete</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {datas != null && (rowsPerPage > 0
                ? Object.entries(datas).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : Object.entries(datas)
            ).map(([n_id, n]) => (
                <>{console.log(n.editor_name)}
                <TableRow key={n_id}> 
                    <TableCell padding="default" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n, "essay")}>{n.editor_name}</TableCell>
                    <TableCell padding="default" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n,"essay")}>{n.label}</TableCell>
                    <TableCell align="right" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n,"essay")}>{n.modified_at}</TableCell>
                    <TableCell align="center" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n,"essay")}>{n.essay_topic}</TableCell>
                    <TableCell align="right" className={classes.cellRegularStyle}>
                        <IconButton onClick={()=> handleEditClicked(n_id, "essay")} className={classes.link}>
                            <EditIcon/>
                        </IconButton>
                    </TableCell>
                    <TableCell align="right" className={classes.cellRegularStyle}>
                        <IconButton onClick={()=>handleDelete(n_id, "essay")} className={classes.link}>
                            <DeleteForeverIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
                </>
            ))}            
            {bookDatas != null && (rowsPerPage > 0
                ? Object.entries(bookDatas).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : Object.entries(bookDatas)
            ).map(([n_id, n]) => (
                <>{console.log(n.editor_name)}
                <TableRow key={n_id}> 
                    <TableCell padding="default" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n, "book")}>{n.editor_name}</TableCell>
                    <TableCell padding="default" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n, "book")}>{n.label}</TableCell>
                    <TableCell align="right" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n, "book")}>{n.modified_at}</TableCell>
                    <TableCell align="center" className={classes.cellRegularStyle} onClick={() => moveToSpecificPage(n_id, n, "book")}>{n.book_writing_topic}</TableCell>
                    <TableCell align="right" className={classes.cellRegularStyle}>
                        <IconButton onClick={()=> handleEditClicked(n_id, "book")} className={classes.link}>
                            <EditIcon/>
                        </IconButton>
                    </TableCell>
                    <TableCell align="right" className={classes.cellRegularStyle}>
                        <IconButton onClick={()=>handleDelete(n_id, "book")} className={classes.link}>
                            <DeleteForeverIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
                </>
            ))}
            {emptyRows > 0 && (
                <TableRow style={{ height: 0 * emptyRows }}>
                <TableCell colSpan={6} className={classes.cellRegularStyle}>. . . . .</TableCell>
                </TableRow>
            )}
            </TableBody>
            
            <TableFooter>
            <TableRow>
                {datas!= null && datas!= undefined &&bookDatas!= null && bookDatas!= undefined && <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={Object.keys(datas).length + Object.keys(bookDatas).length}
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

WritingEditorBorderedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WritingEditorBorderedTable);
