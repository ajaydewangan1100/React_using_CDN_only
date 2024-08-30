import { useState } from "react";
import ItemList from "./ItemListMenuAccordion";

const ReastaurantMenuListAccordion = ({ data }) => {
  console.log(data);

  const [expand, setExpand] = useState(false);

  return (
    <div className="bg-white shadow-md mb-2 p-3  rounded-lg">
      {/* Heading */}
      <div
        className="flex items-center justify-between  rounded-lg cursor-pointer"
        onClick={() => setExpand((expand) => !expand)}>
        <span className="font-bold text-base">
          {data.title} ({data?.itemCards?.length})
        </span>
        <button className="p-1 border rounded">🔽</button>
      </div>

      {/* According body */}
      {expand && <ItemList data={data.itemCards} />}
    </div>
  );
};

export default ReastaurantMenuListAccordion;
