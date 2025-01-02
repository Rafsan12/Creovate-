import { useState } from "react";
import { Link } from "react-router-dom";
import Website from "./Website";

/* eslint-disable react/prop-types */
export default function Websites({ websiteProducts }) {
  const [showAll, setShowAll] = useState(false);
  const displayedWebsite = showAll
    ? websiteProducts
    : websiteProducts.slice(0, 3);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-transparent bg-white-gradient-text bg-clip-text animate-gradient-move">
          Website
        </h2>
        <Link to="/allWebsite" state={{ websiteProducts }}>
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-outline btn-success"
          >
            Browse All
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {displayedWebsite.map((website) => (
          <Website key={website.id} website={website} />
        ))}
      </div>
    </div>
  );
}
