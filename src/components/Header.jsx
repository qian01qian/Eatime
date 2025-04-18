import { Link, NavLink } from 'react-router';
import { useState } from 'react';

import Logo from '/Logo.svg';
import Scearch from '/Scearch.svg';
import User from '/user.svg';

function Header() {
    const navBarContent = [
        { to: "/", label: "最新消息" },
        { to: "/All", label: "全部食間" },
        { to: "/Wheel", label: "命運食間" },
        { to: "/", label: "我的食間" },
    ];

    const NavBarContent = () => (
        <>
            {navBarContent.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={"text-our-sm text-gray-700 hover:text-our-black dark:hover:text-blue-400 transition-colors"}
                >
                    {label}
                </NavLink>
            ))}
        </>
    );

    return (
        <div className="drawer drawer-end">
            <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* 🧱上方導覽列 */}
                <div className="min-h-25 flex flex-row items-center justify-center shadow-md h-20 bg-our-primary sticky top-0 z-90">
                    <div className='flex flex-row items-center justify-between gap-10 max-w-screen-xl w-full px-8'>

                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img src={Logo} alt="Logo" className="h-15" />
                            <h1 className='flex items-center font-bold text-our-md sm:text-our-sm'>食間 Eatime</h1>
                        </Link>

                        {/* 桌機版選單 */}
                        <nav className="hidden lg:flex items-center gap-15">
                            <div className='flex items-center gap-15 text-base'>
                                <NavBarContent />
                            </div>
                            <div className='flex items-center gap-10'>
                                <a href='#' className='flex items-center justify-center w-9'>
                                    <img src={Scearch} />
                                </a>
                                <a href='#' className='flex items-center justify-center w-12'>
                                    <img src={User} />
                                </a>
                            </div>
                        </nav>

                        {/* 📱手機版漢堡選單（靠右） */}
                        <div className="lg:hidden">
                            <label htmlFor="nav-drawer" className="btn btn-ghost btn-square  z-90">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* 📱手機版側邊欄選單 */}
            <div className="drawer-side z-120">
                <label htmlFor="nav-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-200 text-base-content gap-4">
                    <NavBarContent />
                    <hr />
                    <li>
                        <a href="#"><img src={Scearch} className="inline w-6 mr-2" />搜尋</a>
                    </li>
                    <li>
                        <a href="#"><img src={User} className="inline w-6 mr-2" />使用者</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
