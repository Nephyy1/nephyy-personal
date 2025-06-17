import { useEffect, useRef } from 'react';
import Image from 'next/image';

const CloudDivider = () => {
    const cloud1Ref = useRef(null);
    const cloud2Ref = useRef(null);
    const cloud3Ref = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            
            const rect = containerRef.current.getBoundingClientRect();
            const scrollY = window.scrollY;

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                const limitedPercent = Math.max(0, Math.min(1, scrollPercent));
                
                if (cloud1Ref.current) {
                    cloud1Ref.current.style.transform = `translateX(${limitedPercent * -150}px)`;
                }
                if (cloud2Ref.current) {
                    cloud2Ref.current.style.transform = `translateX(${limitedPercent * 100}px)`;
                }
                if (cloud3Ref.current) {
                    cloud3Ref.current.style.transform = `translateX(${limitedPercent * -80}px)`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-40 md:h-56 -mb-16 md:-mb-24 overflow-x-clip" style={{ zIndex: 30 }}>
            <div ref={cloud1Ref} className="absolute -bottom-8 -left-10 w-[60vw] md:w-[40vw] max-w-[450px] opacity-95" style={{ animation: `float 18s ease-in-out infinite` }}>
                <Image src="/cloud 1.webp" alt="Parallax Cloud" width={500} height={250} priority style={{ width: '100%', height: 'auto' }}/>
            </div>
             <div ref={cloud2Ref} className="absolute top-0 -right-12 w-[70vw] md:w-[50vw] max-w-[500px]" style={{ animation: `float 15s ease-in-out infinite 2s` }}>
                <Image src="/white cloud.webp" alt="Parallax Cloud" width={500} height={250} priority style={{ width: '100%', height: 'auto' }}/>
            </div>
             <div ref={cloud3Ref} className="absolute top-10 right-1/4 w-[50vw] md:w-[35vw] max-w-[350px] opacity-80" style={{ animation: `float 22s ease-in-out infinite 1s` }}>
                <Image src="/cloud 2.webp" alt="Parallax Cloud" width={500} height={250} priority style={{ width: '100%', height: 'auto' }}/>
            </div>
        </div>
    );
};

export default CloudDivider;
