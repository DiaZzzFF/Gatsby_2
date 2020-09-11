import React from "react";
import {Link} from "gatsby";

import Title from "../components/title";


const Info = () => {
  return (
    <section className="info py-5">
      <div className="container">
        <Title title="our story" />

        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda numquam, quod iure dolor ullam enim,
              accusantium quam fuga cum saepe asperiores tenetur
              veritatis neque recusandae corporis eligendi
              illum quidem aspernatur. Modi, minima adipisci.
              Unde, sit animi odio quasi officiis impedit at
              voluptatibus. Rerum voluptate est delectus ipsum labore
              corrupti! Voluptatem.
            </p>

            <Link to="/about/">
              <button className="info__btn btn text-uppercase">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Info;
