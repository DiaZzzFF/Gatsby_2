import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/background-section";
import Info from "../components/info";
import Menu from "../components/menu";
import Products from "../components/products";

import "../sass/style.scss";


const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <main className="main">
        <BackgroundSection
          img={data.img.childImageSharp.fluid}
          title="regular joe's"
        />

        <Info />

        <Menu items={data.menu} />
        <Products />
      </main>
    </Layout>
  );
};


export const query = graphql`
  {
    img: file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    menu: allContentfulCoffeeItem(limit: 3) {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
