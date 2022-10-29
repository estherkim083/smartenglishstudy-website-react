import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import Grid from '@material-ui/core/Grid';
import coverimg from "../../../images/profiles/nature.jpg";
import MyInboxTable from '../../Table/MyInboxTable';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "15px"
    },    
    gridList: {
        width: 720,
        height: 500,
    },
    divider: {
        color: 'black'
    }
}));

function MyInbox(props) {

    const classes = useStyles();
    
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
    });
    return (
        <div className={classes.root}>
            <PapperBlock title="MyInbox" whiteBg icon="ion-ios-grid-outline" desc="
            MyInbox에 있는 자료들을 조회할 수 있습니다.">
                
                <Grid
                    container
                    alignItems="stretch"
                    justify="space-around"
                    direction="row"
                    spacing={3}
                    >
                    <Grid item xs={12}>
                        <MyInboxTable/>
                    </Grid>
                </Grid>
            </PapperBlock>
        </div>
    );
} 

export default MyInbox;