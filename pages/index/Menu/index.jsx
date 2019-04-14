import React from 'react'
import PropTypes from 'prop-types'

import RegularMenu from './Regular'
import CollapsibleMenu from './Collapsible'

const Menu = ({ atTop = true, clickHref, ...menuProps }) => (
  <div>
    <RegularMenu
      atTop={atTop}
      clickHref={clickHref}
      className="is-hidden-mobile"
      {...menuProps}
    />
    <CollapsibleMenu className="is-hidden-tablet" {...menuProps} />
  </div>
)

Menu.propTypes = {
  atTop: PropTypes.bool,
  clickHref: PropTypes.string.isRequired
}

export default Menu
