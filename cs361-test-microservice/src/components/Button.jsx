import React from "react";

const Button = ({ getRandomCard }) => {
  return (
    <>
      <button onClick={getRandomCard} type="button" className="btn btn-primary">
        Generate Random Card
      </button>
    </>
  );
};

export default Button;
