import { useState } from "react";
import { Link } from "react-router-dom";
import Video from "./Video";

/* eslint-disable react/prop-types */
export default function Videos({ videoProducts }) {
  const [showAll, setShowAll] = useState(false);
  const displayedVideos = showAll ? videoProducts : videoProducts.slice(0, 3);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-transparent bg-white-gradient-text bg-clip-text animate-gradient-move">
          Videos
        </h2>
        <Link to="/allVideo" state={{ videoProducts }}>
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-outline btn-success"
          >
            Browse All
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {displayedVideos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
