import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Graphic_Details() {
  const { id } = useParams();
  const [graphic, setGraphic] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGraphic = async () => {
      try {
        const response = await fetch("/Product.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const result = await response.json();
        const selectedGraphic = result.find((item) => item.id === parseInt(id));
        setGraphic(selectedGraphic);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchGraphic();
  }, [id]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!graphic) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">{graphic?.name}</h1>
      <p>{graphic.description}</p>
      <p className="font-bold">{graphic.price}</p>
      <p className="text-sm text-gray-500">Category: {graphic.category}</p>
    </div>
  );
}
