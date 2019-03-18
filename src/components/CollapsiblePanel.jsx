import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleContainer = styled(({ expanded, children, className }) => (
  <div className={className}>
    <div>{children}</div>
    <i className={`fas ${expanded ? 'fa-angle-up' : 'fa-angle-down'}`} />
  </div>
))`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CollapsiblePanel = ({
  title,
  subtitle,
  expanded = false,
  onCollapse,
  children
}) => (
  <div className="panel panel-default">
    <div
      className="panel-heading"
      role="tab"
      tabIndex="0"
      onKeyPress={onCollapse}
      onClick={onCollapse}
    >
      <TitleContainer expanded={expanded}>
        <h4 className="panel-title">{title}</h4>
        {subtitle}
      </TitleContainer>
    </div>
    {expanded && (
      <div className="panel-collapse collapse in">
        <div className="panel-body">{children}</div>
      </div>
    )}
  </div>
)

CollapsiblePanel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.element,
  expanded: PropTypes.bool,
  onCollapse: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default CollapsiblePanel
