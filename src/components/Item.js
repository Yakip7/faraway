//Item

export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li className="list__item">
      <input
        type="checkbox"
        value={item.status}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>

      <button className="item__btn__x" onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
}
