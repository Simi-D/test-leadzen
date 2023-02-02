import Card from "../card/card.componet";
import "./card-list.styles.css";

const CardList = ({ info }) => (
  <div className="card-list">
    {info.map((cardData) => {
      return <Card cardData={cardData} />;
    })}
  </div>
);

export default CardList;
