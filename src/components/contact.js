import React from "react";

import TitleSection from "../components/title-section";


const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__wrapper">
        <TitleSection title="contact us" />

        <form
          className="contact__form"
          action="https://formspree.io/mjvpbagg"
          method="POST"
        >
          {/* name */}

          <div className="contact__group">
            <label
              className="contact__label"
              htmlFor="name"
            >
              Name
            </label>

            <input
              className="contact__input"
              type="text"
              name="name"
              id="name"
              placeholder="john smith"
              required
            />
          </div>

          {/* email */}

          <div className="contact__group">
            <label
              className="contact__label"
              htmlFor="email"
            >
              Email
            </label>

            <input
              className="contact__input"
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              required
            />
          </div>

          {/* description */}

          <div className="contact__group">
            <label
              className="contact__label"
              htmlFor="description"
            >
              Description
            </label>

            <textarea
              className="contact__textarea"
              name="description"
              id="description"
              placeholder="your description here..."
              rows="5"
              required
            />
          </div>

          {/* submit */}

          <button
            className="contact__btn"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};


export default Contact;
