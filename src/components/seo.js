import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

//
//  Prop types
//
const propTypes = {
  /**
   *  description
   *  @type string
   */
  description: PropTypes.string,

  /**
   *  lang
   *  @type string
   */
  lang: PropTypes.string,

  /**
   *  meta
   *  @type array
   */
  meta: PropTypes.arrayOf(PropTypes.object),

  /**
   *  title
   *  @type string
   */
  title: PropTypes.string.isRequired
};

//
//  Default props
//
const defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
};

//
//  Query
//
const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
};

SEO.propTypes = propTypes;
SEO.defaultProps = defaultProps;

export default SEO;
