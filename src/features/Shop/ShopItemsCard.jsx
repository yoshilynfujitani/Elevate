import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getItemCount } from "../cart/cartSlice";
import { nanoid } from "nanoid";
import UpdateCounterItem from "../cart/UpdateCounterItem";

const ShopItemsCard = ({ itemDetails }) => {
  const { category, description, image, price, rating, title, id } =
    itemDetails;
  const ItemCount = useSelector(getItemCount(id));
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
      quantity: 1,
    };

    dispatch(addToCart(newItem));
    console.log(ItemCount);
  }
  return (
    <div>
      <form onSubmit={AddtoCart}>
        {title}
        <img src={image} alt="" className="w-12 h-12" />
        {ItemCount ? "" : <button>Add to Cart</button>}
      </form>
      {!ItemCount ? (
        ""
      ) : (
        <UpdateCounterItem itemID={id} currentCount={ItemCount} />
      )}
    </div>
  );
};

export default ShopItemsCard;
