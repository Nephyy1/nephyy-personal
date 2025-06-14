import { useEffect, useState, useRef } from "react"
import Head from "next/head"

export default function Home() {
  const portfolioData = [
    {
      id: 1,
      title: "Personal Web",
      shortDescription: "Personal web untuk pribadi :v",
      image: "personal.jpg",
      tags: ["Web", "Design"],
      longDescription: "Website portofolio pribadi yang sedang Anda lihat sekarang. Dibuat untuk menampilkan profil, proyek, dan keahlian saya dalam pengembangan web. Dibangun dari awal menggunakan Next.js dan Tailwind CSS.",
      liveLink: "#",
      repoLink: "https://github.com/",
    },
    {
      id: 2,
      title: "Website Store",
      shortDescription: "Untuk berjualan online.",
      image: "nephyystore.jpg",
      tags: ["Web", "Design"],
      longDescription: "Sebuah platform e-commerce sederhana yang dirancang untuk memfasilitasi penjualan produk secara online. Dilengkapi dengan katalog produk, sistem keranjang, dan integrasi pembayaran.",
      liveLink: "https://store.nephyy.biz.id",
      repoLink: "https://github.com/",
    },
    {
      id: 3,
      title: "Bot WhatsApp & Telegram",
      shortDescription: "Simple Assistance,menggunakan nodejs.",
      image: "bot.jpg",
      tags: ["Bot", "API"],
      longDescription: "Bot asisten otomatis untuk platform WhatsApp dan Telegram. Dibuat menggunakan Node.js untuk menangani perintah, memberikan respons otomatis, dan terhubung dengan berbagai API eksternal.",
      liveLink: null,
      repoLink: "https://github.com/",
    },
  ]

  const certificateData = [
    {
      id: 4,
      title: "Sertifikat Web Developer",
      shortDescription: "Sertifikat Kelulusan Bootcamp.",
      image: "certificate1.png",
      tags: ["Official"],
      longDescription: "Sertifikat ini diberikan setelah berhasil menyelesaikan bootcamp intensif pengembangan web yang mencakup HTML, CSS, JavaScript, dan framework modern.",
    },
    {
      id: 5,
      title: "Sertifikat Artificial Intelligence",
      shortDescription: "Dasar-dasar Kecerdasan Buatan.",
      image: "certificate2.png",
      tags: ["Official"],
      longDescription: "Sertifikat kelulusan kursus dasar-dasar Artifical Intelligence, mempelajari konsep machine learning, neural networks, dan implementasinya.",
    },
    {
      id: 6,
      title: "Sertifikat SQL Database",
      shortDescription: "Manajemen Database SQL.",
      image: "certificate3.png",
      tags: ["Official"],
      longDescription: "Sertifikat yang menandakan penguasaan dalam manajemen database, termasuk query SQL, perancangan skema, dan optimisasi performa.",
    },
  ]

  const timelineData = [
    {
      year: "2020",
      title: "Awal Perjalanan",
      description: "Karena pandemi, saya mulai belajar pemrograman secara otodidak melalui YouTube. Fokus awal pada HTML, CSS, dan dasar-dasar JavaScript.",
      icon: "uil-rocket"
    },
    {
      year: "2021",
      title: "Proyek Pertama",
      description: "Berhasil membangun beberapa website statis sederhana untuk teman dan komunitas sebagai latihan untuk mengasah kemampuan front-end.",
      icon: "uil-lightbulb-alt"
    },
    {
      year: "2022",
      title: "Mempelajari Backend",
      description: "Mulai mendalami sisi server dengan belajar PHP dan Node.js, serta membuat bot WhatsApp & Telegram pertama saya.",
      icon: "uil-server-network"
    },
    {
      year: "2023",
      title: "Ekosistem Modern",
      description: "Beralih ke ekosistem JavaScript modern dengan mempelajari React.js dan Next.js untuk membangun aplikasi web yang lebih interaktif dan cepat.",
      icon: "uil-react"
    },
    {
      year: "2025",
      title: "Terus Berkembang",
      description: "Mulai mengeksplorasi bidang baru seperti AI dan memperdalam keahlian database dengan SQL, sambil terus mengikuti perkembangan teknologi web.",
      icon: "uil-brain"
    }
  ]

  const tagColorMap = {
    Web: "bg-blue-200 text-blue-800",
    Design: "bg-green-200 text-green-800",
    Bot: "bg-red-200 text-red-800",
    API: "bg-indigo-200 text-indigo-800",
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [whatsappMessage, setWhatsappMessage] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)
  const audioRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.AOS) {
        const aosScript = document.createElement("script")
        aosScript.src = "https://unpkg.com/aos@next/dist/aos.js"
        aosScript.onload = () => {
          window.AOS.init({ duration: 600, once: true })
        }
        document.body.appendChild(aosScript)
      } else {
        window.AOS.init({ duration: 600, once: true })
      }
    }
  }, [])

  const handleMusicToggle = () => {
    if (isMusicPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsMusicPlaying(!isMusicPlaying)
  }
  
  const handleMenuLinkClick = () => {
    setIsMenuOpen(false)
  }

  const modalButtonClasses = "w-full px-5 py-2.5 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center"

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nephyy - Personal Page</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4A90E2" />
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
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta property="og:image" content="https://nephyy.tech/favicon.ico" />
        <meta name="twitter:image" content="https://nephyy.tech/favicon.ico" />
        <style>{`
          html, body { scroll-behavior: smooth; overflow-x: hidden; }
          body { font-family: 'Montserrat', sans-serif; }
          .portfolio-card { perspective: 1000px; transition: transform 0.5s, box-shadow 0.5s; cursor: pointer; }
          .portfolio-card:hover { transform: scale(1.05) rotateY(6deg); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
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
        `}</style>
      </Head>
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900">
        <audio id="fav-music" src="music.mp3" loop ref={audioRef}></audio>
        <nav className="fixed w-full z-40 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold">Nephyy <i className="uil uil-check-circle text-blue-500"></i></div>
              <div className="hidden md:flex space-x-4">
                <a href="#home" className="hover:text-blue-500 transition-colors duration-300">Home</a>
                <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a>
                <a href="#portfolio" className="hover:text-blue-500 transition-colors duration-300">Portfolio</a>
                <a href="#certificate" className="hover:text-blue-500 transition-colors duration-300">Certificate</a>
                <a href="#skills" className="hover:text-blue-500 transition-colors duration-300">Skill</a>
                <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a>
              </div>
              <div className="md:hidden">
                <button id="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl focus:outline-none">
                  {isMenuOpen ? <i className="uil uil-times"></i> : <i className="uil uil-bars"></i>}
                </button>
              </div>
            </div>
            {isMenuOpen && (
              <div id="mobile-menu" className="md:hidden animate-in">
                <div className="flex flex-col space-y-2 pb-4">
                  <a href="#home" onClick={handleMenuLinkClick} className="block hover:text-blue-500 transition-colors duration-300"><i className="uil uil-home mr-2"></i>Home</a>
                  <a href="#about" onClick={handleMenuLinkClick} className="block hover:text-blue-500 transition-colors duration-300"><i className="uil uil-user mr-2"></i>About</a>
                  <a href="#portfolio" onClick={handleMenuLinkClick} className="block hover:text-blue-500 transition-colors duration-300"><i className="uil uil-briefcase-alt mr-2"></i>Portfolio</a>
                  <a href="#certificate" onClick={handleMenuLinkClick} className="block hover:text-blue-500 transition-colors duration-300"><i className="uil uil-award mr-2"></i>Certificate</a>
                  <a href="#skills" onClick={handleMenuLinkClick} className="block hover:text-blue-500 transition-colors duration-300"><i className="uil uil-brackets-curly mr-2"></i>Skill</a>
                  <a href="#contact" onClick={handleMenuLinkClick} className="block hover:text-blue-500 transition-colors duration-300"><i className="uil uil-envelope mr-2"></i>Contact</a>
                </div>
              </div>
            )}
          </div>
        </nav>
        
        <section id="home" className="min-h-screen flex items-center justify-center pt-20" data-aos="fade-up">
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">Selamat Datang</h1>
            <p className="text-xl mb-8">Di Nephyy Personal Web!</p>
            <a href="https://store.nephyy.biz.id">
              <button className="btn-interactive px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-2xl duration-300">
                <i className="uil uil-rocket mr-2"></i>Kunjungi Toko Saya
              </button>
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white relative overflow-hidden">
          <img src="nyan-cat.gif" alt="Nyan Cat Animation" style={{ top: "-12px" }} className="absolute left-0 opacity-50 animate-slide" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <img src="nephyy2.gif" alt="Profile" className="mx-auto rounded-full shadow-lg mb-8 w-32 h-32 transition transform duration-500 ease-in-out hover:scale-110" width="200" height="200" />
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed mb-16">Saya adalah seorang pemula di bidang teknologi, saya belajar pemrograman otodidak lewat youtube karena bosan waktu covid 19 tidak ada kegiatan :(</p>

            <div className="container mx-auto px-4 py-8">
              <h3 className="text-3xl font-bold text-center mb-12">Timeline Perjalanan Saya</h3>
              <div className="relative wrap overflow-hidden h-full">
                <div className="absolute h-full border border-gray-300 border-2-2" style={{left: '50%'}}></div>
                {timelineData.map((item, index) => (
                  <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
                      <i className={`${item.icon} text-white text-lg mx-auto`}></i>
                    </div>
                    <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4 transition-shadow duration-300 hover:shadow-2xl" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                      <p className="text-sm font-semibold text-blue-600">{item.year}</p>
                      <h4 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h4>
                      <p className="text-sm leading-snug tracking-wide text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><i className="uil uil-heart"></i> Hobi</h3>
                <ul className="space-y-1"><li className="flex items-center gap-2"><i className="uil uil-desktop"></i> Coding</li><li className="flex items-center gap-2"><i className="uil uil-brush-alt"></i> Drawing</li><li className="flex items-center gap-2"><i className="uil uil-book"></i> Read Book</li></ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><i className="uil uil-user"></i> Oshi/Idol</h3>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2"><img src="marsha.jpg" alt="Marsha JKT48" className="h-6 w-6 rounded-full" /><span>Marsha JKT48</span></div>
                  <button onClick={() => window.open("https://instagram.com/marsha_jkt48", "_blank")} className="btn-interactive px-4 py-1 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-full shadow-md transform hover:scale-105 transition duration-300">Show Profile</button>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><i className="uil uil-music"></i> Fav Music</h3>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2"><i className="uil uil-music-alt"></i><span>All Girls Are The Same</span></div>
                  <button onClick={handleMusicToggle} className="btn-interactive px-4 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-md transform hover:scale-105 transition duration-300">
                    {isMusicPlaying ? <><i className="uil uil-pause mr-2"></i> Stop Music</> : <><i className="uil uil-play mr-2"></i> Play Music</>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioData.map((item) => (
                <div key={item.id} onClick={() => setSelectedItem(item)} className="bg-white p-6 rounded-lg shadow-md portfolio-card" data-aos="fade-up">
                  <img src={item.image} alt={item.title} className="w-full rounded-md mb-4" />
                  <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
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

        <section id="certificate" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Sertifikat</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certificateData.map((item) => (
                <div key={item.id} onClick={() => setSelectedItem(item)} className="bg-white p-6 rounded-lg shadow-md portfolio-card" data-aos="zoom-in">
                  <img src={item.image} alt={item.title} className="w-full rounded-md mb-4" />
                  <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
                  <p>{item.shortDescription}</p>
                  <div className="mt-2">
                    <span className="inline-block bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full"><i className="uil uil-award"></i> {item.tags[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="skills" className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Skill</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2"><img src="https://img.icons8.com/color/48/000000/html-5.png" className="h-6 w-6" alt="HTML Icon" /> HTML</h3>
                <div className="w-full bg-gray-200 rounded-full h-4"><div className="progress-fill bg-red-500 h-4 rounded-full" style={{ "--target-width": "90%" }}></div></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2"><img src="https://img.icons8.com/color/000000/css3.png" className="h-6 w-6" alt="CSS Icon" /> CSS</h3>
                <div className="w-full bg-gray-200 rounded-full h-4"><div className="progress-fill bg-blue-500 h-4 rounded-full" style={{ "--target-width": "85%" }}></div></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2"><img src="https://img.icons8.com/?size=100&id=plPz67QUdeWA&format=png&color=000000" className="h-6 w-6" alt="PHP Icon" /> PHP</h3>
                <div className="w-full bg-gray-200 rounded-full h-4"><div className="progress-fill bg-purple-500 h-4 rounded-full" style={{ "--target-width": "75%" }}></div></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2"><img src="https://img.icons8.com/color/48/000000/javascript.png" className="h-6 w-6" alt="JS Icon" /> JavaScript</h3>
                <div className="w-full bg-gray-200 rounded-full h-4"><div className="progress-fill bg-yellow-500 h-4 rounded-full" style={{ "--target-width": "80%" }}></div></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2"><img src="https://img.icons8.com/color/48/000000/database.png" className="h-6 w-6" alt="Database Icon" /> Database</h3>
                <div className="w-full bg-gray-200 rounded-full h-4"><div className="progress-fill bg-green-500 h-4 rounded-full" style={{ "--target-width": "70%" }}></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Kirim Pesan Whatsapp</h2>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-full mb-4">
                <textarea value={whatsappMessage} onChange={(e) => setWhatsappMessage(e.target.value)} id="whatsapp-message" placeholder="Tulis pesan anda disini..." className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-transparent focus:outline-none focus:border-transparent focus:ring-0 input-interactive" rows="4"></textarea>
              </div>
              <a href={`https://wa.me/79992461528?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="btn-interactive px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition duration-300 flex items-center">
                <i className="uil uil-whatsapp mr-2"></i>Kirim Pesan Whatsapp
              </a>
            </div>
          </div>
        </section>

        <section id="thanks" className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Thanks To</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md"><img src="nephyy.gif" alt="Profile 1" className="mx-auto rounded-full mb-4 w-24 h-24" /><h3 className="text-2xl font-medium mb-2">Nephyy</h3><p className="text-gray-600">Developer</p></div>
              <div className="bg-white p-6 rounded-lg shadow-md"><img src="gpt.gif" alt="Profile 2" className="mx-auto rounded-full mb-4 w-24 h-24" /><h3 className="text-2xl font-medium mb-2">Chat GPT</h3><p className="text-gray-600">AI Assistance</p></div>
              <div className="bg-white p-6 rounded-lg shadow-md"><img src="github.gif" alt="Profile 3" className="mx-auto rounded-full mb-4 w-24 h-24" /><h3 className="text-2xl font-medium mb-2">Github</h3><p className="text-gray-600">Deploy Website</p></div>
            </div>
          </div>
        </section>

        <footer className="py-6 bg-white bg-opacity-80 text-center">
          <p>&copy; 2025 Nephyy. All rights reserved.</p>
        </footer>
        
        <a href="https://trakteer.id/nephyy1/tip" target="_blank" className="fixed bottom-4 right-4 z-30">
          <img src="matcha.gif" alt="Tip" className="w-16 h-16 rounded-full shadow-lg transform transition active:scale-90 hover:scale-105" />
        </a>
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" 
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 relative modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl"
            >
              <i className="uil uil-times"></i>
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} className="w-full rounded-md mb-4" />
            <h3 className="text-3xl font-bold mb-3">{selectedItem.title}</h3>
            <p className="text-gray-700 mb-4">{selectedItem.longDescription}</p>
            
            {selectedItem.repoLink && (
              <div className="mt-6 flex justify-center">
                <a href={selectedItem.repoLink} target="_blank" rel="noopener noreferrer">
                  <button className={`${modalButtonClasses} bg-gradient-to-r from-gray-700 to-gray-900`}>
                    <i className="uil uil-github mr-2"></i>
                    Kode GitHub
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        @media (max-width: 639px) {
          .wrap .w-5\/12:first-child {
            display: none;
          }
          .wrap .left-timeline, .wrap .right-timeline {
            justify-content: flex-start;
          }
           .wrap .left-timeline > div:last-child, .wrap .right-timeline > div:last-child {
            width: 100%;
            text-align: left;
          }
           .wrap .order-1 {
             order: 2;
           }
           .wrap .z-20 {
             order: 1;
             margin-right: 1rem;
           }
          .wrap .absolute {
            left: 0 !important;
          }
        }
      `}</style>
    </>
  )
}
