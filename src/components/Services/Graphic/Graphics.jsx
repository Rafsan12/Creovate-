import { useState } from "react";
import { Link } from "react-router-dom";
import Graphic from "./Graphic";

/* eslint-disable react/prop-types */
export default function Graphics({ graphicProducts }) {
  const [showAll, setShowAll] = useState(false);
  const displayedGraphic = showAll
    ? graphicProducts
    : graphicProducts.slice(0, 3);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-transparent bg-white-gradient-text bg-clip-text animate-gradient-move">
          Graphic
        </h2>
        <Link to="/allGraphic" state={{ graphicProducts }}>
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-outline btn-success"
          >
            Browse All
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {displayedGraphic.map((graphic) => (
          <Graphic key={graphic.id} graphic={graphic} />
        ))}
      </div>
    </div>
  );
}
