/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';
function Products(props) {
  const { products } = props;
  return (
    <div className="products">
      {products.map((item) => (
        <Product key={products.id} product={item} />
      ))}
    </div>
  );
}
export default Products;
