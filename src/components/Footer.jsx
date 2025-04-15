function Footer() {
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

            <div className="flex gap-32 font-light p-6 align-middle justify-center">
                <a href="#" className="text-our-sm font-medium">
                    最新消息
                </a>
                <a href="#" className="text-our-sm font-medium">
                    全部食間
                </a>
                <a href="#" className="text-our-sm font-medium">
                    命運食間
                </a>
                <a href="#" className="text-our-sm font-medium">
                    我的食間
                </a>

            </div>
            <hr className="border-our-white w-250 p-2.5 " />
            <p className="font-extralight">Copyright belongs to James + Qian team</p>
        </footer>
    );
} export default Footer;