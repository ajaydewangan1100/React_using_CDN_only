import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_FETCH_API } from "../utils/constants";

const ReastaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_FETCH_API);
    const jsonData = await data.json();
    setResInfo(jsonData);
  };

  if (resInfo == null) return <Shimmer />;

  //getting info
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card
  );
  // getting menu list - destructured menu list
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="Res-menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((itm) => {
          return (
            <li key={itm.card.info.id}>
              {itm.card.info.name} - Rs.
              {itm.card.info.finalPrice / 100 ||
                itm.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReastaurantMenu;

// RestaurantMenu.js
