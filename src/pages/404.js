import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />

      <main className="main">
        <h1 className="main__title">NOT FOUND</h1>

        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </main>
    </Layout>
  );
};


export default NotFoundPage;
