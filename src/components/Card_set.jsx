import Card from "./card";

function Card_set({ className, pick = [], data }) {
  console.log("Card_set - received data:", data);

  // 確保 data 是一個陣列，如果不是則設為空陣列
  const validData = Array.isArray(data) ? data : [];

  // 如果 pick 是空的，就顯示所有；如果有值，就篩選符合的
  const cardsToShow = pick.length === 0
    ? validData
    : validData.filter((item) => pick.includes(item.id));

  return (
    <div className={className}>
      {cardsToShow.map((card) => (
        <Card key={card.name} store={card} />
      ))}
    </div>
  );
}

export default Card_set;
