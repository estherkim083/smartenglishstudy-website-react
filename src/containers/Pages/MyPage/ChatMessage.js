import React, {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PapperBlock from '../../../components/PapperBlock/PapperBlock';
import { getDate, getTime } from './dateTimeHelper';
import ChatRoom from '../../../components/Chat/ChatRoom';
import ContactList from '../../../components/Contact/ContactList';
import { List, Map, fromJS } from 'immutable';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import {db} from '../../../firebase';
import { collection } from "firebase/firestore";
import { query } from "firebase/firestore";
import { useFirestoreQuery } from './hooks';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "15px"
    },    
}));

function ChatMessage(props) {

    const classes = useStyles();
    const [message, setMessage] = useState('');
    const [chatList, setChatList] = useState(List([]));
    const [activeChat, setActiveChat] = useState(List([]));
    const [chatSelected, setChatSelected] = useState(0);
    const [showMobileDetail, setShowMobileDetail] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ keyword, setKeyword] =useState('');
    const [contactDatas, setContactDatas] = useState(List([]));
    const baseURL= process.env.REACT_APP_BASE_BACKEND_URL;
    
    const email= localStorage.getItem("email");
    const a = useFirestoreQuery(
        query(collection(db, email))
      );
    
    const buildMessage = (message, curData) => {
        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        const newData = Map({
            id,
            from: 'me',
            date: getDate(),
            time: getTime(),
            message,
            timestamp: new Date().getTime(),
        });
        return [newData, curData.push(newData)];
    };
    const getChatData =(chatSelected) => {
        console.log(chatList.get(chatSelected).get('chat'));
        return chatList.get(chatSelected).get('chat');
    };
    const sendMessage =(payload) => {
        console.log(payload);
        const message = payload;
        const [newData, newMessage] = buildMessage(message, getChatData(chatSelected));
        const x= a.set(chatSelected,a.get(chatSelected).set('chat', newMessage));
        setChatList(x);
        setActiveChat(newMessage);
        const messageJson= newData.toJS();
        axios
            .post(baseURL+"mypage/add-chats/" , {
                id: chatSelected,
                message_obj: messageJson
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
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })
            .then(function (res) {  
                console.log(res);
            });
    };
    const deleteMessage= () => {

    };
    const hideDetailMessage =() => {
        setShowMobileDetail(false);
    };
    const showChatAction = (payload) => {
        //console.log(payload.get('id'));
        const chatItem= a
          .find(obj => (
            obj.get('with') === payload.get('id')
          ));
        //console.log(chatItem);
        const index = a.indexOf(chatItem);
        const chatValue = chatItem.get('chat') !== [] ? chatItem.get('chat') : List([]);
        
        setChatSelected(index);
        setActiveChat(chatValue);
        setShowMobileDetail(true);
    };
    const searchAction =() => {

        //const keyword = e.target.value.toLowerCase();
        //setKeyword(keyword);
    };
      
    useEffect(() => {
        var author= localStorage.getItem("user_name");
        if(author === null) {
            window.location.href="/auth/email";
        }
        if(localStorage.getItem("MyProfileOnce")) {
            localStorage.removeItem("MyProfileOnce");
        }
        if(!localStorage.getItem("ChatMessageOnce")) {
            localStorage.setItem("ChatMessageOnce", true);
            window.location.reload();
        };
        setChatList(a);
        setIsLoaded(true);
    });

    useEffect(() => {
        if(isLoaded) {
            if(a.size != 0) {
                setActiveChat(a.get(0).get('chat'));
            }
            axios
            .get(baseURL+"mypage/get-chats/", {
                headers: {
                Authorization: localStorage.getItem('token')
                    ? 'Token ' + localStorage.getItem('token')
                    : null,
                'Content-Type': 'application/json',
                accept: 'application/json',
                },
            })
            .then(res => {
                console.log(res["data"]["contactData"]);
                const items = fromJS(res["data"]["contactData"]);
                setContactDatas(items);
            })
            .catch(error => {});
        }
    },[isLoaded]);
    return (
        <div className={classes.root}>
            <PapperBlock title="메세지 탭" whiteBg icon="ion-ios-grid-outline" desc="
            추가된 친구들과 메세지를 주고받을 수 있습니다. 새로 받은 contact 데이터를 위해 새로고침을 하세요.">      
            
                <Grid
                    container
                    alignItems="stretch"
                    justify="space-around"
                    direction="row"
                    spacing={3}
                    >
                     <Grid item xs={3}>
                        <ContactList
                            total={contactDatas.size}
                            itemSelected={chatSelected}
                            dataContact={contactDatas}
                            showDetail={(payload)=> showChatAction(payload)}
                            search={searchAction}
                            keyword={keyword}
                            />     
                    </Grid>
                    <Grid item xs={8}>                             
                        {contactDatas.size >0  && a.size >0 &&
                        <ChatRoom
                            showMobileDetail={showMobileDetail}
                            dataChat={a.get(chatSelected).get('chat')}
                            chatSelected={chatSelected}
                            dataContact={contactDatas}
                            sendMessage={(payload)=> sendMessage(payload)}
                            remove={() => deleteMessage}
                            hideDetail={() => hideDetailMessage}
                        /> } 
                    </Grid>
                </Grid>
            </PapperBlock>
        </div>
    );
} 

export default ChatMessage;