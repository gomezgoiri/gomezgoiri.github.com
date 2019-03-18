import React from 'react'
import PropTypes from 'prop-types'

import CollapsiblePanel from '../../../src/components/CollapsiblePanel'
import Link from '../../../src/components/Link'
import { makeUrl } from '../../../src/utils/content'

const rightMargin = { marginRight: '0.3em' }

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
    <div className="text-right">
      <a
        href={website}
        role="button"
        className="btn btn-default"
        style={rightMargin}
      >
        Go to website
      </a>

      <Link href={makeUrl(other)} role="button" className="btn btn-info">
        Read more
      </Link>
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
