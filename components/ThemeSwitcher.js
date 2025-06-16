import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <i className="uil uil-moon text-xl text-gray-700"></i>
      ) : (
        <i className="uil uil-sun text-xl text-yellow-400"></i>
      )}
    </button>
  );
};

export default ThemeSwitcher;
