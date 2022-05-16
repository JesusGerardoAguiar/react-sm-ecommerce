import React, { Suspense, useTransition } from "react";
import useFetchProducts from "../../hooks/useFetchProducts";
import BeatLoader from "react-spinners/BeatLoader";

const FeaturedProducts = () => {
  const products = useFetchProducts();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Featured Products</h2>
          </div>
        </div>
        <div className="row">
            {products && products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
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
