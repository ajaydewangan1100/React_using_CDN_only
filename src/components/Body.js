import RestrourantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const josnData = await fetch(SWIGGY_API);
    const { data } = await josnData.json();

    setRestaurantList(
      data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(restaurantList);
    setFilteredList(
      data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  // Adding hook- useOnlineStatus
  const isOnline = useOnlineStatus();

  if (!isOnline)
    return (
      <div>
        <h1>Look's like you're offline!</h1>{" "}
        <p>Please check your internet connection</p>
      </div>
    );

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" m-4 ">
      {/* <div className="search-container">search</div> */}
      <div className="flex gap-4 my-6">
        <div className="flex gap-4">
          <input
            type="text"
            className="border rounded bg-gray-50 hover:bg-gray-100 focus:border-gray-200 appearance-none p-2 w-72"
            placeholder="Search here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-gray-50 hover:bg-yellow-100 rounded-md px-3 py-1"
            onClick={() => {
              const filtered = restaurantList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredList(filtered);
            }}>
            Search
          </button>
        </div>
        <button
          className="bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-1"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.1
            );
            setRestaurantList(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center ">
        {filteredList.map((c_data, index) => (
          <Link key={c_data.info.id} to={"/restaurant/" + c_data.info.id}>
            <RestrourantCard resData={c_data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
