import { useEffect, useState } from 'react';

export const useElevationOnScroll = (threshhold: number = 20) => {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const listener = () => {
      const y = window.scrollY;
      if (!elevated && y > threshhold) {
        setElevated(true);
      } else {
        setElevated(false);
      }
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return elevated;
};
