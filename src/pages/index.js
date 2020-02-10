import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex="-1"
      data-uk-slideshow
    >
      <ul
        className="uk-slideshow-items"
        data-uk-height-viewport="offset-top: true"
      >
        <li>
          <img
            src="https://images.unsplash.com/photo-1580843408741-ceb3d2995e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=6000&q=80"
            alt=""
            data-uk-cover
          />
          <div class="uk-overlay-primary uk-position-cover"></div>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1580843408741-ceb3d2995e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=6000&q=80"
            alt=""
            data-uk-cover
          />
        </li>
        {/* <li>
          <img src="images/dark.jpg" alt="" data-uk-cover />
        </li>
        <li>
          <img src="images/light.jpg" alt="" data-uk-cover />
        </li> */}
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        data-uk-slideshow-item="previous"
      ></a>
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        data-uk-slideshow-item="next"
      ></a>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Link to="/page-2/" className="uk-button uk-button-pill uk-button-primary">
      Go to page 2
    </Link>
  </Layout>
);

export default IndexPage;
