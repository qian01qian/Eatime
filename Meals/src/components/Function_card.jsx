import React from 'react';
import { useNavigate } from 'react-router-dom';


const cards = [
  {
    title: ['最新', '消息'],
    buttonText: '由此關心',
    image:'/news.jpg', 
    link: '/news',
  },
  {
    title: ['全部', '食間'],
    buttonText: '由此查看',
    image: '/Fortune.jpg', 
    link: '/all',
  },
  {
    title: ['我的', '食間'],
    buttonText: '由此查看',
    image: '/mine.jpg',
    link: '/my',
  },
];

function FunctionCard() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-screen-xl mx-auto  py-3 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden h-[300px] cursor-pointer group"
        >
          {/* 背景圖片 */}
          <img
            src={card.image}
            alt="card background"
            className="w-full h-full object-cover"
          />

          {/* 灰色濾鏡 */}
          <div className="absolute inset-0 bg-white opacity-50 group-hover:opacity-60 transition duration-300 z-10" />

          {/* 文字 + 按鈕 */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-black">
            <p className="text-[70px] font-bold">{card.title[0]}</p>
            <p className="text-[70px] font-bold mt-[-10px]">{card.title[1]}</p>
            <button
              onClick={() => navigate(card.link)}
              className="mt-4 bg-[#F9C9A9] px-6 py-2 rounded-full shadow hover:scale-105 transition-transform text-[23px] font-bold w-55 h-11 flex items-center justify-center"
            >
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FunctionCard;
