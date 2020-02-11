import React from 'react';
import { Link } from 'gatsby';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Box, Typography } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PillButton from '../components/ui/pill-button';
import image1 from '../images/photo-1578165219176-ece04edbd053.jpeg';
import image2 from '../images/photo-1580498137839-a3aa044dd1d4.jpeg';

const IndexPage = () => (
  <Layout hasFullHeight={true}>
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
          <LazyLoadImage src={image1} alt="" data-uk-cover />
          <div className="uk-overlay-primary uk-position-cover"></div>
        </li>
        <li>
          <LazyLoadImage src={image2} alt="" data-uk-cover />
          <div className="uk-overlay-primary uk-position-cover"></div>
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
    <Box component="section" bgcolor="primary.main" py={8}>
      <Container>
        <Typography variant="h3">
          <Box mb={2}>Section title</Box>
        </Typography>
        <Typography component="p" variant="body2">
          this is some text
        </Typography>
      </Container>
    </Box>
  </Layout>
);

export default IndexPage;
