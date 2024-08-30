import useRestaurantMenu from "../utils/useRestaurantMenu";
import ReastaurantMenuListAccordion from "./ReastaurantMenuListAccordion";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ReastaurantMenu = () => {
  const { resId } = useParams();

  // Used hook here instead of fetching code
  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <Shimmer />;

  //getting info
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  // console.log(
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card
  // );

  // Getting list of menus to create accordion menu
  const menuCategoriesList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(menuCategoriesList);

  // // getting menu list - destructured menu list
  // let [FIND] =
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (crd) => crd.card.card.title === "Recommended"
  //   );

  // const itemCards = FIND && FIND.card?.card.itemCards;
  // // resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  // //   ?.card;

  return (
    <div className="max-w-[750px] w-[60%]  px-4 m-auto ">
      <h1 className="font-bold text-2xl my-4 text-gray-800">{name}</h1>
      <p className="text-sm py-1 bg-gray-50 w-max font-bold text-red-300">
        {cuisines.join(", ")}
      </p>
      <p className="m-4 font-semibold text-xl text-green-400">
        {costForTwoMessage}
      </p>
      <ul className=" flex flex-col bg-gray-100">
        {menuCategoriesList.map((MCL, idx) => (
          <ReastaurantMenuListAccordion key={idx} data={MCL?.card?.card} />
        ))}
      </ul>
    </div>
  );
};

export default ReastaurantMenu;

// RestaurantMenu.js
