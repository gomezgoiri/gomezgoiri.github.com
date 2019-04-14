import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import menuBodyCss from './BodyStyle'
import MenuContent from './MenuContent'

const Container = styled.div`
  ${menuBodyCss}

  position: fixed;
  top: 20vh;
  right: 0;
  width: ${({ isCollapsed }) => isCollapsed ? '4vw' : '12vw'};
  min-width: ${({ isCollapsed }) => !isCollapsed && '150px;'};
  border-radius: 10px 0 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .btn-collapse {
    margin: 0.5em 0;
    text-align: center;
  }
`

const CollapsibleMenu = ({ className, ...other }) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const iconClass = isCollapsed ? 'fa-chevron-left' : 'fa-chevron-right'
  const toggleCollapsed = () => setCollapsed(!isCollapsed)

  return (
    <Container className={className} isCollapsed={isCollapsed}>
      <div
        role="button"
        tabIndex={0}
        aria-label="menu"
        aria-expanded="false"
        data-target="navMenu"
        className={`btn-collapse fas ${iconClass}`}
        onClick={toggleCollapsed}
        onKeyDown={({ key }) => {
          if(key === 'Enter'){
            toggleCollapsed()
          }
        }}
      />
      {!isCollapsed && <MenuContent {...other} />}
    </Container>
  )
}

CollapsibleMenu.propTypes = {
  className: PropTypes.string
}

export default CollapsibleMenu
