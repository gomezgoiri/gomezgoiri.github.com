import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CollapsiblePanel = ({
  title,
  subtitle,
  expanded = false,
  onCollapse,
  className,
  children
}) => (
  <div className={`panel ${className}`}>
    <div
      className="panel-heading"
      role="tab"
      tabIndex="0"
      onKeyPress={onCollapse}
      onClick={onCollapse}
    >
      <div>
        <p>{title}</p>
        {subtitle && <p className="details">{subtitle}</p>}
      </div>
      <i className={`fas ${expanded ? 'fa-angle-up' : 'fa-angle-down'}`} />
    </div>
    {expanded && (
      <div className="panel-block">
        <div>
          {children}
        </div>
      </div>
    )}
  </div>
)

CollapsiblePanel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.element,
  expanded: PropTypes.bool,
  onCollapse: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default styled(CollapsiblePanel)`
  .panel-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .details {
      font-size: 14px;
    }
  }
`
