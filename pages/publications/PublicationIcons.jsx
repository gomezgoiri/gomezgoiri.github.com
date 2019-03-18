import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import Icon from './Icon'

const PublicationIcons = ({ bib, code, semantics, slides, pdf, className }) => (
  <div className={className}>
    {bib && (
      <Icon
        href={bib}
        title="Download the citation in Bibtex format"
        src="bibtex.png"
        alt="Bibtex citation"
      />
    )}{' '}
    {code && (
      <span itemProp="hasPart" itemScope itemType="http://schema.org/Code">
        <Icon
          href={code}
          itemProp="codeRepository"
          src="code-icon.png"
          alt="Check the code associated with the publication"
        />
      </span>
    )}{' '}
    {semantics && (
      <Icon
        href={`http://www.morelab.deusto.es/labman/resource/publications/${semantics}`}
        title="Check the semantic description of this publication"
        src="rdf.png"
        alt="Semantics of the publication"
      />
    )}{' '}
    {slides && (
      <span
        itemProp="hasPart"
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <Icon
          href={slides}
          title="See the presentation of this publication"
          src="slides.png"
          alt="Presentation"
        />
      </span>
    )}{' '}
    {pdf && (
      <Icon
        href={pdf}
        title="Download this publication in PDF format"
        src="pdf.png"
        alt="Read the full publication"
      />
    )}
  </div>
)

PublicationIcons.propTypes = {
  bib: PropTypes.string,
  code: PropTypes.string,
  semantics: PropTypes.string,
  slides: PropTypes.string,
  pdf: PropTypes.string,
  className: PropTypes.string.isRequired
}

export default styled(PublicationIcons)`
  float: right;
  margin-bottom: 20px;
`
