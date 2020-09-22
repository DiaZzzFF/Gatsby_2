import React from "react";
import Img from "gatsby-image";


const Product = ({product}) => {
  return (
    <li className="products__item">
      <Img
        className="products__img"
        fluid={product.image.fluid}
      />

      <div className="products__text-box">
        <h3 className="products__title">{product.title}</h3>
        <span className="products__price">${product.price}</span>

        <button
          className="products__btn snipcart-add-item"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-url="https://sharp-hopper-791c98.netlify.app/"
          data-item-image={product.image.fluid.src}
          data-item-name={product.title}
        >
          add to cart
        </button>
      </div>
    </li>
  );
};


export default Product;
