import { useRef, useEffect } from 'react';

export default function LoadingScreen({ loaded }: { loaded: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaded && containerRef.current) {
      containerRef.current.style.opacity = '0';
      setTimeout(() => {
        if (containerRef.current) containerRef.current.style.display = 'none';
      }, 500);
    }
  }, [loaded]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-500 ease-out"
    >
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-indigo-600/30 border-t-indigo-500 rounded-full animate-spin" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-indigo-100 tracking-widest">
          HANY
        </div>
      </div>
      <div className="mt-4 text-slate-400 text-sm font-light tracking-wider animate-pulse">
        INITIALIZING UNIVERSE...
      </div>
    </div>
  );
}
