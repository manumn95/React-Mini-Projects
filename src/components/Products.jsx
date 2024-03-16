import { useState } from "react";
import Review from "./Review";

const Products = (Props) => {
  let review =
    Props.name === "Special Item" || Props.name === "Popular Item" ? (
      <Review></Review>
    ) : (
      ""
    );

  const [iscart, setiscart] = useState(true);

  let strikeOut =
    Props.price === "$20.00" || Props.price === "$50.00"
      ? "text-muted text-decoration-line-through"
      : Props.price;
  let discount1 = Props.price === "$20.00" ? "$18.00" : "";
  let discount2 = Props.price === "$50.00" ? "$25.00" : "";

  let saleStyle =
    Props.name === "Special Item" || Props.name === "Sale Item"
      ? "badge bg-dark text-white position-absolute"
      : "";

  let sale =
    Props.name === "Special Item" || Props.name === "Sale Item" ? "Sale" : "";

  return (
    <div>
      <div
        className="card card-body"
        style={{ width: "15rem", height: "25rem" }}
      >
        <div className={saleStyle} style={{ top: "0.5rem", right: " 0.5rem" }}>
          {sale}
        </div>
        <img className=" card-img-top" src={Props.image} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{Props.name}</h5>
            {review}
            <span className={strikeOut}>{Props.price}</span>
            {discount1}
            {discount2}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {iscart ? (
              <button
                className="btn btn-outline-dark mt-auto"
                value={Props.value}
                onClick={() => {
                  Props.onClick();
                  setiscart(false);
                }}
              >
                Add to cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark mt-auto"
                value={Props.value}
                onClick={() => {
                  Props.decrement();
                  setiscart(true);
                }}
              >
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
