import React from "react";
import Img from "gatsby-image";


const Product = ({product}) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="product__card card">
        <Img
          className="product__img-box card-img-top"
          fluid={product.image.fluid}
        />

        <div className="card-body text-center">
          <h6 className="product__title">{product.title}</h6>
          <h6 className="product__title">${product.price}</h6>

          <button
            className="product__btn btn mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url="https://sharp-hopper-791c98.netlify.app/"
            data-item-image={product.image.fluid.src}
            data-item-name={product.title}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default Product;
