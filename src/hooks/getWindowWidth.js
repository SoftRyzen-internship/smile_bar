import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
    }
    onResize(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return width;
};
