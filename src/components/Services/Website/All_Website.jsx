import { Link, useLocation } from "react-router-dom";

export default function All_Website() {
  const location = useLocation();
  const { websiteProducts } = location.state || {};
  return (
    <>
      <h1 className="ml-4">All Website ({websiteProducts?.length || 0})</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10 ml-4">
        {websiteProducts.map((website) => (
          <div key={website.id}>
            <Link to={`/website_details/${website.id}`}>
              <div className="card w-96">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {website.name}
                    <div className="badge badge-secondary"></div>
                  </h2>
                  <p>{website.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                  <p>{website.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
