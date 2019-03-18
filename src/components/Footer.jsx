import React from 'react'
import Container from './Container'

const Footer = () => (
  <footer>
    <hr />
    <Container>
      <p>
        <small>

          Hosted on
          {' '}
          <a href="https://github.com/gomezgoiri/gomezgoiri.github.com">

            GitHub Pages
          </a>

          , theme by
          <a href="http://getbootstrap.com">Bootstrap</a>
, based on
          {' '}
          <a href="https://github.com/tscanlin/next-blog">

            Tim Scanlin&apos;s next-blog
          </a>

          .
        </small>
      </p>
    </Container>
  </footer>
)

export default Footer
