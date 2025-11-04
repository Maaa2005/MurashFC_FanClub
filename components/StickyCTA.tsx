import React from 'react';

const StickyCTA: React.FC = () => {
  const ctaLink = "https://fants.jp/users/UMs6T-zq/new"; // FANTSの入会・登録ページ (Placeholder URL)

  return (
    <>
      {/* Mobile CTA Banner */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-16 bg-red-600 text-white text-lg font-bold shadow-lg hover:bg-red-700 transition-colors duration-300"
        >
          この物語に参加する
        </a>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-80 h-20 bg-red-600 text-white text-2xl font-bold rounded-lg shadow-2xl hover:bg-red-700 hover:scale-105 transform transition-all duration-300"
        >
          この物語に参加する
        </a>
      </div>
    </>
  );
};

export default StickyCTA;