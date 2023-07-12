import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getItemCount } from "../cart/cartSlice";
import { nanoid } from "nanoid";
import UpdateCounterItem from "../cart/UpdateCounterItem";
import { RiStarSFill } from "react-icons/ri";

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
    <div className="flex flex-col justify-between border border-b-2 px-4 py-4 rounded-md shadow-sm ">
      <form onSubmit={AddtoCart}>

        <div className="flex justify-center items-center">
          <img src={image} alt="" className=" w-24 h-12self-center" />
        </div>
        <h1 className="font-semibold py-2">{title}</h1>
        <p>${price}</p>
        <p className="flex items-center">{rating.rate}<RiStarSFill className="text-yellow-400" /><span className="text-slate-600">({rating.count})</span></p>
        {ItemCount ? "" : <button>Add to Cart</button>}
      </form>
      <div className="">

        {!ItemCount ? (
          ""
        ) : (
          <UpdateCounterItem itemID={id} currentCount={ItemCount} />
        )}
      </div>
    </div>
  );
};

export default ShopItemsCard;
