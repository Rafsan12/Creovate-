import { Link, useLocation } from "react-router-dom";

export default function All_Figma() {
  const location = useLocation();
  const { figmaProducts } = location.state || {};
  return (
    <>
      <h1 className="ml-4">All Graphic ({figmaProducts?.length || 0})</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10 ml-4">
        {figmaProducts.map((figma) => (
          <div key={figma.id}>
            <Link to={`/product_details/${figma.id}`}>
              <div className="card w-96">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {figma.name}
                    <div className="badge badge-secondary"></div>
                  </h2>
                  <p>{figma.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                  <p>{figma.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
