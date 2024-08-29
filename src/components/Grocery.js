const Grocery = () => {
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="font-bold text-2xl text-gray-800">Grocery List</h1>
      <ul className="px-4 text-red-950">
        <li>Bread</li>
        <li>Milk</li>
        <li>Eggs</li>
        <li>Butter</li>
        <li>Chocolate</li>
        <li>Apples</li>
        <li>Oranges</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

export default Grocery;
