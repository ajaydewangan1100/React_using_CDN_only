import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="w-56 pb-2 rounded-lg bg-gray-100 duration-150 hover:scale-105 flex flex-col items-center">
      <img
        className="max-w-full h-[10%] rounded-t-lg object-contain"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex flex-col p-2 gap-2 w-full  ">
        <div className="flex justify-between ">
          <p className="font-bold text-gray-800">{name}</p>
          <h4 className="text-gray-300 h-min bg-green-700 rounded-sm w-min px-1">
            {avgRatingString}*
          </h4>
        </div>
        <h4 className="text-xs font-semibold">{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

// Higher Order Component

// input- RestaurantCard => PromotedRestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <span className="absolute p-1 px-2 rounded-tl-lg bg-gray-700 text-xs text-white">
          Promoted
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
