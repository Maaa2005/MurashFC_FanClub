import React from 'react';
import kato1 from '../kato1.jpg';
import kato2 from '../kato2.jpg';
import kato3 from '../kato3.jpg';

const storyImages = [
  { name: kato1, caption: 'チームの結束・歓喜' },
  { name: kato2, caption: 'オーナーのガッツポーズ・熱量' },
  { name: kato3, caption: 'PK失敗の苦悩・当事者性' },
];

const PrologueSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#1A1A1A] to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-red-600">
            不可能を、熱量で覆せ。
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-8">
            「カネ」や「名声」ではない。「熱い思い」だけが、プロを動かし、<br />
            「夢物語」を現実に変える。これは筋書きのない「ドキュメンタリー」だ。
          </p>
        </div>
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="w-full overflow-hidden rounded-lg shadow-2xl border border-gray-800 aspect-video">
            <div 
              className="flex animate-marquee"
              style={{ width: `${storyImages.length * 2 * 100}%` }}
            >
              {[...storyImages, ...storyImages].map((image, index) => (
                <div 
                  key={index} 
                  className="w-full h-full flex-shrink-0" 
                  style={{ width: `${100 / (storyImages.length * 2)}%` }}
                >
                  <img
                    src={image.name}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrologueSection;