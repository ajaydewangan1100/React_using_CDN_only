// import { useSelector } from "react-redux";

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemListMenuAccordion";
import { clearCart } from "../store/cartSlice";

//
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-[750px] rounded-lg shadow-lg p-4 m-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Cart</h1>
        {cartItems.length !== 0 && (
          <button
            onClick={() => {
              handleClearCart();
            }}
            className="bg-gray-50 text-yellow-600 px-2 py-1 rounded-md font-bold hover:text-white hover:bg-yellow-600 duration-150 border border-black">
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <h1 className="m-auto p-3 ">
          Cart 🛒 is empty, Add items to the Cart!
        </h1>
      )}
      <ItemList data={cartItems} />
    </div>
  );
};

export default Cart;
