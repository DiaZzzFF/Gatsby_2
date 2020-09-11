import React, {PureComponent} from "react";
import {Link} from "gatsby";
import {FaCartArrowDown} from "react-icons/fa";

import logo from "../images/logo.svg";


export default class Header extends PureComponent {
  constructor() {
    super();

    this.state = {
      navbarOpen: false,
      css: `collapse navbar-collapse`,
      links: [
        {
          id: 1,
          path: `/`,
          text: `home`
        },
        {
          id: 2,
          path: `/about`,
          text: `about`
        }
      ]
    };
  }

  // не знаю, как изменить код, чтобы убрать ошибку
  handleNavbar = () => {
    if (this.state.navbarOpen) {
      this.setState({
        navbarOpen: false,
        css: `collapse navbar-collapse`
      });

    } else {
      this.setState({
        navbarOpen: true,
        css: `collapse navbar-collapse show`
      });
    }
  }

  render() {
    return (
      <header className="header">
        <nav className="header__nav navbar navbar-expand-sm bg-light navbar-light">
          <Link to="/" className="header__logo navbar-brand">
            <img src={logo} alt="logo" />
            {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
  Creative Commons (Attribution 3.0 Unported);
  https://www.iconfinder.com/webalys */}
          </Link>

          <button
            className="header__toggle navbar-toggler"
            type="button"
            onClick={this.handleNavbar}
          >
            <span className="header__toggle-icon navbar-toggler-icon" />
          </button>

          <div className={this.state.css}>
            <ul className="header__list navbar-nav mx-auto">
              {this.state.links.map((link) => {
                return (
                  <li key={link.id} className="header__item nav-item">
                    <Link to={link.path} className="header__link nav-link text-capitalize">
                      {link.text}
                    </Link>
                  </li>
                );
              })}

              <li className="header__item nav-item  ml-sm-5">
                <FaCartArrowDown className="header__cart snipcart-checkout" />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
