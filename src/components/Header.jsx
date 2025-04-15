import Logo from '/Black_Logo.svg';
import { useState } from 'react';
function Header() {

    return (
        <div className="min-h-20 flex flex-row items-center justify-between bg-white shadow-md h-20">
            <div className='flex flex-row items-center justify-between gap-10 ml-15'>
                <div className="flex items-center ">
                    <img src={Logo} alt="Logo" className="h-15" />
                </div>

                <nav className="flex gap-15 text-base">
                    <a href="" className="text-gray-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        附近美食
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        交給命運
                    </a>
                    <a href="#" className="text-gray-700  hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        篩選器
                    </a>
                </nav>
            </div>
        </div>
    );
} export default Header;
