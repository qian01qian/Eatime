import eatime_json from "../../eatime_full_data_reindexed.json"

function Filter({state}) {
    const checkBoxContent = [
        {
            checkGroup: "種類",
            item: ["正餐", "點心", "飲料"]
        },
        {
            checkGroup: "時間",
            item: ["早上 (6-11)", "中午 (11-16)", "晚上 (16-21)", "凌晨 (21-2)"]
        },
        {
            checkGroup: "平均價格",
            item: ["100以內", "100 - 150", "150 - 200", "250以上"]
        },
        {
            checkGroup: "主食",
            item: ["飯", "麵", "其他"]
        }
    ];

    const handleCheckboxChange = (e) => {
        
    }

    return (
        <div className="flex flex-col">
            {checkBoxContent.map((x, i)=>(
                    <div className="flex flex-col text-xl mb-4">
                    {x.item.map((y, j) => (
                        <div className="flex">
                            <input type="checkbox" id={y} name={x.checkGroup} value={j} onChange={handleCheckboxChange}/>
                            <label for={y}>{y}</label>
                        </div>
                    ))}
                </div>
            ))} 
        </div>
    );
}
export default Filter;