import React from 'react';
import Banner_img from '/Fortune.jpg';
function Banner() {
    return (
        <>
            <div className='flex justify-center  w-full max-h-120 p-10 '>
                <div >
                    <div className='flex-col justify-center items-center align-middle absolute z-20 p-2.5'>
                        <p className='text-our-lg font-extrabold '>命運</p>
                        <p className='text-our-lg font-extrabold mt-[-20px]'>食間</p>
                    </div>
                </div>
                <div className="absolute  h-full p-10 bg-our-white opacity-50 rounded-2xl max-w-screen-xl w-full max-h-[400px] z-10"></div>
                <img src={Banner_img} alt="Banner" className="max-w-screen-xl rounded-2xl w-full object-cover" />
            </div>
            <div className='flex justify-center  w-full max-h-120 p-10 align-bottom'>
                <div className="carousel w-full ">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                            className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                            className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            className="w-full" />
                    </div>
                </div>
                <div className="flex w-full gap-2 py-2 absolute z-30 justify-center">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </>
    );
} export default Banner;