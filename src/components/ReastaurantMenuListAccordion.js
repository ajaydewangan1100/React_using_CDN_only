import ItemList from "./ItemListMenuAccordion";

const ReastaurantMenuListAccordion = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-white shadow-md mb-2 p-3">
      {/* Heading */}
      <div className="flex items-center justify-between mb-4 rounded-lg">
        <span className="font-bold text-base">
          {data.title} ({data?.itemCards?.length})
        </span>
        <button className="p-1 border rounded">🔽</button>
      </div>

      {/* According body */}
      <ItemList data={data.itemCards} />
    </div>
  );
};

export default ReastaurantMenuListAccordion;
