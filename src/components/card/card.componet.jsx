import "./card.styles.css";

const Card = ({ cardData: { username, id, name, address, company } }) => {
  return (
    <div className="card-container" key={id}>
      <h2 className="card-name">Hello {username}</h2>
      <div className="card-data">
        <h4>Contact</h4>
        <p>{name}</p>
      </div>
      <div className="card-data">
        <h4>City</h4>
        <p>{address.city}</p>
      </div>

      <button>View Details</button>
    </div>
  );
};

export default Card;
