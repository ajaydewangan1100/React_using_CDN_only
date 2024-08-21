import RestrourantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      {/* <div className="search-container">search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.1
            );
            setRestaurantList(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((c_data, index) => (
          <RestrourantCard key={c_data.info.id} resData={c_data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
