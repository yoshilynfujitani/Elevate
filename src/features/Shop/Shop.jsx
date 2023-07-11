import { useEffect, useState } from "react";
import ShopItems from "./ShopItems";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Items, setItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  useEffect(
    function () {
      async function getShoes() {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products${selectedFilter}`
          );
          const result = await response.json();
          setItems(result);
          console.log(result);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      getShoes();
    },
    [selectedFilter]
  );
  return (
    <div className="container px-6">
      <select onChange={(e) => setSelectedFilter(e.target.value)}>
        <option value="">All</option>
        <option value="/category/electronics">Electronics</option>
        <option value="/category/jewelery">Jewelery</option>
        <option value="/category/men's clothing">Men's Clothing</option>
        <option value="/category/women's clothing">Women's Clothing</option>
      </select>
      <>{isLoading ? "Loading..." : <ShopItems items={Items} />}</>
    </div>
  );
};

export default Shop;
