import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import ScrollProgressBar from "../components/ScrollProgressBar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation('common');

  const portfolioItems = t('portfolio.items', { returnObjects: true });
  const portfolioData = Array.isArray(portfolioItems) ? portfolioItems : [];

  const certificateItems = t('certificate.items', { returnObjects: true });
  const certificateData = Array.isArray(certificateItems) ? certificateItems : [];

  const timelineItems = t('timeline.items', { returnObjects: true });
  const timelineData = Array.isArray(timelineItems) ? timelineItems : [];

  const tagColorMap = {
    Web: "bg-blue-200 text-blue-800 dark:bg-gray-800 dark:text-gray-300",
    Design: "bg-green-200 text-green-800 dark:bg-gray-800 dark:text-gray-300",
    Bot: "bg-red-200 text-red-800 dark:bg-gray-800 dark:text-gray-300",
    API: "bg-indigo-200 text-indigo-800 dark:bg-gray-800 dark:text-gray-300",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('/nephyy2.gif');
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.AOS) {
        const aosScript = document.createElement("script");
        aosScript.src = "https://unpkg.com/aos@next/dist/aos.js";
        aosScript.onload = () => {
          window.AOS.init({ duration: 600, once: true });
        };
        document.body.appendChild(aosScript);
      } else {
        window.AOS.init({ duration: 600, once: true });
      }
    }
  }, []);

  const handleMusicToggle = () => {
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };
  
  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleProfileImageSwap = () => {
    setProfileImage(prevImg => prevImg === '/nephyy2.gif' ? '/qr-code.png' : '/nephyy2.gif');
  };

  const handleProfileImageClick = () => {
    if (profileImage === '/qr-code.png') {
      setIsQrModalOpen(true);
    }
  };

  const modalButtonClasses = "w-full px-5 py-2.5 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center";

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nephyy - Personal Page</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#111827" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <meta name="description" content="Nephyy Personal Page Website" />
        <meta name="keywords" content="personal, portfolio, website, nephyy, nephyylia, nokos, noktel, nephi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nephyy.tech/" />
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta property="og:image" content="https://nephyy.tech/favicon.ico" />
        <meta name="twitter:image" content="https://nephyy.tech/favicon.ico" />
        <style>{`
          html { scroll-behavior: smooth; overflow-x: hidden; }
          body { font-family: 'Montserrat', sans-serif; }
          .portfolio-card { perspective: 1000px; transition: transform 0.5s, box-shadow 0.5s; cursor: pointer; }
          .portfolio-card:hover { transform: scale(1.05) rotateY(6deg); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
          .dark .portfolio-card:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.4); }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fadeOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-10px); } }
          .animate-in { animation: fadeIn 0.3s ease-out forwards; }
          .animate-out { animation: fadeOut 0.3s ease-out forwards; }
          .progress-fill { width: 0; animation: fillBar 2s forwards; }
          @keyframes fillBar { from { width: 0; } to { width: var(--target-width); } }
          .btn-interactive { transition: transform 0.3s, box-shadow 0.3s; }
          .btn-interactive:hover { transform: scale(1.05); box-shadow: 0 8px 16px rgba(0,0,0,0.2); }
          .input-interactive { transition: border-color 0.3s; }
          .input-interactive:focus { border-color: #34D399; }
          @keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
          .animate-slide { animation: fadeIn 0.5s ease-out, slide 3s linear infinite; }
          .modal-content { animation: fadeIn 0.3s ease-out; }
          .qr-code-image { transition: transform 0.3s ease-in-out; }
          .qr-code-image:hover { transform: scale(1.05); }
        `}</style>
      </Head>

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:bg-gray-950 text-gray-900 dark:text-gray-300">
        <ScrollProgressBar />
        <audio id="fav-music" src="/music.mp3" loop ref={audioRef}></audio>
        <nav className="fixed w-full z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-sm dark:border-b dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-2">
              <div className="text-xl font-bold text-gray-900 dark:text-white">Nephyy <i className="uil uil-check-circle text-blue-500"></i></div>
              <div className="hidden md:flex items-center space-x-1">
                <a href="#home" className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">{t('nav.home')}</a>
                <a href="#about" className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">{t('nav.about')}</a>
                <a href="#portfolio" className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">{t('nav.portfolio')}</a>
                <a href="#certificate" className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">{t('nav.certificate')}</a>
                <a href="#skills" className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">{t('nav.skill')}</a>
                <a href="#contact" className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">{t('nav.contact')}</a>
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
              <div className="md:hidden flex items-center">
                <LanguageSwitcher />
                <ThemeSwitcher />
                <button id="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl focus:outline-none w-10 h-10 flex items-center justify-center" aria-label="Toggle Menu">
                  {isMenuOpen ? <i className="uil uil-times"></i> : <i className="uil uil-bars"></i>}
                </button>
              </div>
            </div>
            {isMenuOpen && (
              <div id="mobile-menu" className="md:hidden animate-in pb-2">
                <div className="flex flex-col space-y-2">
                  <a href="#home" onClick={handleMenuLinkClick} className="block hover:text-blue-500 dark:hover:text-white transition-colors duration-300"><i className="uil uil-home mr-2"></i>{t('nav.home')}</a>
                  <a href="#about" onClick={handleMenuLinkClick} className="block hover:text-blue-500 dark:hover:text-white transition-colors duration-300"><i className="uil uil-user mr-2"></i>{t('nav.about')}</a>
                  <a href="#portfolio" onClick={handleMenuLinkClick} className="block hover:text-blue-500 dark:hover:text-white transition-colors duration-300"><i className="uil uil-briefcase-alt mr-2"></i>{t('nav.portfolio')}</a>
                  <a href="#certificate" onClick={handleMenuLinkClick} className="block hover:text-blue-500 dark:hover:text-white transition-colors duration-300"><i className="uil uil-award mr-2"></i>{t('nav.certificate')}</a>
                  <a href="#skills" onClick={handleMenuLinkClick} className="block hover:text-blue-500 dark:hover:text-white transition-colors duration-300"><i className="uil uil-brackets-curly mr-2"></i>{t('nav.skill')}</a>
                  <a href="#contact" onClick={handleMenuLinkClick} className="block hover:text-blue-500 dark:hover:text-white transition-colors duration-300"><i className="uil uil-envelope mr-2"></i>{t('nav.contact')}</a>
                </div>
              </div>
            )}
          </div>
        </nav>
        
        <section id="home" className="min-h-screen flex items-center justify-center pt-20" data-aos="fade-up">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">{t('home.welcome')}</h1>
            <p className="text-xl mb-8">{t('home.subtitle')}</p>
            <a href="https://store.nephyy.biz.id">
              <button className="btn-interactive px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg transition transform hover:scale-105 duration-300">
                <i className="uil uil-rocket mr-2"></i>{t('home.visit_store')}
              </button>
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
          <Image src="/nyan-cat.gif" alt="Nyan Cat Animation" width={200} height={100} style={{ top: "-12px" }} className="absolute left-0 opacity-50 dark:opacity-10 animate-slide" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="relative inline-block mb-8 group" onClick={handleProfileImageClick}>
              <Image src={profileImage} alt="Profile" className={`mx-auto rounded-full shadow-lg w-32 h-32 object-cover transition-transform duration-300 ease-in-out ${profileImage === '/qr-code.png' ? 'cursor-pointer hover:scale-105' : 'hover:scale-110'}`} width="200" height="200" />
              <button onClick={(e) => { e.stopPropagation(); handleProfileImageSwap(); }} aria-label={t('about.change_image_label')} className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none">
                <i className="uil uil-sync text-xl text-gray-800 dark:text-gray-200"></i>
              </button>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('about.title')}</h2>
            <p className="text-lg leading-relaxed mb-16">{t('about.description')}</p>

            <div className="container mx-auto px-4 py-8">
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{t('timeline.title')}</h3>
              <div className="relative">
                <div className="absolute top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 left-4 md:left-1/2 md:-translate-x-1/2"></div>
                {timelineData.map((item, index) => (
                  <div key={index} className="relative mb-8">
                    <div className="absolute left-4 top-1 md:left-1/2 w-8 h-8 bg-gray-800 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 -translate-x-1/2">
                      <i className={`${item.icon} text-lg`}></i>
                    </div>
                    <div className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-shadow hover:shadow-lg ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                      <p className="text-sm font-semibold text-blue-600 dark:text-gray-400">{item.year}</p>
                      <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white"><i className="uil uil-heart"></i> {t('details.hobbies')}</h3>
                <ul className="space-y-1"><li className="flex items-center gap-2"><i className="uil uil-desktop"></i> Coding</li><li className="flex items-center gap-2"><i className="uil uil-brush-alt"></i> Drawing</li><li className="flex items-center gap-2"><i className="uil uil-book"></i> Read Book</li></ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white"><i className="uil uil-user"></i> {t('details.idol')}</h3>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2"><Image src="/marsha.jpg" alt="Marsha JKT48" width={24} height={24} className="h-6 w-6 rounded-full object-cover" /><span>Marsha JKT48</span></div>
                  <button onClick={() => window.open("https://instagram.com/marsha_jkt48", "_blank")} className="btn-interactive px-4 py-1 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-gray-200 rounded-full shadow-lg transform transition duration-300">
                    <i className="uil uil-external-link-alt mr-2"></i>{t('details.view_profile')}
                  </button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white"><i className="uil uil-music"></i> {t('details.music')}</h3>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2"><i className="uil uil-music-alt"></i><span>All Girls Are The Same</span></div>
                  <button onClick={handleMusicToggle} className="btn-interactive px-4 py-1 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-gray-200 rounded-full shadow-lg transform transition duration-300">
                    {isMusicPlaying ? <><i className="uil uil-pause mr-2"></i> {t('details.stop_music')}</> : <><i className="uil uil-play mr-2"></i> {t('details.play_music')}</>}
                  </button>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white"><i className="uil uil-qrcode-scan"></i> {t('details.share')}</h3>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{t('details.share_description')}</span>
                  <button onClick={() => setIsQrModalOpen(true)} className="btn-interactive px-4 py-1 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-gray-200 rounded-full shadow-lg transform transition duration-300">
                    <i className="uil uil-qrcode-scan mr-2"></i>{t('details.show_qr')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="portfolio" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">{t('portfolio.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioData.map((item) => (
                <div key={item.id} onClick={() => setSelectedItem(item)} className="bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 p-6 rounded-lg shadow-md portfolio-card" data-aos="fade-up">
                  <Image src={item.image} alt={item.title} width={500} height={300} className="w-full rounded-md mb-4" />
                  <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p>{item.shortDescription}</p>
                  <div className="mt-4">
                    {item.tags.map(tag => (
                       <span key={tag} className={`inline-block text-xs px-2 py-1 rounded-full mr-2 ${tagColorMap[tag] || 'bg-gray-200 text-gray-800'}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificate" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('certificate.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certificateData.map((item) => (
                <div key={item.id} onClick={() => setSelectedItem(item)} className="bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 p-6 rounded-lg shadow-md portfolio-card" data-aos="zoom-in">
                  <Image src={item.image} alt={item.title} width={500} height={300} className="w-full rounded-md mb-4" />
                  <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p>{item.shortDescription}</p>
                  <div className="mt-2">
                    <span className="inline-block bg-purple-200 text-purple-800 dark:bg-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full"><i className="uil uil-award"></i> {item.tags[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="skills" className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">{t('skills.title')}</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2 text-gray-900 dark:text-white"><img src="https://img.icons8.com/color/48/000000/html-5.png" className="h-6 w-6" alt="HTML Icon" /> HTML</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4"><div className="progress-fill bg-gray-700 dark:bg-gray-400 h-4 rounded-full" style={{ "--target-width": "90%" }}></div></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2 text-gray-900 dark:text-white"><img src="https://img.icons8.com/color/000000/css3.png" className="h-6 w-6" alt="CSS Icon" /> CSS</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4"><div className="progress-fill bg-gray-700 dark:bg-gray-400 h-4 rounded-full" style={{ "--target-width": "85%" }}></div></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2 text-gray-900 dark:text-white"><img src="https://img.icons8.com/?size=100&id=plPz67QUdeWA&format=png&color=000000" className="h-6 w-6" alt="PHP Icon" /> PHP</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4"><div className="progress-fill bg-gray-700 dark:bg-gray-400 h-4 rounded-full" style={{ "--target-width": "75%" }}></div></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2 text-gray-900 dark:text-white"><img src="https://img.icons8.com/color/48/000000/javascript.png" className="h-6 w-6" alt="JS Icon" /> JavaScript</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4"><div className="progress-fill bg-gray-700 dark:bg-gray-400 h-4 rounded-full" style={{ "--target-width": "80%" }}></div></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2 text-gray-900 dark:text-white"><img src="https://img.icons8.com/color/48/000000/database.png" className="h-6 w-6" alt="Database Icon" /> Database</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-4"><div className="progress-fill bg-gray-700 dark:bg-gray-400 h-4 rounded-full" style={{ "--target-width": "70%" }}></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">{t('contact.title')}</h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-full mb-4">
                <textarea value={whatsappMessage} onChange={(e) => setWhatsappMessage(e.target.value)} id="whatsapp-message" placeholder={t('contact.placeholder')} className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-transparent focus:ring-2 focus:ring-green-500 transition" rows="4"></textarea>
              </div>
              <a href={`https://wa.me/79992461528?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="btn-interactive px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition duration-300 flex items-center">
                <i className="uil uil-whatsapp mr-2"></i>{t('contact.send')}
              </a>
            </div>
          </div>
        </section>
        
        <footer className="bg-white dark:bg-gray-950/50 border-t border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-300 pt-16 pb-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">
              <div className="md:col-span-12 lg:col-span-4 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Nephyy</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t('footer.description')}</p>
              </div>
              <div className="md:col-span-4 lg:col-span-2">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t('footer.navigation')}</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#home" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.home')}</a></li>
                  <li><a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.about')}</a></li>
                  <li><a href="#portfolio" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.portfolio')}</a></li>
                  <li><a href="#certificate" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.certificate')}</a></li>
                  <li><a href="#skills" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.skill')}</a></li>
                  <li><a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">{t('nav.contact')}</a></li>
                </ul>
              </div>
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t('footer.find_me')}</h3>
                <div className="flex space-x-4 justify-center md:justify-start">
                    <a href="https://instagram.com/shunsinee.x" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"><i className="uil uil-instagram"></i></a>
                    <a href="https://t.me/Nephyyy1" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><i className="uil uil-telegram"></i></a>
                </div>
              </div>
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{t('footer.contact_info')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t('footer.contact_text')}</p>
              </div>
            </div>
            <hr className="my-8 border-gray-200 dark:border-gray-800" />
            <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
            </div>
          </div>
        </footer>
        
        <a href="https://trakteer.id/nephyy1/tip" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 z-30">
          <Image src="/matcha.gif" alt="Tip" width={64} height={64} className="w-16 h-16 rounded-full shadow-lg transform transition active:scale-90 hover:scale-105" />
        </a>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg shadow-2xl max-w-lg w-full p-6 relative modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedItem(null)} className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl" aria-label={t('modal.close_label')}>
              <i className="uil uil-times"></i>
            </button>
            <Image src={selectedItem.image} alt={selectedItem.title} width={600} height={400} className="w-full rounded-md mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">{selectedItem.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedItem.longDescription}</p>
            
            {selectedItem.repoLink && (
              <div className="mt-6 flex justify-center">
                <a href={selectedItem.repoLink} target="_blank" rel="noopener noreferrer">
                  <button className={`${modalButtonClasses} bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600`}>
                    <i className="uil uil-github mr-2"></i>
                    {t('modal.github_code')}
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {isQrModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={() => setIsQrModalOpen(false)}>
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg shadow-2xl max-w-xs w-full p-6 relative modal-content text-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsQrModalOpen(false)} className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl" aria-label={t('modal.close_label')}>
              <i className="uil uil-times"></i>
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('modal.share_title')}</h3>
            <Image src="/qr-code.png" alt="QR Code untuk Website" width={256} height={256} className="mx-auto qr-code-image" />
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">{t('modal.share_scan')}</p>
            <p className="mt-2 font-semibold text-blue-600 dark:text-gray-300">nephyy.tech</p>
          </div>
        </div>
      )}
    </>
  );
}
