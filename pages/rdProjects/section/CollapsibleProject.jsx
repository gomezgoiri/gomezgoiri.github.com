import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CollapsiblePanel from 'components/CollapsiblePanel'
import Link from 'components/Link'
import { makeUrl } from 'utils/content'

const RightLink = styled.a`
  margin-right: 0.3em;
`

const CollapsibleProject = ({
  title,
  website,
  preview,
  expanded = false,
  onCollapse,
  ...other
}) => (
  <CollapsiblePanel expanded={expanded} title={title} onCollapse={onCollapse}>
    <p dangerouslySetInnerHTML={{ __html: preview }} />
    <div className="level">
      <div className="level-left" />
      <div className="level-right">
        <RightLink
          href={website}
          role="button"
          className="button"
        >
          Go to website
        </RightLink>
        <Link href={makeUrl(other)} role="button" className="button is-primary">
          Read more
        </Link>
      </div>
    </div>
  </CollapsiblePanel>
)

CollapsibleProject.propTypes = {
  title: PropTypes.string,
  website: PropTypes.string,
  preview: PropTypes.string,
  expanded: PropTypes.bool,
  bodyHtml: PropTypes.node,
  short: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  onCollapse: PropTypes.func.isRequired
}

export default CollapsibleProject
