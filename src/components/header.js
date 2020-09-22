import React, {PureComponent} from "react";
import {Link} from "gatsby";
import {FaCartArrowDown} from "react-icons/fa";

import logo from "../images/logo.svg";


export default class Header extends PureComponent {
  constructor() {
    super();

    this.state = {
      navbarOpen: false,
      navbarStatus: `header__list header__list--collapse`,
      links: [
        {
          id: 1,
          path: `/`,
          text: `home`,
        },
        {
          id: 2,
          path: `/about/`,
          text: `about`,
        }
      ]
    };
  }

  handleNavbar = () => {
    if (this.state.navbarOpen) {
      this.setState({
        navbarOpen: false,
        navbarStatus: `header__list header__list--collapse`,
      });

    } else {
      this.setState({
        navbarOpen: true,
        navbarStatus: `header__list header__list--show`,
      });
    }
  }

  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <Link className="header__logo" to="/" >
            <img className="header__logo-img" src={logo} alt="logo" />
            {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
  Creative Commons (Attribution 3.0 Unported);
  https://www.iconfinder.com/webalys */}
          </Link>

          <button
            className="header__toggle"
            type="button"
            onClick={this.handleNavbar}
          />

          <ul className={this.state.navbarStatus}>
            {this.state.links.map((link) => {
              return (
                <li className="header__item" key={link.id}>
                  <Link className="header__link" to={link.path}>
                    {link.text}
                  </Link>
                </li>
              );
            })}

            <li className="header__item">
              <button className="header__btn-cart snipcart-checkout">
                <FaCartArrowDown className="header__btn-cart-img" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
