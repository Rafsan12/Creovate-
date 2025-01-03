import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Video({ website }) {
  const { id, name, description, price } = website;
  return (
    <>
      <div className="card w-96 ">
        <Link to={`/product_details/${id}`}>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">Pro</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <p>{price}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
