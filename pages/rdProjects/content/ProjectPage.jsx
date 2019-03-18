import React from 'react'
import PropTypes from 'prop-types'

import Page from '../../../src/components/Page'
import Link from '../../../src/components/Link'

const ProjectPage = ({
  title,
  url,
  description,
  bodyHtml,
  website,
  moreInfo
}) => (
  <Page
    siteTitle={title}
    heroTitle={title}
    titleLink={url}
    description={description}
    topLinks={[
      {
        href: '/research_projects.html',
        text: '<< Back to the R&D projects list'
      }
    ]}
  >
    <article>
      <div className="row">
        <div
          className="col-sm-12"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </div>

      <div className="row" style={{ marginTop: '30px' }}>
        <div className="col-sm-12 text-center">
          {website && (
            <a role="button" className="btn btn-default" href={website}>
              Go to website
            </a>
          )}
          {moreInfo && (
            <Link role="button" className="btn btn-default" href={moreInfo}>
              More information
            </Link>
          )}
        </div>
      </div>
    </article>
  </Page>
)

ProjectPage.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  website: PropTypes.string,
  moreInfo: PropTypes.string,
  bodyHtml: PropTypes.string
}

export default ProjectPage
