import React from 'react'
import styled from 'styled-components'

const Container = styled(({ className, children }) => (
  <div className={`container ${className}`}>{children}</div>
))`
  width: 970px;
`

export default Container
