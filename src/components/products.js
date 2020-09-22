import React from "react";
import {StaticQuery, graphql} from "gatsby";

import Product from "../components/product";
import TitleSection from "../components/title-section";


const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const Products = () => {
  return (
    <StaticQuery
      query={getProducts}
      render={(data) => {
        return (
          <section className="products">
            <div className="products__wrapper">
              <TitleSection title="our products" />

              <ul className="products__list">
                {data.products.edges.map(({node: product}) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                    />
                  );
                })}
              </ul>
            </div>
          </section>
        );
      }}
    />
  );
};


export default Products;
