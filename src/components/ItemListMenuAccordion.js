import { CDN_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  console.log(data);

  return (
    <div className="w-full ">
      {data.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-3 my-2 flex justify-between items-center border-b-2 rounded-lg border-gray-200 hover:shadow-lg duration-200">
          <div className="py-2 my-2">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-gray-800">
                {item?.card?.info?.name}
              </h3>
              <p className="font-bold text-green-700 m-2">
                &#8377;{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </p>
            </div>
            <p className="mb-2 text-sm text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <img
            className="max-w-28 w-24 h-24 rounded-xl mx-3 shadow-lg"
            alt="Item Image"
            src={CDN_URL + item?.card?.info?.imageId}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
