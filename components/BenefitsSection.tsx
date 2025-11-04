import React from 'react';
import type { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    title: 'チームの"象徴"を共に創る',
    description: '新ユニフォーム、タオル、Tシャツ。ファンクラブ会員限定で、次の公式グッズのデザイン会議に参加。あなたのアイデアが、公式グッズになるかもしれません。',
  },
  {
    title: '"熱量"を共有する',
    description: 'オーナーや選手と直接交流できる、FC会員限定のファンミーティング(不定期開催)へご招待。配信では聞けない裏話や、次の挑戦に向けた作戦会議を共有します。',
  },
  {
    title: '"当事者"の証を手に入れる',
    description: '一般販売されない、FC会員限定デザインのグッズを購入する権利。チームと同じ「当事者」であることの証を、その手に。',
  },
];

const BenefitIcon: React.FC = () => (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    </div>
);


const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            「観客」から「当事者」へ
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col p-8 bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg hover:border-red-600 transition-colors duration-300">
              <BenefitIcon />
              <h3 className="mt-6 text-xl font-bold text-white">{benefit.title}</h3>
              <p className="mt-4 text-base text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;