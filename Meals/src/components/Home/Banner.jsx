import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImg from '/wheel.jpg'; // 替換成你的圖片

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[400px] max-w-screen-xl mx-auto overflow-hidden my-10 ">
      {/* 第一層：背景圖片 */}
      <img
        src={BannerImg}
        alt="Banner"
        className="w-full h-full object-cover  rounded-xl"
      />

      {/* 第二層：灰色半透明濾鏡 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(255,255,255,0.95),rgba(255,255,255,0.4))]  z-10  rounded-xl" />

      {/* 第三層：文字層 */}
      <div className="absolute inset-0 z-20 flex justify-between items-center px-10">
        {/* 左側大標題 */}
        <div className="text-black w-1/2 flex flex-col ">
          <p className="text-our-lg font-extrabold leading-tight text-center">命運</p>
          <p className="text-our-lg font-extrabold mt-[-12px] text-center">食間</p>
        </div>

        {/* 右側副標 + 按鈕 */}
        <div className="text-left  w-1/2  text-black">
          <p className="text-[64px] font-semibold mb-4">食間，由命運決定</p>
          <button
            onClick={() => navigate('/page')}
            className="bg-[#F9C9A9] text-black px-6 py-2 rounded-full shadow hover:scale-105 transition-transform w-48 h-12 font-bold text-our-sm text-center flex items-center justify-center"
          >
            由此決定 →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
