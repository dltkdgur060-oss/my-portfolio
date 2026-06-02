'use client';

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="mx-auto block w-full max-w-[300px] py-4
                bg-[#ffffff] hover:bg-[#fcfcfc] border-1 border-[#ffffff] hover:border-[#eeeeee]
                hover:shadow-md 
                 rounded-3xl text-[#330819] font-medium text-lg tracking-[4px] 
                 transition-colors flex items-center justify-center gap-3"
    >
      BACK TO TOP <img src="/component/naming/icon/arrow-up.svg" alt="Back to Top" className="w-5 h-5 object-contain" />
    </button>
  );
}