import { useRef, useEffect } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        
        // Add a slight delay for the follower
        followerRef.current.animate({
          transform: `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`
        }, {
          duration: 500,
          fill: "forwards"
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999]" 
      />
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-indigo-500 rounded-full pointer-events-none z-[9998] opacity-50 transition-transform duration-200 ease-out"
      />
    </>
  );
}
