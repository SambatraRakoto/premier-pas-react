import { useState } from "react";
function App() {
  //States : état,données
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState([
    { id: 1, nom: "apple" },
    { id: 2, nom: "banana" },
    { id: 3, nom: "orange" },
    { id: 4, nom: "grape" },
    { id: 5, nom: "kiwi" },
    { id: 6, nom: "mango" },
    { id: 7, nom: "peach" },
    { id: 8, nom: "pear" },
  ]);
  const [nouveauFruit, setNouveauFruit] = useState("");
  //comportement
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDelete = (id) => {
    //1. Copie du State
    const FruitsCopy = [...fruits];
    //2. Manipulation de la copie du State
    const FruitsCopyUptated = FruitsCopy.filter((fruit) => fruit.id !== id);
    //3. Mise à jour du State
    setFruits(FruitsCopyUptated);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //1. Copie du State
    const FruitsCopy = [...fruits];
    //2. Manipulation de la copie du State
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const newFruit = { id, nom };
    FruitsCopy.push(newFruit);
    //3. Mise à jour du State
    setFruits(FruitsCopy);
    setNouveauFruit("");
  };
  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };
  //Affichage
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}
            <button onClick={() => handleDelete(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un nouvel fruit"
          onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    </div>
  );
}

export default App;
