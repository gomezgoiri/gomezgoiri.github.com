import React from 'react'
import PropTypes from 'prop-types'
import Page from 'components/Page'

const CodingSection = ({ title, description, bodyHtml }) => (
  <Page siteTitle={title} heroTitle={title} description={description}>
    <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
  </Page>
)

CodingSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bodyHtml: PropTypes.string
}

export default CodingSection
