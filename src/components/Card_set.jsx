import eatime_json from "../../eatime_full_data_reindexed.json";
import Card from "./Card";

function Card_set({ className, pick = [] }) {
  // 如果 pick 是空的，就顯示所有；如果有值，就篩選符合的
  const cardsToShow = pick.length === 0
    ? eatime_json
    : eatime_json.filter((item) => pick.includes(item.ID));

  return (
    <div className={className}>
      {cardsToShow.map((card) => (
        <Card key={card.ID} store={card} />
      ))}
    </div>
  );
}

export default Card_set;
