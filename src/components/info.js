import React from "react";
import {Link} from "gatsby";

import TitleSection from "../components/title-section";


const Info = () => {
  return (
    <section className="info">
      <div className="info__wrapper">
        <TitleSection title="our story" />

        <p className="info__text">
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
          <button className="info__btn">
            about page
          </button>
        </Link>
      </div>
    </section>
  );
};


export default Info;
