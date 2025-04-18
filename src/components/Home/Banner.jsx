import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImg from '/wheel.jpg';

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-auto max-w-screen-xl mx-auto overflow-hidden my-10">
      {/* 背景圖片 */}
      <img
        src={BannerImg}
        alt="Banner"
        className="w-full h-[500px] sm:h-[550px] md:h-[550px] lg:h-[400px] object-cover rounded-xl"
      />

      {/* 半透明遮罩 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(255,255,255,0.95),rgba(255,255,255,0.4))] z-10 rounded-xl" />

      {/* 文字層 */}
      <div className="absolute inset-0 z-20 flex flex-col lg:flex-row justify-between items-center px-6  md:px-10 py-8 gap-4">
        {/* 左側標題 */}
        <div className="w-full lg:w-1/2 text-black flex flex-col text-center lg:text-center md:m-auto sm:m-auto">
          <p className="text-[96px] sm:text-[120px] md:text-[70px] lg:text-[110px] font-extrabold leading-tight">命運</p>
          <p className="text-[96px] sm:text-[120px] md:text-[70px] lg:text-[110px] font-extrabold -mt-2">食間</p>
        </div>

        {/* 右側副標 & 按鈕 */}
        <div className="w-full lg:w-1/2 text-black flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-2xl md:text-4xl font-semibold mb-6">食間，由命運決定</p>
          <button
            onClick={() => navigate('/Wheel')}
            className="bg-[#F9C9A9] text-black px-6 py-2 rounded-full shadow hover:scale-105 transition-transform w-48 h-12 font-bold text-our-sm flex items-center justify-center"
          >
            由此決定 →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
