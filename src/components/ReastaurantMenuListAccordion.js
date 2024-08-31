import { useState } from "react";
import ItemList from "./ItemListMenuAccordion";

const ReastaurantMenuListAccordion = ({ data, showItems, setShowItems }) => {
  // console.log(data);

  return (
    <div className="bg-white shadow-md mb-2 p-3  rounded-lg">
      {/* Heading */}
      <div
        className="flex items-center justify-between  rounded-lg cursor-pointer"
        onClick={setShowItems}>
        <span className="font-bold text-base">
          {data.title} ({data?.itemCards?.length})
        </span>
        <button
          className={`p-1 rounded duration-300 ${showItems && "rotate-180"}`}>
          🔽
        </button>
      </div>

      {/* According body */}
      {showItems && <ItemList data={data.itemCards} />}
    </div>
  );
};

export default ReastaurantMenuListAccordion;
