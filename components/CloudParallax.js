import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const CloudParallax = () => {
  const cloudsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !cloudsRef.current) return;
      
      const scrollY = window.scrollY;
      const clouds = cloudsRef.current.children;
      const opacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.7));
      
      containerRef.current.style.opacity = opacity;

      Array.from(clouds).forEach((cloud) => {
        const speed = parseFloat(cloud.dataset.speed);
        cloud.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-screen z-10 pointer-events-none">
      <div ref={cloudsRef} className="relative w-full h-full">
        <div className="absolute top-[10%] left-[5%] w-[25vw] max-w-[200px] animate-slide-in-left" data-speed="0.4">
          <Image src="/white cloud.webp" alt="Parallax Cloud" width={200} height={100} priority style={{width: '100%', height: 'auto'}}/>
        </div>
        <div className="absolute top-[20%] right-[10%] w-[35vw] max-w-[300px] animate-slide-in-right" style={{ animationDelay: '0.5s' }} data-speed="0.6">
          <Image src="/cloud 1.webp" alt="Parallax Cloud" width={300} height={150} priority style={{width: '100%', height: 'auto'}}/>
        </div>
        <div className="absolute top-[50%] left-[15%] w-[20vw] max-w-[150px] animate-slide-in-left" style={{ animationDelay: '1s' }} data-speed="0.3">
          <Image src="/cloud 2.webp" alt="Parallax Cloud" width={150} height={75} priority style={{width: '100%', height: 'auto'}}/>
        </div>
        <div className="absolute top-[65%] right-[25%] w-[30vw] max-w-[250px] animate-slide-in-right" style={{ animationDelay: '1.2s' }} data-speed="0.5">
          <Image src="/white cloud.webp" alt="Parallax Cloud" width={250} height={125} priority style={{width: '100%', height: 'auto'}}/>
        </div>
         <div className="absolute top-[35%] left-[40%] w-[40vw] max-w-[350px] animate-slide-in-left" style={{ animationDelay: '0.8s' }} data-speed="0.7">
          <Image src="/cloud 1.webp" alt="Parallax Cloud" width={350} height={175} priority style={{width: '100%', height: 'auto'}}/>
        </div>
      </div>
    </div>
  );
};

export default CloudParallax;
