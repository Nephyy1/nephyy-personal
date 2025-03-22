import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nephyy - Personal Page</title>
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
          body { font-family: 'Montserrat', sans-serif; }
          .portfolio-card { perspective: 1000px; transition: transform 0.5s; }
          .portfolio-card:hover { transform: rotateY(6deg); }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fadeOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-10px); } }
          .animate-in { animation: fadeIn 0.3s ease-out forwards; }
          .animate-out { animation: fadeOut 0.3s ease-out forwards; }
          .progress-fill { width: 0; animation: fillBar 2s forwards; }
          @keyframes fillBar { from { width: 0; } to { width: var(--target-width); } }
        `}</style>
      </Head>
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900">
        <audio id="fav-music" src="music.mp3" loop></audio>
        <nav className="fixed w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold">Nephyy <i className="uil uil-check-circle text-blue-500"></i></div>
              <div className="hidden md:flex space-x-4">
                <a href="#home" className="hover:text-blue-500">Home</a>
                <a href="#about" className="hover:text-blue-500">About</a>
                <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
                <a href="#skills" className="hover:text-blue-500">Skill</a>
                <a href="#contact" className="hover:text-blue-500">Contact</a>
              </div>
              <div className="md:hidden">
                <button id="menu-toggle" className="text-2xl focus:outline-none"><i className="uil uil-bars"></i></button>
              </div>
            </div>
            <div id="mobile-menu" className="md:hidden hidden">
              <div className="flex flex-col space-y-2 pb-4">
                <a href="#home" className="block hover:text-blue-500"><i className="uil uil-home mr-2"></i>Home</a>
                <a href="#about" className="block hover:text-blue-500"><i className="uil uil-user mr-2"></i>About</a>
                <a href="#portfolio" className="block hover:text-blue-500"><i className="uil uil-briefcase-alt mr-2"></i>Portfolio</a>
                <a href="#skills" className="block hover:text-blue-500"><i className="uil uil-brackets-curly mr-2"></i>Skill</a>
                <a href="#contact" className="block hover:text-blue-500"><i className="uil uil-envelope mr-2"></i>Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <section id="home" className="min-h-screen flex items-center justify-center pt-20" data-aos="fade-up">
          <div className="text-center transform hover:scale-105 transition duration-500 px-4">
            <h1 className="text-5xl font-extrabold mb-4">Selamat Datang</h1>
            <p className="text-xl mb-8">Di Nephyy Personal Web!</p>
            <a href="https://store.nephyy.biz.id">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
                <i className="uil uil-rocket mr-2"></i>Kunjungi Toko Saya
              </button>
            </a>
          </div>
        </section>
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <img src="nephyy2.gif" alt="Profile" className="mx-auto rounded-full shadow-lg mb-8 w-32 h-32 transition transform duration-500 ease-in-out hover:scale-110" width="200" height="200" />
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed">Saya adalah seorang pemula di bidang teknologi, saya belajar pemrograman otodidak lewat youtube karena bosan waktu covid 19 tidak ada kegiatan :(</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <i className="uil uil-heart"></i> Hobi
                </h3>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2"><i className="uil uil-desktop"></i> Coding</li>
                  <li className="flex items-center gap-2"><i className="uil uil-brush-alt"></i> Drawing</li>
                  <li className="flex items-center gap-2"><i className="uil uil-book"></i> Read Book</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <i className="uil uil-user"></i> Oshi/Idol
                </h3>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <img src="marsha.jpg" alt="Marsha Icon" className="h-6 w-6 rounded-full" />
                    <span>Marsha JKT48</span>
                  </div>
                  <button id="show-marsha" className="px-4 py-1 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-full shadow-md transform hover:scale-105 transition duration-300">
                    Show Profile
                  </button>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <i className="uil uil-music"></i> Fav Music
                </h3>
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <i className="uil uil-music-alt"></i>
                    <span>All Girls Are The Same</span>
                  </div>
                  <button id="fav-music-toggle" className="px-4 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full shadow-md transform hover:scale-105 transition duration-300">
                    <i className="uil uil-play"></i> Play Music
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center space-y-4">
              <div className="flex gap-4">
                <a href="https://instagram.com/shunsinee.x" target="_blank" className="text-pink-500 text-3xl"><i className="uil uil-instagram"></i></a>
                <a href="https://t.me/Nephyyy1" target="_blank" className="text-blue-500 text-3xl"><i className="uil uil-telegram"></i></a>
              </div>
              <div className="flex gap-4">
                <span className="inline-block bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <i className="uil uil-tag"></i> Pemula
                </span>
                <span className="inline-block bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <i className="uil uil-tag"></i> Coder
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md portfolio-card">
                <img src="personal.jpg" alt="Project 1" className="w-full rounded-md mb-4" width="300" height="200" />
                <h3 className="text-2xl font-medium mb-2">Personal Web</h3>
                <p>Personal web untuk pribadi :v</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">Web</span>
                  <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Design</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md portfolio-card">
                <img src="nephyystore.jpg" alt="Project 2" className="w-full rounded-md mb-4" width="300" height="200" />
                <h3 className="text-2xl font-medium mb-2">Website Store</h3>
                <p>Untuk berjualan online.</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">Web</span>
                  <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Design</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md portfolio-card">
                <img src="bot.jpg" alt="Project 3" className="w-full rounded-md mb-4" width="300" height="200" />
                <h3 className="text-2xl font-medium mb-2">Bot WhatsApp & Telegram</h3>
                <p>Simple Assistance,menggunakan nodejs.</p>
                <div className="mt-4">
                  <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full mr-2">Bot</span>
                  <span className="inline-block bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded-full">API</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Skill</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2">
                  <img src="https://img.icons8.com/color/48/000000/html-5.png" className="h-6 w-6" alt="HTML Icon" /> HTML
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="progress-fill bg-red-500 h-4 rounded-full" style={{ "--target-width": "90%" }}></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2">
                  <img src="https://img.icons8.com/color/48/000000/css3.png" className="h-6 w-6" alt="CSS Icon" /> CSS
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="progress-fill bg-blue-500 h-4 rounded-full" style={{ "--target-width": "85%" }}></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2">
                  <img src="https://img.icons8.com/?size=100&id=plPz67QUdeWA&format=png&color=000000" className="h-6 w-6" alt="PHP Icon" /> PHP
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="progress-fill bg-purple-500 h-4 rounded-full" style={{ "--target-width": "75%" }}></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2">
                  <img src="https://img.icons8.com/color/48/000000/javascript.png" className="h-6 w-6" alt="JS Icon" /> JavaScript
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="progress-fill bg-yellow-500 h-4 rounded-full" style={{ "--target-width": "80%" }}></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2 flex items-center justify-center gap-2">
                  <img src="https://img.icons8.com/color/48/000000/database.png" className="h-6 w-6" alt="Database Icon" /> Database
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="progress-fill bg-green-500 h-4 rounded-full" style={{ "--target-width": "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Kirim Pesan Whatsapp</h2>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-full mb-4">
                <textarea id="whatsapp-message" placeholder="Tulis pesan anda disini..." className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-transparent focus:outline-none focus:border-transparent focus:ring-0" rows="4"></textarea>
              </div>
              <a id="wa-link" href="https://wa.me/79992461528" target="_blank" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition duration-300 flex items-center">
                <i className="uil uil-whatsapp mr-2"></i>Kirim Pesan Whatsapp
              </a>
            </div>
          </div>
        </section>
        <section id="thanks" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Thanks To</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="nephyy.gif" alt="Profile 1" className="mx-auto rounded-full mb-4 w-24 h-24" />
                <h3 className="text-2xl font-medium mb-2">Nephyy</h3>
                <p className="text-gray-600">Developer</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="gpt.gif" alt="Profile 2" className="mx-auto rounded-full mb-4 w-24 h-24" />
                <h3 className="text-2xl font-medium mb-2">Chat GPT</h3>
                <p className="text-gray-600">AI Assistance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="github.gif" alt="Profile 3" className="mx-auto rounded-full mb-4 w-24 h-24" />
                <h3 className="text-2xl font-medium mb-2">Github</h3>
                <p className="text-gray-600">Deploy Website</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-6 bg-white bg-opacity-80 text-center">
          <p>&copy; 2025 Nephyy. All rights reserved.</p>
        </footer>
      </div>
      <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="afterInteractive" onLoad={() => { AOS.init({duration:600}); }} />
      <Script id="custom-scripts" strategy="afterInteractive">
        {`
