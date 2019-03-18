import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { makeUrl, getPublicationsByDate } from '../../../src/utils/content'

import Page from '../../../src/components/Page'
import Item from './Item'

const PUBS_BY_DATE = getPublicationsByDate()

const Publications = ({ title, description }) => (
  <Page siteTitle={title} heroTitle={title} description={description}>
    <p>

      Alternatively, you can check these publications on
      {' '}
      <a href="http://scholar.google.com/citations?user=FD8S5rEAAAAJ&hl=en">

        Google Scholar
      </a>
      {' '}

      or 
      {' '}
      <a href="http://dl.acm.org/author_page.cfm?id=81479661857">ACM</a>
.
    </p>
    {Object.keys(PUBS_BY_DATE)
      .reverse()
      .map(year => (
        <Fragment key={year}>
          <h2>{year}</h2>
          {PUBS_BY_DATE[year].map(pub => (
            <Fragment key={pub.base}>
              <Item {...pub} url={makeUrl(pub)} />
              <div style={{ clear: 'both' }} />
            </Fragment>
          ))}
        </Fragment>
      ))}
  </Page>
)

Publications.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Publications
