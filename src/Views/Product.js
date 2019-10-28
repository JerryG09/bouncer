import React from 'react';
import ProductLayout from '../components/Product/ProductLayout';
import Navigation from '../commons/Navigation/Navigation';

function Product(props) {
  console.log(props.match.params.id);
  return (
    <div>
      <Navigation />
      <ProductLayout />
    </div>
  );
}

export default Product;
