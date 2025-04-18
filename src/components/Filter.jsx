import eatime_json from "../../eatime_full_data_reindexed.json"
import { useDispatch } from "react-redux";
import { addNumber, removeNumber } from "../redux/filterAllSlice";

function Filter({state}) {
    const dispatch = useDispatch();

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
        if(e.target.checked){
            if(e.target.name == checkBoxContent[0].checkGroup){
                const filt = eatime_json.filter(x => x.category == e.target.value)
                const output = filt.map(({ID})=> (ID))
                dispatch(addNumber(output))
            }else if(e.target.name == checkBoxContent[1].checkGroup) {

            }else if(e.target.name == checkBoxContent[2].checkGroup) {
                
            }else if(e.target.name == checkBoxContent[3].checkGroup) {
                
            }
        }else {
            if(e.target.name == checkBoxContent[0].checkGroup){
                const filt = eatime_json.filter(x => x.category == e.target.value)
                const output = filt.map(({ID})=> (ID))
                dispatch(removeNumber(output))
            }else if(e.target.name == checkBoxContent[1].checkGroup) {

            }else if(e.target.name == checkBoxContent[2].checkGroup) {
                
            }else if(e.target.name == checkBoxContent[3].checkGroup) {
                
            }
        }
    }

    return (
        <div className="flex flex-col gap-15 flex-start self-start h-full mr-8">
            {checkBoxContent.map((x, i)=>(
                    <div className="flex flex-col text-xl mb-4 gap-5">
                    {x.item.map((y, j) => (
                        <div className="flex">
                            <input type="checkbox" defaultunCheck className="checkbox  bg-our-white checked:bg-our-secondary text-our-md mr-3"id={y} name={x.checkGroup} value={j} onChange={handleCheckboxChange} />
                            <label for={y}>{y}</label>
                        </div>
                    ))}
                </div>
            ))} 
        </div>
    );
}
export default Filter;