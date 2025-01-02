import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Website_Details() {
  const { id } = useParams();
  const [website, setWebsite] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebsite = async () => {
      try {
        const response = await fetch("/Product.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const result = await response.json();
        const selectedWebsite = result.find((item) => item.id === parseInt(id));
        setWebsite(selectedWebsite);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchWebsite();
  }, [id]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!website) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">{website?.name}</h1>
      <p>{website.description}</p>
      <p className="font-bold">{website.price}</p>
      <p className="text-sm text-gray-500">Category: {website.category}</p>
    </div>
  );
}
