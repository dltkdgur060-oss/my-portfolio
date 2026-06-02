'use client';

export default function TopFloatingButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-10 right-10 z-50 
        flex items-center justify-center 
        w-14 h-14 rounded-full overflow-hidden group 
        transition-all duration-300 hover:scale-110 active:scale-90 
      "
      style={{ 
        background: 'rgba(255, 255, 255, 0.2)', 
        backdropFilter: 'blur(12px)', 
        border: '1px solid rgba(0, 0, 0, 0.1)', 
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)' 
      }}
    >
      <div className="
        absolute inset-0 
        bg-gradient-to-tr from-white/10 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity
      " />
      <svg 
        width="24" height="24" viewBox="0 0 24 24" fill="none" 
        className="
          z-10 
          transition-transform group-hover:-translate-y-1 
        "
      >
        <path 
          d="M12 19V5M12 5L5 12M12 5L19 12" 
          stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}