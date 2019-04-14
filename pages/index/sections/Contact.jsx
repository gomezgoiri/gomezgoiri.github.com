import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Section from '../IntersectedSection'
import CONTACT from '../../../content/landing/contact.json'

const twitterUrl = `http://twitter.com/${CONTACT.twitter}`
const linkedInUrl = `http://linkedin.es/in/${CONTACT.linkedin}/`
const githubUrl = `https://github.com/${CONTACT.github}/`
const slideshareUrl = `http://www.slideshare.net/${CONTACT.slideshare}/`
const cvUrl = '/cv.html'

const Contact = ({ className, ...props }) => (
  <Section
    isFullScreen
    title="Contact"
    bgColor="#434242"
    hdColor="#fff"
    className={className}
    {...props}
  >
    <div className="contact">
      <p>
        Do you still want to know more about me? Check the following links or
        scan the QR code to add me as a contact.
      </p>
      <div className="columns is-vcentered">
        <div className="column is-6 is-offset-1-desktop is-5-desktop is-offset-2-widescreen is-4-widescreen">
          <div className="contact-links">
            <a href={twitterUrl} rel="noopener noreferrer" target="_blank">
              <span className="fab fa-twitter-square" /> {twitterUrl}
            </a>
            <a href={linkedInUrl} rel="noopener noreferrer" target="_blank">
              <span className="fab fa-linkedin" /> {linkedInUrl}
            </a>
            <a href={githubUrl} rel="noopener noreferrer" target="_blank">
              <span className="fab fa-github-square" /> {githubUrl}
            </a>
            <a href={cvUrl}>
              <span className="fas fa-file-alt" /> My complete CV
            </a>
            <a href={slideshareUrl} rel="noopener noreferrer" target="_blank">
              <span className="fab fa-slideshare" /> Some presentations I made
            </a>
          </div>
        </div>
        <div className="column qr-container is-offset-4-mobile is-4-mobile is-offset-2 is-4 is-3-widescreen">
          <figure className="image is-square">
            <img
              src={CONTACT.contactQr}
              alt="Scan it and add me to your contacts!"
            />
          </figure>
        </div>
      </div>
    </div>
  </Section>
)

Contact.propTypes = {
  className: PropTypes.string.isRequired
}

export default styled(Contact)`
  a,
  p {
    color: #fff;
    opacity: 0.6;
  }

  a:hover {
    opacity: 1;
  }

  hr {
    background: white; /* For browsers that do not support gradients */
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.6),
      rgba(0, 0, 0, 0)
    );
  }

  p {
    margin-bottom: 2em;
    text-align: center;
  }

  div.columns {
    width: 100%;
  }

  .contact {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    .contact-links {
      a {
        display: block;
      }
    }
  }
`
