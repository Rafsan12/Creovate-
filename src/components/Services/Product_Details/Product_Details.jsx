import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product_Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/Product.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const result = await response.json();
        const selectedProduct = result.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">{product?.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">{product.price}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
}
