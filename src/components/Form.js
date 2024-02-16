import { useState } from "react";

//Form
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(0);
  }

  function handleClick() {}

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>What do you need for trip</div>
      <select
        className="select__quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="input__item"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button className="btn__add" onClick={handleClick}>
        Add
      </button>
    </form>
  );
}
