export const GlobalDebug = (function () {
    return function () {
        // supress the default console functionality
        console = {};
        console.log = function () {};
        // supress all type of consoles
        
        console.info = function () {};
        console.warn = function () {};
        console.error = function () {};
    };
  })();