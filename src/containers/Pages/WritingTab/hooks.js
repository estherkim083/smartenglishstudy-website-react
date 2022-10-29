import { useEffect, useState, useRef } from 'react';
import { onSnapshot } from "firebase/firestore";
export function useFirestoreQuery(query) {
  const [data, setData] = useState({});

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

    const unsubscribe = onSnapshot(queryRef.current, (doc) => {
        console.log(doc.data().data_json);
        console.log("data" +doc.data());
        setData(doc.data().data_json);
    });
    console.log(data);
    // Detach listener
    return unsubscribe;
  }, [queryRef]);
  console.log(data);
  return data;
}
