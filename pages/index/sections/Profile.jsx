import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Section from '../IntersectedSection'
import PROFILE from '../../../content/landing/profile.json'

const Profile = props => (
  <Section title="Profile" {...props}>
    <div className="columns is-desktop">
      <div className="column is-two-thirds-desktop">
        <h3 className="subtitle">About me</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: PROFILE.bodyHtml }}
        />
      </div>
      <div className="column is-one-thirds-desktop avatar">
        <img
          src={`https://s.gravatar.com/avatar/${PROFILE.gravatar}?s=200`}
          alt={PROFILE.author}
          width="200"
          height="200"
          itemProp="image"
        />
      </div>
    </div>
  </Section>
)

Profile.propTypes = {
  className: PropTypes.string
}

export default styled(Profile)`
  .avatar {
    text-align: center;

    img {
      border-radius: 1em;
    }
  }
`
