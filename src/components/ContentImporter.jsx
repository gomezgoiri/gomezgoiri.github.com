import React from 'react'
import { withRouter } from 'next/router'
import { makeUrl } from '../utils/content'

const ContentImporter = ({ router, children }) => {
  let pageJson = {}
  if (router.query && router.query.fullUrl) {
    // eslint-disable-next-line
    pageJson = require(`../../content${router.query.fullUrl}.json`)
  }
  return React.cloneElement(children, { ...pageJson, url: makeUrl(pageJson) })
}

export default withRouter(ContentImporter)
