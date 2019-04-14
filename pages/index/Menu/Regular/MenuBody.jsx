import PropTypes from 'prop-types'
import styled from 'styled-components'

import menuBodyCss from '../BodyStyle'
import MenuContent from '../MenuContent'

const StyledMenu = styled(MenuContent)`
  ${menuBodyCss}
  ${({ css }) => css}

  ${({ atTop = true }) =>
    atTop
      ? `
          position: absolute;
          top: 100vh;
          border-radius: 0 0 10px 10px;
        `
      : `
          position: fixed;
          top: 10vh;
          border-radius: 10px;
        `};
`

StyledMenu.propTypes = {
  atTop: PropTypes.bool,
  css: PropTypes.arrayOf(PropTypes.string)
}

export default StyledMenu
