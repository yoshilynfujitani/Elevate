import ShopItemsCard from "./ShopItemsCard";

const ShopItems = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <ShopItemsCard key={item.id} itemDetails={item} />
      ))}
    </div>
  );
};

export default ShopItems;
