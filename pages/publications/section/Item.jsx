import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from '../../../src/components/Link'
import PublicationIcons from '../PublicationIcons'

const Title = styled.span`
  font-weight: bold;
`

const Item = ({ title, url, authors, restCitation, ...other }) => (
  <span itemScope itemType="http://schema.org/ScholarlyArticle">
    <p>
      {authors}.<Title itemProp="name">{title}</Title>
      .
      <span dangerouslySetInnerHTML={{ __html: restCitation }} />
    </p>
    <p>
      <Link href={url} itemProp="url">
        Read more...
      </Link>
    </p>

    <PublicationIcons {...other} />
  </span>
)

Item.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.string,
  restCitation: PropTypes.string
}

export default Item
