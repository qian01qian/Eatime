import React, { useState } from "react";
import Card from "./card";
import { useEatime } from '../react-query';

function Wheel() {
  const { data, isLoading, isError, error } = useEatime();
  const [picked, setPicked] = useState(() => {
    // 初始隨機一張
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  });

  const handleFindDestiny = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCard = data[randomIndex];
    setPicked(randomCard);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-6 px-4 py-10">
      <h2 className="text-2xl font-bold">命運食間</h2>

      {/* 顯示目前抽到的卡片 */}
      <Card store={picked} />

      {/* 按鈕 */}
      <button
        onClick={handleFindDestiny}
        className="bg-black text-white text-lg px-6 py-2 rounded-full hover:bg-gray-800 transition"
      >
        尋找命運
      </button>
    </div>
  );
}

export default Wheel;
