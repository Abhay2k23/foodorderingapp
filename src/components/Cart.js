import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utls/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();
  const handlerClearCart = () => {
    return dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handlerClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty!!! </h1>}
        <ItemList items={cartItems} />
        {console.log(<ItemList items={cartItems} />)}
      </div>
    </div>
  );
};
