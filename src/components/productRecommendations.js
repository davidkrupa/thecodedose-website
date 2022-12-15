import React from 'react';
import { Link } from 'gatsby';
import productImage from '../images/coding-baby-sticker.jpg';
import Button from './button';

import './productRecommendations.scss';

const ProductRecommendations = () => (
  <div className="product-recommendations__container">
    <div className="product-recommendations__header">
      <h1 className="product-recommendations__heading">
        Product Recommendations
      </h1>
    </div>
    <div className="product-recommendations__products">
      <div className="product-recommendations__product">
        <img className="product-recommendations__product-image" src={productImage} />
        <h5 className="product-recommendations__product-title">Monitor</h5>
      </div>
      <div className="product-recommendations__product">
        <img className="product-recommendations__product-image" src={productImage} />
        <h5 className="product-recommendations__product-title">Laptop</h5>
      </div>
      <div className="product-recommendations__product">
        <img className="product-recommendations__product-image" src={productImage} />
        <h5 className="product-recommendations__product-title">Keyboard</h5>
      </div>
    </div>
    <div className="product-recommendations__footer">
      <div className="product-recommendations__footer-left">
        <h4 className="product-recommendations__footer-title">The Setup</h4>
        <p className="product-recommendations__footer-content">These are the products that you can spot on our Instagram page.</p>
      </div>
      <div className="product-recommendations__footer-right">
        <h2 className="product-recommendations__footer-btn">Explore</h2>
      </div>
    </div>
  </div>
);

export default ProductRecommendations;