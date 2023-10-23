export default function Stats({ items }) {
  console.log(items.length);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding Some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and your already packed ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}