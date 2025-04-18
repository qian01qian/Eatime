import { Link, NavLink } from 'react-router';

function Footer() {
    const footerSiteMapContent = [
        { to: "/", label: "最新消息" },
        { to: "/All", label: "全部食間" },
        { to: "/Wheel", label: "命運食間" },
        { to: "/", label: "我的食間" },
    ];

    const FooterSiteMapContent = () => (
        <div className="flex gap-32 font-light p-6 align-middle justify-center">
            {footerSiteMapContent.map(({to, label}) => (
                <NavLink
                    key={to}
                    to={to}
                    className={"text-our-sm font-medium"}
                >
                    {label}
                </NavLink>
            ))}
        </div>
    );

    return (

        <footer className="bg-our-black text-our-white py-4 text-center flex items-center justify-center flex-col h-85">
            <div className="p-6">
                <p className="text-our-md font-extrabold" >
                    食間
                </p>
                <p className="text-our-md font-extrabold">
                    Eatime
                </p>
            </div>
            <FooterSiteMapContent/>
            <hr className="border-our-white w-250 p-2.5 " />
            <p className="font-extralight">Copyright belongs to James + Qian team</p>
        </footer>
    );
} export default Footer;