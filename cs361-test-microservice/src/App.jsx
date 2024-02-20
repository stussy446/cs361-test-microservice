import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [card, setCard] = useState({});

  const URL = "https://cs361-microservice.onrender.com/yugioh";

  const getRandomCard = () => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setCard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={getRandomCard} type="button" className="btn btn-primary">
        Generate Random Card
      </button>
      <Card card={card} />
    </>
  );
}

export default App;
