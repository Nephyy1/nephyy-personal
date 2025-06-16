import { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = document.documentElement.scrollTop;
    setScroll((scrollPosition / scrollTotal) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
