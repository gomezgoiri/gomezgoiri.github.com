import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import MenuTop from './MenuTop'
import MenuBody from './MenuBody'

const menuPosition = css`
  right: 3vw;
  width: 12vw;
  min-width: 150px;
`

const RegularMenu = ({ atTop = true, clickHref, className, ...menuProps }) => (
  <div className={className}>
    <MenuTop
      href={clickHref}
      css={menuPosition}
    />
    <MenuBody
      atTop={atTop}
      css={menuPosition}
      {...menuProps}
    />
  </div>
)

RegularMenu.propTypes = {
  atTop: PropTypes.bool,
  clickHref: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default RegularMenu
