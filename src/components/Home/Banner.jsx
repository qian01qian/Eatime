import React from 'react';
import Banner_img from '/Fortune.jpg';
function Banner(){
    return(
        <div className='flex justify-center  w-full max-h-120 p-10 '>
            <div className='flex-col justify-center items-center align-middle absolute z-20 p-2.5'>
                <p className='text-our-lg font-extrabold '>命運</p>
                <p className='text-our-lg font-extrabold mt-[-20px]'>食間</p>
            </div>
            <div >
                <p className='text-our-sm font-extralight text-center mt-[-20px]flex-col justify-center items-center align-middle absolute z-20 p-2.5'>今日的食間由命運決定</p>
            </div>
            <div className="absolute  h-full p-10 bg-our-white opacity-50 rounded-2xl max-w-screen-xl w-full max-h-[400px] z-10"></div>
            <img src={Banner_img} alt="Banner" className="max-w-screen-xl rounded-2xl w-full object-cover" />
        </div>
    );
}export default Banner;