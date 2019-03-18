import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Header = ({ siteTitle, description }) => (
  <Head>
    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
    <title>{siteTitle}</title>
    <meta name="author" content="Aitor Gómez Goiri" />
    <meta name="description" content={description} />

    {/* Bootstrap and dependencies */}
    <script
      src="https://code.jquery.com/jquery-1.12.4.min.js"
      integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossOrigin="anonymous"
    />
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossOrigin="anonymous"
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
