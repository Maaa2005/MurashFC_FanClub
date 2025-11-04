import React, { useState } from 'react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: '決済方法は？',
    answer: 'クレジットカード決済 (VISA, MasterCard, JCB, AMEX, Diners) に対応しています。',
  },
  {
    question: '退会方法は？',
    answer: 'FANTSのマイページより、いつでもお手続き可能です。',
  },
  {
    question: 'FANTSとは？',
    answer: '本ファンクラブが利用している、会員管理・決済のためのプラットフォームサービスです。',
  },
];

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-white"
      >
        <span>{item.question}</span>
        <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
            ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            )}
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-5 pr-12">
          <p className="text-base text-gray-300">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-bold leading-10 tracking-tight text-white">
          よくある質問
        </h2>
        <div className="mt-10">
          {faqData.map((item, index) => (
            <FaqAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;