import React, {PureComponent} from "react";
import Img from "gatsby-image";

import TitleSection from "../components/title-section";


const getCategories = (items) => {
  let tempItems = items.map((item) => {
    return (item.node.category);
  });

  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = [`all`, ...categories];

  return (categories);
};

export default class Menu extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    };
  }

  handleItems = (category) => {
    let tempItems = [...this.state.items];

    if (category === `all`) {
      this.setState(() => {
        return (
          {coffeeItems: tempItems}
        );
      });

    } else {
      let items = tempItems.filter(({node}) => (node.category === category));

      this.setState(() => {
        return (
          {coffeeItems: items}
        );
      });
    }
  };

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu">
          <div className="menu__wrapper">
            <TitleSection title="best of our menu" />

            {/* categories */}

            <div className="menu__category">
              {this.state.categories.map((category, index) => {
                return (
                  <button
                    className="menu__btn"
                    type="button"
                    key={index}
                    onClick={() => {
                      this.handleItems(category);
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* items */}

            <ul className="menu__list">
              {this.state.coffeeItems.map(({node}) => {
                return (
                  <li
                    className="menu__item"
                    key={node.id}
                  >
                    <div className="menu__img-box">
                      <Img fixed={node.image.fixed} />
                    </div>

                    {/* item text */}

                    <div className="menu__text-box">
                      <div className="menu__text-row">
                        <h3 className="menu__title">{node.title}</h3>
                        <span className="menu__price">${node.price}</span>
                      </div>

                      <p className="menu__text">
                        {node.description.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      );

    } else {
      return (
        <section className="menu">
          <div className="menu__wrapper">
            <TitleSection title="best of our menu" />

            <h3 className="menu__no-items">
              There are no items to display...
            </h3>
          </div>
        </section>
      );
    }
  }
}
