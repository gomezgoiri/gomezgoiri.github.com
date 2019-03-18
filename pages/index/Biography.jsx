import React from 'react'
import PropTypes from 'prop-types'
import Link from '../../src/components/Link'

const boldStyle = { fontWeight: 'bold' }
const topMargin = { marginTop: '30px' }

const Biography = ({ gravatar, author }) => (
  <div className="row">
    <div className="col-sm-8">
      <h1>Biography</h1>
      <p>
        <>
          I&apos;m a researcher at
          <span
            itemProp="affiliation"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <a href="http://www.ikerlan.es">
              <span itemProp="name">IK4-IKERLAN</span>
            </a>
          </span>
          . From 2015 to 2016, I worked at the
          <span
            itemProp="affiliation"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <span
              itemProp="department"
              itemScope
              itemType="http://schema.org/Organization"
            >
              <a href="http://kmi.open.ac.uk" itemProp="url">
                <span itemProp="name">Knowledge Media Institute</span>, KMi
              </a>
            </span>
            (
            <a href="http://www.open.ac.uk" itemProp="url">
              <span itemProp="name">the Open University</span>
            </a>
            , UK).
          </span>
          Before 2015, I worked at the{' '}
          <a href="http://www.morelab.deusto.es/">MORElab research group</a> and
          as an Assistant Professor at the{' '}
          <a href="http://www.deusto.es/">University of Deusto</a>.
          <span
            itemProp="alumniOf"
            itemScope
            itemType="http://schema.org/Organization"
          >
            I finished a{' '}
            <a href="http://en.wikipedia.org/wiki/Double_degree">
              joint-degree
            </a>{' '}
            on{' '}
            <a href="http://www.deusto.es/servlet/Satellite/Estudio/1110478598746/_ingl/%231102609955027%231120828512741%231120828512859/0/c0/UniversidadDeusto/comun/render?tipoColeccion=Page">
              Computer Engineering and Engineering in Industrial Organization
            </a>{' '}
            in 2008 and a MSc in{' '}
            <a href="http://www.diss.deusto.es/">Software Development</a> in
            2010 and{' '}
            <Link
              href="publications/gomezgoiri-semantic.html"
              style={boldStyle}
            >
              my PhD
            </Link>{' '}
            in 2014 at the
            <span
              itemProp="affiliation"
              itemScope
              itemType="http://schema.org/Organization"
            >
              <span itemProp="name">University of Deusto</span>.
            </span>
          </span>
        </>
      </p>
    </div>
    <div className="col-sm-4 text-right">
      <img
        id="avatar"
        src={`http://s.gravatar.com/avatar/${gravatar}?s=200`}
        alt={author}
        width="200"
        height="200"
        itemProp="image"
        style={topMargin}
      />
    </div>
  </div>
)

Biography.propTypes = {
  gravatar: PropTypes.string,
  author: PropTypes.string
}

export default Biography
