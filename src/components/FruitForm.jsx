import React, { useState } from "react";


export default function FruitForm({handleAdd}) {
  //state
  const [nouveauFruit, setNouveauFruit] = useState("");


  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents the page from refresh
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    handleAdd(fruitAAjouter);
    //fruitsCopy.push(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

    // affichage (render)
    return (      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="input a fruit"
          onChange={handleChange}
        />
        <button> Add +</button>
      </form>);
};