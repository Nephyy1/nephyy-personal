import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const languages = [
  { 
    locale: 'id', 
    name: 'Bahasa Indonesia', 
    flag: '/flags/id.png' 
  },
  { 
    locale: 'en', 
    name: 'English', 
    flag: '/flags/en.png' 
  },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);

  const handleLocaleChange = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [switcherRef]);

  const currentLanguage = languages.find(lang => lang.locale === router.locale);

  return (
    <div className="relative" ref={switcherRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
        aria-label="Change language"
      >
        {currentLanguage ? (
          <Image 
            src={currentLanguage.flag} 
            alt={currentLanguage.name}
            width={24}
            height={24}
            className="rounded-full" 
          />
        ) : (
          <i className="uil uil-globe text-xl text-gray-700 dark:text-gray-300"></i>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg z-50 border border-gray-200 dark:border-slate-700">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.locale}>
                <button
                  onClick={() => handleLocaleChange(lang.locale)}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 ${router.locale === lang.locale ? 'font-bold' : ''}`}
                >
                  <Image 
                    src={lang.flag} 
                    alt={lang.name}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span>{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
