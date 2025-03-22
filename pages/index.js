import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nephyy - Personal Page</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Nephyy Personal Page Website" />
        <meta name="keywords" content="personal, portfolio, website, nephyy, nephyylia, nokos, noktel, nephi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nephyy.tech/" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Stylesheet dan font */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />

        {/* Tailwind dan Sweetalert2 */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        {/* Custom Styles */}
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

        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold">
                Nephyy <i className="uil uil-check-circle text-blue-500"></i>
              </div>
              <div className="hidden md:flex space-x-4">
                <a href="#home" className="hover:text-blue-500">Home</a>
                <a href="#about" className="hover:text-blue-500">About</a>
                <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
                <a href="#skills" className="hover:text-blue-500">Skill</a>
                <a href="#contact" className="hover:text-blue-500">Contact</a>
              </div>
              <div className="md:hidden">
                <button id="menu-toggle" className="text-2xl focus:outline-none">
                  <i className="uil uil-bars"></i>
                </button>
              </div>
            </div>
            <div id="mobile-menu" className="md:hidden hidden">
              <div className="flex flex-col space-y-2 pb-4">
                <a href="#home" className="block hover:text-blue-500">
                  <i className="uil uil-home mr-2"></i>Home
                </a>
                <a href="#about" className="block hover:text-blue-500">
                  <i className="uil uil-user mr-2"></i>About
                </a>
                <a href="#portfolio" className="block hover:text-blue-500">
                  <i className="uil uil-briefcase-alt mr-2"></i>Portfolio
                </a>
                <a href="#skills" className="block hover:text-blue-500">
                  <i className="uil uil-brackets-curly mr-2"></i>Skill
                </a>
                <a href="#contact" className="block hover:text-blue-500">
                  <i className="uil uil-envelope mr-2"></i>Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Home Section */}
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

        {/* Halaman About */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <img src="nephyy2.gif" alt="Profile" className="mx-auto rounded-full shadow-lg mb-8 w-32 h-32 transition transform duration-500 ease-in-out hover:scale-110" width="200" height="200" />
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed">
              Saya adalah seorang pemula di bidang teknologi, saya belajar pemrograman otodidak lewat youtube karena bosan waktu covid 19 tidak ada kegiatan :(
            </p>
            {/* Konten lainnya */}
          </div>
        </section>

        {/* Halaman Portfolio */}
        <section id="portfolio" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Portfolio</h2>
            {/* Konten portfolio */}
          </div>
        </section>

        {/* Halaman Skills */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Skill</h2>
            {/* Konten skill */}
          </div>
        </section>

        {/* Halaman Contact */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Kirim Pesan Whatsapp</h2>
            {/* Konten contact */}
          </div>
        </section>

        {/* Halaman Thanks */}
        <section id="thanks" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Thanks To</h2>
            {/* Konten thanks */}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-white bg-opacity-80 text-center">
          <p>&copy; 2025 Nephyy. All rights reserved.</p>
        </footer>
      </div>

      {/* Script eksternal dan inline */}
      <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="afterInteractive" onLoad={() => {
        if (typeof AOS !== 'undefined') {
          AOS.init({ duration: 600 });
        }
      }} />

      <Script id="custom-scripts" strategy="afterInteractive">
        {`
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