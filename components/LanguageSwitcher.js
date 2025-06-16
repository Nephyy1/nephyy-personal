import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const handleLocaleChange = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="flex space-x-2">
      <button 
        onClick={() => handleLocaleChange('id')} 
        className={`px-3 py-1 text-sm rounded-full ${router.locale === 'id' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        ID
      </button>
      <button 
        onClick={() => handleLocaleChange('en')}
        className={`px-3 py-1 text-sm rounded-full ${router.locale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
