import React, {useEffect} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import BorderedTable from '../../Table/ListeningBorderedTable';

function ListeningMenu(props) {
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
            <PapperBlock title="Listening Menu" whiteBg icon="ion-ios-grid-outline" desc="
            리스닝 메뉴 탭입니다. 빈칸 뚫기 연습과 비교를 통해서 듣기 실력을 향상시켜 보세요.">
                <div>
                    <BorderedTable />
                </div>
            </PapperBlock>
        </div>
    );
} 

export default ListeningMenu;