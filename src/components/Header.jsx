import { Link, NavLink } from 'react-router';
import { useState } from 'react';

import Logo from '/Logo.svg';
import Scearch from '/Scearch.svg';
import User from '/user.svg'

function Header() {
    const navBarContent = [
        { to: "/", label: "最新消息" },
        { to: "/All", label: "全部食間" },
        { to: "/Wheel", label: "命運食間" },
        { to: "/", label: "我的食間" },
    ];

    const NavBarContent = () => (
        <div className='flex lg:items-center lg:gap-15 text-base'>
            {navBarContent.map(({to, label}) => (
                <NavLink
                    key={to}
                    to={to}
                    className={"text-our-sm text-gray-700 hover:text-our-black dark:hover:text-blue-400 transition-colors"}
                >
                    {label}
                </NavLink>
            ))}
        </div>
    );

    return (
        <div className="min-h-25 flex flex-row items-center justify-center shadow-md h-20 bg-our-primary sticky top-0 z-100">
            <div className='flex flex-row items-center justify-between gap-10 max-w-screen-xl w-full px-8'>
                <Link to="/" className="flex items-center ">
                    <img src={Logo} alt="Logo" className="h-15" />
                    <h1 className='flex items-center font-bold text-our-md '>食間 Eatime</h1>
                </Link>

                <nav className="flex items-center gap-15 ">
                    <div className='flex items-center gap-15 text-base'>
                        <NavBarContent/>
                    </div>
                    <div className='flex items-center gap-10'>
                        <a href='#' className='flex items-center justify-center w-9 '> {/* 這是我們第一次使用負margin值得鼓勵 */}
                            <img src={Scearch} />
                        </a>

                        <a href='#' className='flex items-center justify-center w-12'>
                            <img src={User} />
                        </a>
                    </div>
                    

                </nav>


            </div>
        </div>
    );
} export default Header;
