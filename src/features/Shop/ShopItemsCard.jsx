import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { nanoid } from "nanoid";

const ShopItemsCard = ({ itemDetails }) => {
  const { category, description, image, price, rating, title, id } =
    itemDetails;

  const dispatch = useDispatch();

  function AddtoCart(e) {
    e.preventDefault();
    const newItem = {
      id,
      category,
      description,
      image,
      price,

      title,
      count: 1,
    };

    dispatch(addToCart(newItem));
  }
  return (
    <div>
      <form onSubmit={AddtoCart}>
        {title}
        <img src={image} alt="" className="w-12 h-12" />
        <button>Add to Cart</button>
      </form>
    </div>
  );
};

export default ShopItemsCard;
