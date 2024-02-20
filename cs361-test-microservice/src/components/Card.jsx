import React from "react";

const Card = ({ card }) => {
  const { name, desc, type, race, attribute } = card;
  return (
    <>
      <div className="card" styles="width: 18rem;">
        <img
          src={card.card_images[0].image_url_small}
          className="card-img-top photo"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Type: {type}</li>
          <li className="list-group-item">Race: {race}</li>
          <li className="list-group-item">Main Attribute: {attribute}</li>
        </ul>
      </div>
    </>
  );
};

export default Card;
