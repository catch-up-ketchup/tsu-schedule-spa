import { useEffect, useRef } from 'react';


const noop = () => {};

const useInterval = (callback, delay, immediate = false, condition = true) => {

  const savedCallback = useRef(noop);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (immediate && condition) {
      savedCallback.current();
    }
  }, [immediate, condition]);

  useEffect(() => {
    if (condition) {
      const tick = () => savedCallback.current();
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [condition, delay]);
}

export default useInterval;