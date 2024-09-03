import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  // calling Higher Order Component as function,
  // and storing return component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  // console.log(restaurantList);

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

  // Dynamic Changeing Data of page from a single place
  const { loggedInName, setDynamicData } = useContext(UserContext);
  // console.log(useContext(UserContext));

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
            className="bg-gray-50 hover:bg-yellow-100 rounded-md px-3 py-1 font-bold text-gray-700"
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
        <div className="flex gap-4">
          <input
            type="text"
            className="border rounded bg-gray-50 hover:bg-gray-100 focus:border-gray-200 appearance-none p-2 w-72"
            placeholder="Type Dynamic User Name Here..."
            value={loggedInName}
            onChange={(e) => {
              setDynamicData((data) => {
                return { ...data, name: e.target.value };
              });
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center ">
        {filteredList.map((c_data, index) => (
          <Link key={c_data.info.id} to={"/restaurant/" + c_data.info.id}>
            {/* Conditionaly render - Higher Order component */}
            {c_data?.info?.avgRating > 4.2 ? (
              <RestaurantCardPromoted resData={c_data} />
            ) : (
              <RestaurantCard resData={c_data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
