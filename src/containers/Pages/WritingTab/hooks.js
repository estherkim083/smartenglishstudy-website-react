import { useEffect, useState, useRef } from "react";
import { onSnapshot } from "firebase/firestore";
export function useFirestoreQuery(query) {
  const [data, setData] = useState({});

  const queryRef = useRef(query);

  useEffect(() => {
    const unsubscribe = onSnapshot(queryRef.current, (doc) => {
      console.log(doc.data().data_json);
      console.log("data" + doc.data());
      setData(doc.data().data_json);
    });
    return () => unsubscribe();
  }, [queryRef.current]);

  return data;
}
