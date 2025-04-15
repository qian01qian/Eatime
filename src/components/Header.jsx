import Logo from '/Logo.svg';
import { useState } from 'react';
import Scearch from '/Scearch.svg';
import User from '/user.svg'
function Header() {

    return (
        <div className="min-h-25 flex flex-row items-center justify-center shadow-md h-20 bg-our-primary">
            <div className='flex flex-row items-center justify-between gap-10 max-w-screen-xl w-full px-8'>
                <div className="flex items-center ">
                    <img src={Logo} alt="Logo" className="h-15" />
                    <h1 className='flex items-center font-bold text-our-md '>食間 Eatime</h1>
                </div>

                <nav className="flex items-center gap-15 text-base">
                    <a href="" className="text-our-sm text-gray-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        最新消息
                    </a>
                    <a href="#" className="text-our-sm text-gray-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        全部食間
                    </a>
                    <a href="#" className="text-our-sm text-gray-700  hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        命運食間
                    </a>
                    <a href="#" className="text-our-sm text-gray-700  hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        我的食間
                    </a>

                    <a href='#' className='flex items-center justify-center w-9 mr-[-35px]'> {/* 這是我們第一次使用負margin值得鼓勵 */}
                        <img src={Scearch} />
                    </a>

                    <a href='#' className='flex items-center justify-center w-12'>
                        <img src={User} />
                    </a>

                </nav>


            </div>
        </div>
    );
} export default Header;
