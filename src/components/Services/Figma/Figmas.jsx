import { useState } from "react";
import { Link } from "react-router-dom";
import Figma from "./Figma";

/* eslint-disable react/prop-types */
export default function Figmas({ figmaProducts }) {
  const [showAll, setShowAll] = useState(false);
  const displayedFigma = showAll ? figmaProducts : figmaProducts.slice(0, 3);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-transparent bg-white-gradient-text bg-clip-text animate-gradient-move">
          Figma
        </h2>
        <Link to="/allFigma" state={{ figmaProducts }}>
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-outline btn-success"
          >
            Browse All
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {displayedFigma.map((figma) => (
          <Figma key={figma.id} figma={figma} />
        ))}
      </div>
    </div>
  );
}
