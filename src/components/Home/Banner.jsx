import React from 'react';
import Banner_img from '/Fortune.jpg';
function Banner(){
    return(
        <div className='flex justify-center  bg-our-secondary w-full max-h-120 '>
            <img src={Banner_img} alt="Banner" className="max-w-screen-xl rounded-2xl w-full " />
        </div>
    );
}export default Banner;