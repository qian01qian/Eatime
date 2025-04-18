import eatime_json from "../../eatime_full_data_reindexed.json"
import Card from "./Card"
function Card_set({ className, pick = [] }) {
    return (
        <div className={className}>
            {eatime_json
                .filter((item) => pick.includes(item.ID))
                .map((card) => (
                    <Card key={card.ID} store={card} />
                ))}
        </div>
    );
} export default Card_set;