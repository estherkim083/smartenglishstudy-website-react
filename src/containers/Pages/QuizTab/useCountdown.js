import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

const useCountdown = (targetDate) => {
  console.log(targetDate);
  const countDownDate = new Date(targetDate).getTime();
  let { id } = useParams();
  const history = useHistory();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  useEffect(()=> {
    window.addEventListener("unload", function (e) {
      console.log('going away', e)
      // history.push('/quiz/take-quiz/'+id);
      setInterval(()=> {
        window.location.href= '/quiz/take-quiz'+id;
      }, 5000);
    })
  })

  useEffect(() => {
    if(countDownDate - new Date().getTime()<=0) {
      setCountDown(null);
    }
    else { 
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };