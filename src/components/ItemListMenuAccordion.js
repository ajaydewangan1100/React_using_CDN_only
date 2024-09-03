import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../store/cartSlice";

const ItemList = ({ data }) => {
  // console.log(data);

  // Creating instance of dispatch
  const dispatch = useDispatch();

  // Handling the action on add item
  const handleAddItem = (item) => {
    // Dispatch the action
    dispatch(addItem(item));
  };

  return (
    <div className="w-full">
      {data.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-3 my-2 flex justify-between items-center border-b-2 rounded-lg border-gray-200 hover:shadow-lg duration-200">
          <div className="py-2 my-2 w-10/12">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-800">
                {item?.card?.info?.name}
              </h3>
              <p className="font-bold text-green-700 m-2">
                &#8377;{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
            </div>
            <p className="mb-2 text-sm text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-2/12 relative">
            <img
              className="max-w-28 w-24 h-24 rounded-xl mx-3 shadow-lg"
              alt="Item Image"
              src={CDN_URL + item?.card?.info?.imageId}
            />
            <button
              onClick={() => {
                handleAddItem(item?.card?.info);
              }}
              className="w-16 absolute py-2  text-xs bottom-[-16] left-[2rem] shadow-xl rounded-md bg-white hover:bg-gray-100 duration-200 ">
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
