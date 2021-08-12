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
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
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
