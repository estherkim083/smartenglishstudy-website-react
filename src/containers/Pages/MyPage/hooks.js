import { useEffect, useState, useRef } from 'react';
import { onSnapshot } from "firebase/firestore";
import { List, Map, fromJS } from 'immutable';

export function useFirestoreQuery(query) {
  const [chatList, setChatList] = useState(List([]));

  // Store current query in ref
  const queryRef = useRef(query);

  // Compare current query with the previous one
  useEffect(() => {
    // Use Firestore built-in 'isEqual' method
    // to compare queries
    if (!queryRef?.curent?.isEqual(query)) {
      queryRef.current = query;
    }
  });

  // Re-run data listener only if query has changed
  useEffect(() => {
    if (!queryRef.current) {
      return null;
    }

    const unsubscribe = onSnapshot(queryRef.current, (querySnapshot) => {
        const datas_fire= [];
        querySnapshot.forEach((doc) => {
            datas_fire.push(doc.data());
        });
        var tmp= [];
        for(var i=0; i<datas_fire.length; i++) {
            console.log(i); //withid
            console.log(datas_fire[i]); // chat json

            var tmp2= {};
            tmp2['with']= i;
            tmp2["chat"] =[];
            Object.keys(datas_fire[i]).forEach(function(key) {
                tmp2['chat'].push(datas_fire[i][key]);
            });
            
            tmp2["chat"].sort(function(x, y){
                return x.timestamp - y.timestamp;
            })
            tmp.push(tmp2);
        }
        const itemChatData = fromJS(tmp);
        setChatList(itemChatData);
    });

    // Detach listener
    return unsubscribe;
  }, [queryRef]);

  return chatList;
}
