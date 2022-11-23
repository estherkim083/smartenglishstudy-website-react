import React, {useEffect} from 'react';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import BorderedTable from '../../Table/ListeningBorderedTable';
import { useHistory } from "react-router-dom";
import useWindowDimensions from '../../../useWindowDimensions';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


function ListeningMenu(props) {
    let history= useHistory();
    const { height, width } = useWindowDimensions();
    useEffect(() => {
        var author= localStorage.getItem("user_name");
        if(author === null) {
            history.push("/auth/email");
            //window.location.href="/smartenglishstudy-website-react/auth/email";
        }
        if(localStorage.getItem("MyProfileOnce")) {
            localStorage.removeItem("MyProfileOnce");
        }
        if(localStorage.getItem("ChatMessageOnce")) {
          localStorage.removeItem("ChatMessageOnce");
        } 
    });
    const handleListeningBtnOnClick= () => {
      window.location.href='/listening/listening-create-scripts/';
    };
    return (
        <div>
            <PapperBlock title="Listening Menu" whiteBg icon="ion-ios-grid-outline" desc="
            리스닝 메뉴 탭입니다. 빈칸 뚫기 연습과 비교를 통해서 듣기 실력을 향상시켜 보세요.">
                <div>
                    <BorderedTable />
                </div>
            </PapperBlock>
            <Fab color="secondary" aria-label="add" style={{position: 'relative', marginLeft: `calc(193% - ${width}px)`, bottom: `calc(190%-${height}px))`}} onClick={handleListeningBtnOnClick}>
                <AddIcon />
            </Fab>
        </div>
    );
} 

export default ListeningMenu;