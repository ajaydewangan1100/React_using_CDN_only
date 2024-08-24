import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_FETCH_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const ReastaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();
  //   console.log(params);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      RES_MENU_FETCH_API[0] + params.resId + RES_MENU_FETCH_API[1]
    );
    const jsonData = await data.json();
    setResInfo(jsonData);
  };

  if (resInfo == null) return <Shimmer />;

  //getting info
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card
  );
  // getting menu list - destructured menu list
  let [FIND] =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (crd) => crd.card.card.title === "Recommended"
    );

  const itemCards = FIND && FIND.card?.card.itemCards;
  // resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //   ?.card;

  return (
    <div className="Res-menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards &&
          itemCards?.map((itm) => {
            return (
              <li key={itm.card.info.id}>
                {itm.card.info.name} - Rs.
                {itm.card.info.finalPrice / 100 ||
                  itm.card.info.defaultPrice / 100 ||
                  itm.card.info.price / 100}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ReastaurantMenu;

// RestaurantMenu.js
