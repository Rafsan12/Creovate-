import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Video_Details() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch("/Product.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const result = await response.json();
        const selectedVideo = result.find((item) => item.id === parseInt(id));
        setVideo(selectedVideo);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchVideo();
  }, [id]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!video) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">{video?.name}</h1>
      <p>{video.description}</p>
      <p className="font-bold">{video.price}</p>
      <p className="text-sm text-gray-500">Category: {video.category}</p>
    </div>
  );
}
