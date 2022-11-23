import React, {useCallback, useEffect} from 'react';
import {Redirect, Route, useParams} from 'react-router-dom';


// 퀴즈 문제 풀이방에서 카운트 다운할때 새로고침 할 경우, 다시 카운트 다운 되지 못하도록, 
// 다른 경로로 이동하기 위해서 만든 코드.

const RefreshRoute = ({
  component: Component,
  redirectionPath,
  ...rest
}) => {
  redirectionPath = redirectionPath ?? '/';
  const perf = performance.getEntriesByType('navigation')[0].toJSON();
  const reloadType = perf.type !== 'reload';

  const handler = useCallback((e) => {
    e.preventDefault();
    e.returnValue = '';
    return true;
  }, []);

  useEffect(() => {
    window.onbeforeunload = handler;

    return () => {
      window.onbeforeunload = handler;
    };
  });
  return (
    <>
      {reloadType ? (
        <Route component={Component} {...rest} />
      ) : (
        <Redirect to={redirectionPath} />
      )}
    </>
  );
};
export default RefreshRoute;