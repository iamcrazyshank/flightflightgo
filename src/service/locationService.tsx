import React from 'react';

type LocationCallback = () => void;

function useDispatch(callback: LocationCallback, delay: number): void {
  const cachedCallback = React.useRef<LocationCallback>();

  React.useEffect(() => {
    cachedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay !== 0) {
      const id = setInterval(() => cachedCallback?.current?.(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const LocationHooks = {
  useDispatch,
};