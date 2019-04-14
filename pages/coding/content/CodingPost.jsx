import React from 'react'
import PropTypes from 'prop-types'

import Page from 'components/Page'
import { createSubsectionDict } from 'utils/content'

import SubsectionDropdown from './SubsectionDropdown'
import BottomNav from './BottomNav'

const CodingPost = ({
  title,
  subtitle,
  date,
  url,
  description,
  bodyHtml,
  ...other
}) => {
  const subsections = createSubsectionDict(other)

  const { prev, next } = subsections.reduce((ret, s, i) => {
    if (s.selected) {
      return {
        prev: i > 0 ? subsections[i - 1] : undefined,
        next: i < subsections.length - 1 ? subsections[i + 1] : undefined
      }
    }
    return ret
  }, {})

  return (
    <Page
      siteTitle={title}
      heroTitle={title}
      subtitle={subtitle}
      titleLink={url}
      description={description}
      topLinks={[
        {
          href: '/projects.html',
          text: '<< Back to the projects list'
        }
      ]}
      topNav={<SubsectionDropdown subsections={subsections} />}
    >
      <article>
        {date && (
          <div className="row" style={{ marginBottom: '20px' }}>
            <div className="col-sm-12">
              <p>Published on {new Date(date).toLocaleDateString()}</p>
            </div>
          </div>
        )}

        <div className="row">
          <div
            className="col-sm-12"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </div>

        <BottomNav prev={prev} next={next} />
      </article>
    </Page>
  )
}

CodingPost.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  bodyHtml: PropTypes.string
}

export default CodingPost
