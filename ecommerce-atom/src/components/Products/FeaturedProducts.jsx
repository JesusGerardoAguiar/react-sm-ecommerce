import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import {useRecoilValue} from "recoil";
import { getProductsQuery } from "../../atoms/products";
const FeaturedProducts = () => {
  const products = useRecoilValue(getProductsQuery);
  return (
    <>
      <div className="container">
        <div className="row">
            {products && products.map((product) => (
              <div className="col-md-4" key={product._id}>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                        href={`product/${product._id}`}
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
