
function Page_banner ({image,title}){
    return(
        <div className="relative w-full h-[150px] max-w-screen-xl mx-auto overflow-hidden my-10 ">
              {/* 第一層：背景圖片 */}
              <img
                src={image}
                alt="Banner"
                className="w-full h-full object-cover  rounded-xl"
              />
        
              {/* 第二層：灰色半透明濾鏡 */}
              <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(255,255,255,0.95),rgba(255,255,255,0.4))]  z-10  rounded-xl" />
        
              {/* 第三層：文字層 */}
              <div className="absolute inset-0 z-20 flex justify-between items-center px-10">
                {/* 左側大標題 */}
                <div className="text-black m-auto">
                  <p className="text-our-lg font-extrabold leading-tight text-center">{title}</p>
                </div>
              </div>
            </div>
    );
}export default Page_banner;