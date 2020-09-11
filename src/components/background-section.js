import React from "react";
import BackgroundImage from "gatsby-background-image";


const BackgroundSection = ({img, styleClass, title, children}) => {
  return (
    <BackgroundImage
      className={styleClass}
      fluid={img}
    >
      <h1 className="main__title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>

      {children}
    </BackgroundImage>
  );
};

BackgroundSection.defaultProps = {
  title: `default title`,
  styleClass: `main__bg`,
};


export default BackgroundSection;
