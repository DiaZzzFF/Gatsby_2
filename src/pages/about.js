import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/background-section";
import Info from "../components/info";

import "../sass/style.scss";


const AboutPage = ({data}) => {
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />

      <main className="main">
        <BackgroundSection
          styleClass="main__bg main__bg--about"
          img={data.img.childImageSharp.fluid}
          title="about us"
        />

        <Info />
      </main>
    </Layout>
  );
};


export const query = graphql`
  {
    img: file(relativePath: {eq: "about-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default AboutPage;
