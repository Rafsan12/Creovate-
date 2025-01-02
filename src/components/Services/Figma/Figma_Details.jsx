import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Figma_Details() {
  const { id } = useParams();
  const [figma, setFigma] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFigma = async () => {
      try {
        const response = await fetch("/Product.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const result = await response.json();
        const selectedFigma = result.find((item) => item.id === parseInt(id));
        setFigma(selectedFigma);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchFigma();
  }, [id]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!figma) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">{figma?.name}</h1>
      <p>{figma.description}</p>
      <p className="font-bold">{figma.price}</p>
      <p className="text-sm text-gray-500">Category: {figma.category}</p>
    </div>
  );
}
