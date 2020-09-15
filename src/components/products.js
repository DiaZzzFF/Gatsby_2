import React from "react";
import {StaticQuery, graphql} from "gatsby";

import Product from "../components/product";
import Title from "../components/title";


const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct(limit: 2) {
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
          <section className="py-5">
            <div className="container">
              <Title title="our products" />

              <div className="row">
                {data.products.edges.map(({node: product}) => {
                  return (
                    <Product
                      key="product.id"
                      product={product}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
};


export default Products;
