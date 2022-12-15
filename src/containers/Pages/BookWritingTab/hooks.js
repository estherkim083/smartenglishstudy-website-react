import { useEffect, useState, useRef } from "react";
import { onSnapshot } from "firebase/firestore";
export function useFirestoreQuery(query) {
  const [data, setData] = useState({});

  // Store current query in ref
  const queryRef = useRef(query);

  // Re-run data listener only if query has changed
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
