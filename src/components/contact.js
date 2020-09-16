import React from "react";

import Title from "../components/title";


const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />

      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/mjvpbagg"
            method="POST"
          >
            {/* name */}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>

            {/* email */}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="email@email"
              />
            </div>

            {/* description */}

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                placeholder="your description here..."
                rows="5"
              />
            </div>

            {/* submit */}

            <button
              type="submit"
              className="contact__btn btn btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default Contact;
