
import React, {useEffect, useState} from 'react';
import ReadingEditForm from '../../Forms/ReadingEditForm';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '200px'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    
}));

function ReadingCreate(props) {

    const classes = useStyles();
    let { id } = useParams();
    const [ loadMyInboxEdit, setLoadMyInboxEdit ]= useState(null);

    useEffect(()=> {
        const strId= id.toString();
        if(strId.includes("888888888")) {
            setLoadMyInboxEdit(true);
        }else{
            setLoadMyInboxEdit(false);
        }
    });
    return (
    
        <div className={classes.root}>
            {loadMyInboxEdit!= null && loadMyInboxEdit? 
                <PapperBlock title="MyInbox 자료 수정업로드" icon="ion-ios-filing-outline" desc="MyInbox 지료들을 업로드하여 영어자료들을 정리해보세요.">
                    <ReadingEditForm/>
                </PapperBlock>
            : 
                <PapperBlock title="리딩 자료실 업로드" icon="ion-ios-filing-outline" desc="영어 리딩 지료들을 업로드하여 영어독해를 연습해보세요.">
                    <ReadingEditForm/>
                </PapperBlock>
            }
        </div>
        
    );
}

export default ReadingCreate;