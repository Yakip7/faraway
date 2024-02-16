//Stats
export default function Stats({ items }) {
  if (!items.length) {
    return <div className="stats">Start adding items to your list</div>;
  }
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  return (
    <div className="stats">
      You have {numItems} items for your trip and its{" "}
      {Math.round((100 / numItems) * numPacked)} %
    </div>
  );
}
