import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CollapsiblePanel from 'components/CollapsiblePanel'
import TeachingItem from './TeachingItem'

const CollapsedTitle = styled(({ topics, className }) => (
  <p className={className}>
    Topics: <span dangerouslySetInnerHTML={{ __html: topics }} />
  </p>
))`
  margin: 0;
`

const CollapsibleItem = ({
  title,
  topics,
  expanded = false,
  onCollapse,
  ...other
}) => (
  <CollapsiblePanel
    expanded={expanded}
    title={title}
    subtitle={expanded ? undefined : <CollapsedTitle topics={topics} />}
    onCollapse={onCollapse}
  >
    <TeachingItem topics={topics} {...other} />
  </CollapsiblePanel>
)

CollapsibleItem.propTypes = {
  expanded: PropTypes.bool,
  title: PropTypes.string.isRequired,
  topics: PropTypes.string.isRequired,
  onCollapse: PropTypes.func.isRequired
}

export default CollapsibleItem
