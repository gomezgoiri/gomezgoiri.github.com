import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Head from 'next/head'

import Menu from './Menu'
import Top from './sections/Top'
import Profile from './sections/Profile'
import Experience from './sections/Experience'
import Technical from './sections/Technical'
import Contact from './sections/Contact'
import MoreInfo from './sections/MoreInfo'

import reducer, { intersect, isOnTop, setTop, getSelectedSection } from './reducer'
import CONFIG from '../../content/index.json'

const menuItems = [
  { href: 'profile', label: 'Profile' },
  { href: 'experience', label: 'Experience' },
  { href: 'skills', label: 'Technical skills' },
  { href: 'moreInfo', label: 'More info' },
  { href: 'contact', label: 'Contact' }
]

const Index = ({ className }) => {
  const [state, dispatch] = useReducer(reducer)

  const currentSection = getSelectedSection(state)
  const onTop = isOnTop(state)
  const setCurrentSectionIfNeeded = (section, height) => {
    dispatch(intersect(section, height))
  }
  const setOnTop = v => dispatch(setTop(v))

  return (
    <div className={className}>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <title>{CONFIG.siteTitle}</title>
        <meta name="author" content="Aitor Gómez Goiri" />
        <meta name="description" content={CONFIG.description} />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
      </Head>

      <Top
        onTop={isThere => setOnTop(isThere)}
      />

      <Menu
        clickHref="#profile"
        atTop={onTop}
        items={menuItems}
        selected={currentSection}
      />

      <Profile id="profile" onEnter={setCurrentSectionIfNeeded} />
      <Experience id="experience" onEnter={setCurrentSectionIfNeeded} />
      <Technical id="skills" onEnter={setCurrentSectionIfNeeded} />
      <MoreInfo id="moreInfo" onEnter={setCurrentSectionIfNeeded} />
      <Contact id="contact" onEnter={setCurrentSectionIfNeeded} />
    </div>
  )
}

// Abilities
// More info (links a las subsecciones con iconos grandes)

Index.propTypes = {
  className: PropTypes.string
}

export default styled(Index)`
  h2 {
    font-size: 54px;
    text-align: center;
  }

  h2,
  h3 {
    font-weight: 300;
  }
`
