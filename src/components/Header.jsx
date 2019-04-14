import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Header = ({ siteTitle, description }) => (
  <Head>
    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
    <title>{siteTitle}</title>
    <meta name="author" content="Aitor Gómez Goiri" />
    <meta name="description" content={description} />

    {/* Bulma */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
    />

    {/* Font Awesome */}
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossOrigin="anonymous"
    />

    {/* Syntax highlighting CSS */}
    <link
      rel="stylesheet"
      type="text/css"
      href={`${process.env.ASSET_PREFIX}/static/css/syntax.css`}
    />
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Header
