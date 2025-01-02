import { useEffect, useState } from "react";
import Figmas from "./Figma/Figmas";
import Graphics from "./Graphic/Graphics";
import Videos from "./Video/Videos";
import Websites from "./Website/Websites";

export default function Services() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("Product.json");
      const result = await response.json();
      setProducts(result);
    };
    fetchProduct();
  }, []);
  const videoProducts = products.filter(
    (product) => product.category === "Video"
  );
  const websiteProducts = products.filter(
    (product) => product.category === "Website"
  );

  const graphicProducts = products.filter(
    (product) => product.category === "Graphic"
  );
  const figmaProducts = products.filter(
    (product) => product.category === "Figma"
  );
  return (
    <>
      <h1 className="text-center text-4xl">Our Product ({products.length})</h1>
      <div>
        <Figmas figmaProducts={figmaProducts} />
        <div className="h-1 w-full opacity-20 bg-horizontal-gradient mb-4"></div>
        <Websites websiteProducts={websiteProducts} />
        <div className="h-1 w-full opacity-20 bg-horizontal-gradient mb-4"></div>
        <Graphics graphicProducts={graphicProducts} />
        <div className="h-1 w-full opacity-20 bg-horizontal-gradient mb-4"></div>
        <Videos videoProducts={videoProducts} />
      </div>
    </>
  );
}
