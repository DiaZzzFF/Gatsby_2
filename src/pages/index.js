import React from "react";
import {FaGulp} from "react-icons/fa";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../sass/style.scss";


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <main className="main">
        <h1 className="main__title">Hi people</h1>

        <p>Welcome to your new Gatsby site.</p>

        <FaGulp />
      </main>
    </Layout>
  );
};


export default IndexPage;
