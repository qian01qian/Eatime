function Card({ store : x  }) {
    return (
        <div className="card bg-gradient-to-b from-purple-300 to-white shadow-md min-w-[250px] h-[220px] border-[]">
            <figure>
                <img
                    src={x.img}
                    alt="store_img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-center m-auto">{/* 為什不能用 flexbox justify-contents-center 將標題置中*/}
                    {x.name}
                </h2>
            </div>
        </div>
    );
} 
export default Card;