import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from 'components/Link'
import Section from '../IntersectedSection'

/*
TO CHECK
*/

const MoreInfo = ({ className, ...props }) => (
  <Section
    title="More stuff"
    bgColor="#f3efe0"
    hdColor="#22a39f"
    className={className}
    {...props}
  >
    <div className="columns">
      <div className="column is-6">
        <Link href="/projects.html">
          <figure className="fas fa-code-branch" />
          <div className="section-text">
            <h3>Projects</h3>
            <p>Some of my open source contributions explained.</p>
          </div>
        </Link>
      </div>
      <div className="column is-6">
        <Link href="/publications.html">
          <figure className="fas fa-scroll" />
          <div className="section-text">
            <h3>Publications</h3>
            <p>What I published during my academic years.</p>
          </div>
        </Link>
      </div>
    </div>
    <div className="columns">
      <div className="column is-6">
        <Link href="/research_projects.html">
          <figure className="fas fa-project-diagram" />
          <div className="section-text">
            <h3>R&amp;D Projects</h3>
            <p>Research projects in which I have taken part.</p>
          </div>
        </Link>
      </div>
      <div className="column is-6">
        <Link href="/teaching.html">
          <figure className="fas fa-chalkboard-teacher" />
          <div className="section-text">
            <h3>Teaching</h3>
            <p>Yes, I also taught several topics in the past.</p>
          </div>
        </Link>
      </div>
    </div>
  </Section>
)

MoreInfo.propTypes = {
  className: PropTypes.string
}

export default styled(MoreInfo)`
  a {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 1em;
    padding: 1rem;

    figure {
      width: 2em;
      font-size: 1.5rem;
    }

    .section-text {
      h3 {
        color: #000;
        font-weight: bold;
        font-size: 1.5rem;
      }

      p {
        color: #7a7a7a;
        font-size: 1.25rem;
      }
    }
  }

  a:hover {
    background-color: #fafafa;
  }
`
