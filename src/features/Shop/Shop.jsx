import { useEffect, useState } from "react";
import ShopItems from "./ShopItems";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Items, setItems] = useState([]);
  useEffect(function () {
    async function getShoes() {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
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
  }, []);
  return (
    <div>
      <>{isLoading ? "Loading..." : <ShopItems items={Items} />}</>
    </div>
  );
};

export default Shop;
