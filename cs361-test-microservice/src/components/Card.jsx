import React from "react";

const Card = ({ card }) => {
  return (
    <>
      <div className="card" styles="width: 18rem;">
        <img
          src={card.card_images[0].image_url_small}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Placeholder</h5>
          <p className="card-text">description</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </>
  );
};

export default Card;
