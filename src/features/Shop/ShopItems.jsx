import ShopItemsCard from "./ShopItemsCard";

const ShopItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ShopItemsCard key={item.id} itemDetails={item} />
      ))}
    </div>
  );
};

export default ShopItems;
