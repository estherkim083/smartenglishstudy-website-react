import React, {useEffect , useState, Fragment} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EssayWritingCreateEditForm from '../../Forms/EssayWritingCreateEditForm';
const useStyles = makeStyles((theme) => ({
    
    dropItem: {
        borderColor: theme.palette.divider,
        background: theme.palette.background.default,
        borderRadius: theme.rounded.medium,
        color: theme.palette.text.disabled,
        textAlign: 'center'
    
      },
    uploadIconSize: {
      alignItems: 'center',
      '& svg': {
        width: 72,
        height: 72,
        fill: theme.palette.secondary.main,
      }
    },
}));

function EssayRoomCreate(props) {

    const classes = useStyles();

    useEffect(() => {
        var author= localStorage.getItem("user_name");
        if(author === null) {
            window.location.href="/smartenglishstudy-website-react/auth/email";
        }
        if(localStorage.getItem("MyProfileOnce")) {
            localStorage.removeItem("MyProfileOnce");
        }
        if(localStorage.getItem("ChatMessageOnce")) {
          localStorage.removeItem("ChatMessageOnce");
        } 
    });
    return (
        <div>
            <PapperBlock title="EssayWriting Menu" whiteBg icon="ion-ios-grid-outline" desc="
            영어에세이 글쓰기 방 생성 화면입니다. 영어 에세이 글쓰기 방을 생성해보세요. ">
                <Fragment>
                    <Grid
                        container
                        alignItems="stretch"
                        justify="space-around"
                        direction="row"
                        spacing={3}
                    >
                        <Grid item xs={12}>
                            <EssayWritingCreateEditForm classes= {classes}/>
                        </Grid>
                    </Grid>
                </Fragment>
            </PapperBlock>
        </div>
    );
} 

export default EssayRoomCreate;