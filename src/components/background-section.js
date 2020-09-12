import React from "react";
import BackgroundImage from "gatsby-background-image";


const BackgroundSection = ({img, imgTransparent, styleClass, title, children}) => {
  const backgroundFluidImageStack = [
    img,
    imgTransparent,
  ].reverse();

  return (
    <BackgroundImage
      className={styleClass}
      fluid={backgroundFluidImageStack}
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
  imgTransparent: `linear-gradient(rgba(255, 158, 9, 0.5), rgba(255, 158, 9, 0.5))`,
};


export default BackgroundSection;
