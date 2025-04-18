// import { Link, NavLink } from 'react-router';

// function Footer() {
//     const footerSiteMapContent = [
//         { to: "/", label: "最新消息" },
//         { to: "/All", label: "全部食間" },
//         { to: "/Wheel", label: "命運食間" },
//         { to: "/", label: "我的食間" },
//     ];

//     const FooterSiteMapContent = () => (
//         <div className="flex gap-32 font-light p-6 align-middle justify-center sm:flex-">
//             {footerSiteMapContent.map(({to, label}) => (
//                 <NavLink
//                     key={to}
//                     to={to}
//                     className={"text-our-sm font-medium"}
//                 >
//                     {label}
//                 </NavLink>
//             ))}
//         </div>
//     );

//     return (

//         <footer className="bg-our-black text-our-white py-4 text-center flex items-center justify-center flex-col h-85">
//             <div className="p-6">
//                 <p className="text-our-md font-extrabold" >
//                     食間
//                 </p>
//                 <p className="text-our-md font-extrabold">
//                     Eatime
//                 </p>
//             </div>
//             <FooterSiteMapContent/>
//             <hr className="border-our-white w-250 p-2.5 " />
//             <p className="font-extralight">Copyright belongs to James + Qian team</p>
//         </footer>
//     );
// } export default Footer;



import { NavLink } from "react-router-dom"; // ✅ 改對來源，因為要用 react-router-dom 才對！

function Footer() {
  const footerSiteMapContent = [
    { to: "/", label: "最新消息" },
    { to: "/All", label: "全部食間" },
    { to: "/Wheel", label: "命運食間" },
    { to: "/", label: "我的食間" },
  ];

  const FooterSiteMapContent = () => (
    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 font-light p-6">
      {footerSiteMapContent.map(({ to, label }) => (
        <NavLink
          key={to + label}
          to={to}
          className="text-our-sm font-medium hover:underline"
        >
          {label}
        </NavLink>
      ))}
    </div>
  );

  return (
    <footer className="bg-our-black text-our-white py-6 text-center flex flex-col items-center justify-center space-y-4">
      <div>
        <p className="text-our-md font-extrabold">食間</p>
        <p className="text-our-md font-extrabold">Eatime</p>
      </div>

      <FooterSiteMapContent />

      <hr className="border-our-white w-2/3" />

      <p className="text-xs font-extralight mt-2">
        Copyright belongs to James + Qian team
      </p>
    </footer>
  );
}

export default Footer;
