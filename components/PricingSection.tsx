import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#1A1A1A] text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
          料金プラン
        </h2>
        <div className="mt-12 bg-black/50 border border-gray-800 rounded-xl p-8 md:p-12 max-w-2xl mx-auto">
          <p className="text-gray-300 text-base tracking-widest">MONTHLY</p>
          <p className="mt-4 font-display text-6xl md:text-7xl font-bold text-red-600 tracking-tight">
            ¥3,300
          </p>
          <p className="mt-2 text-base text-gray-400">
            (税込)
          </p>
          <p className="mt-8 mx-auto text-base text-gray-300 leading-7">
            全ての限定コンテンツと企画への参加権利が含まれます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;