import React, {useEffect} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import BorderedTable from '../../Table/ListeningBorderedTable';
import { useHistory } from "react-router-dom";


function ListeningMenu(props) {
    let history= useHistory();
    useEffect(() => {
        var author= localStorage.getItem("user_name");
        if(author === null) {
            history.push("/smartenglishstudy-website-react/auth/email");
            //window.location.href="/smartenglishstudy-website-react/auth/email";
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