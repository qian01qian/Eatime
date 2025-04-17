import eatime_json from "../../eatime_full_data_reindexed.json"
import Card from "../components/Card"
function Card_set({className}){
    return(
        <div className={className}>
            {eatime_json.map((card)=>(
                <Card key={card.ID} store={card}/>
            ))}
        </div>
    );
}export default Card_set;