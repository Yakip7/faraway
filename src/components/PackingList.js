import { useState } from "react";
import Item from "./Item";

//PackingList
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="packlist">
      <div className="packlist__header">List</div>
      <div>
        <ul className="list">
          {sortedItems.map((i) => (
            <Item
              item={i}
              key={i.id}
              onDeleteItem={onDeleteItem}
              onToggleItems={onToggleItems}
            />
          ))}
        </ul>
        <div className="sorting">
          <select
            className="sortby"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button className="clear__list" onClick={onClearList}>
            Clear list
          </button>
        </div>
      </div>
    </div>
  );
}
