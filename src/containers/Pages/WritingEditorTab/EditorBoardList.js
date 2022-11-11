import React, {useEffect , useState} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { makeStyles } from '@material-ui/core/styles';
import WritingEditorBorderedTable from '../../Table/WritingEditorBorderedTable';

const useStyles = makeStyles((theme) => ({
}));

function EditorBoardList(props) {

    const classes = useStyles();
    const [isLoaded, setIsLoaded] = useState(false);


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
        }
    }, [isLoaded]);
    return (
        <div>
            <PapperBlock title="첨삭자료실" whiteBg icon="ion-ios-grid-outline" desc="
            영어 글쓰기 첨삭자료실 탭입니다. 영어 글쓰기 자료를 첨삭받거나 첨삭해보세요. ">
                <WritingEditorBorderedTable/>
            </PapperBlock>
        </div>
    );
} 

export default EditorBoardList;