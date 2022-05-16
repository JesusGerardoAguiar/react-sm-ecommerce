import React from "react";
import FeaturedProducts from '../Products/FeaturedProducts';
const Products = () => {
  return (
    <div className="mb-40">
      <h3 className="font-bebas-neue uppercase text-2xl sm:text-4xl font-black flex flex-col leading-none  text-center">
        Productos Destacados
      </h3>
      <FeaturedProducts />
    </div>
  );
};

export default Products;
