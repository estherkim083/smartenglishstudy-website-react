import React, {useEffect , useState} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import BorderedTable from '../../Table/ReadingBorderedTable';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import useWindowDimensions from '../../../useWindowDimensions';

function ReadingMenu(props) {
    const { height, width } = useWindowDimensions();
    const handleReadingFab= () => {
        window.location.href='/reading/create/';
    };
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
        <div>
            <PapperBlock title="Reading Menu" whiteBg icon="ion-ios-grid-outline" desc="
            리딩 메뉴 탭입니다. 영어 리딩 자료 업로드 및 자료 정리, 독해공부를 해봅시다.">
                <div>
                    <BorderedTable />
                </div>
            </PapperBlock>
            <Fab color="secondary" aria-label="add" style={{position: 'relative', marginLeft: `calc(193% - ${width}px)`, bottom: `calc(190%-${height}px))`}} onClick={handleReadingFab}>
                <AddIcon />
            </Fab>
        </div>
    );
} 

export default ReadingMenu;