AOS.init({duration:600});
document.getElementById("menu-toggle").addEventListener("click", function(){
  var menu = document.getElementById("mobile-menu");
  if(menu.classList.contains("hidden")){
    menu.classList.remove("hidden");
    menu.classList.remove("animate-out");
    menu.classList.add("animate-in");
    this.innerHTML = '<i class="uil uil-times"></i>';
  } else {
    menu.classList.remove("animate-in");
    menu.classList.add("animate-out");
    menu.addEventListener("animationend", function handler(){
      menu.classList.add("hidden");
      menu.classList.remove("animate-out");
      menu.removeEventListener("animationend", handler);
    });
    this.innerHTML = '<i class="uil uil-bars"></i>';
  }
});
document.querySelectorAll("#mobile-menu a").forEach(function(link){
  link.addEventListener("click", function(){
    var menu = document.getElementById("mobile-menu");
    if(!menu.classList.contains("hidden")){
      menu.classList.remove("animate-in");
      menu.classList.add("animate-out");
      menu.addEventListener("animationend", function handler(){
        menu.classList.add("hidden");
        menu.classList.remove("animate-out");
        menu.removeEventListener("animationend", handler);
      });
      document.getElementById("menu-toggle").innerHTML = '<i class="uil uil-bars"></i>';
    }
  });
});
document.getElementById("whatsapp-message").addEventListener("input", function(){
  var msg = this.value;
  document.getElementById("wa-link").href = "https://wa.me/79992461528?text=" + encodeURIComponent(msg);
});
var favMusic = document.getElementById("fav-music");
var favMusicToggle = document.getElementById("fav-music-toggle");
favMusicToggle.addEventListener("click", function(){
  if(favMusic.paused){
    favMusic.play();
    favMusicToggle.innerHTML = '<i class="uil uil-pause mr-2"></i> Stop Music';
  } else {
    favMusic.pause();
    favMusicToggle.innerHTML = '<i class="uil uil-play mr-2"></i> Play Music';
  }
});
document.getElementById("show-marsha").addEventListener("click", function(){
  window.open("https://instagram.com/marsha_jkt48", "_blank");
});
        `}
      </Script>
    </>
  )
}