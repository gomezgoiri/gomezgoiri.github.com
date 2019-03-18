import React from 'react'
import PropTypes from 'prop-types'

import INDEX from '../../content/index.json'

import Header from './Header'
import NavBar from './NavBar'
import Content from './Content'
import Footer from './Footer'

const Page = ({
  siteTitle,
  description = INDEX.description,
  children,
  ...other
}) => (
  <div>
    <Header
      siteTitle={
        siteTitle ? `${siteTitle} - ${INDEX.siteTitle}` : INDEX.siteTitle
      }
      description={description}
    />
    <main>
      <NavBar />
      <Content {...other}>{children}</Content>
      <Footer />
    </main>
  </div>
)

Page.propTypes = {
  description: PropTypes.string,
  siteTitle: PropTypes.string,
  children: PropTypes.node
}

export default Page
