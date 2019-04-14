import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Page from 'components/Page'
import PublicationIcons from '../PublicationIcons'

const DivClear = styled.div`
  clear: both;
`

const IFrameContainer = styled.div`
  text-align: center;

  iframe {
    border: 1px solid #ccc;
    border-width: 1px 1px 0;
    margin-bottom: 5px;
  }
`

const HiddenH2 = styled.h2`
  display: none;
`

const PublicationPage = ({
  title,
  url,
  authors,
  description,
  restCitation,
  bodyHtml,
  slideshareEmbedCode,
  ...other
}) => (
  <Page
    siteTitle={title}
    heroTitle={title}
    titleLink={url}
    description={description}
    topLinks={[
      {
        href: '/publications.html',
        text: '<< Back to the publications list'
      }
    ]}
  >
    <article itemScope itemType="http://schema.org/ScholarlyArticle">
      <header>
        <HiddenH2>
          <a
            href={url}
            rel="bookmark"
            title="Permanent link to "
            itemProp="url"
          >
            <span itemProp="name">{title}</span>
          </a>
        </HiddenH2>
        <h5>
          <author>{authors}</author>
        </h5>
      </header>

      <blockquote dangerouslySetInnerHTML={{ __html: restCitation }} />

      <PublicationIcons {...other} />

      <br />

      <DivClear
        itemProp="description"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />

      {slideshareEmbedCode && (
        <>
          <p />
          <br />
          <p />

          <IFrameContainer>
            <iframe
              title="Slideshow"
              src={`http://www.slideshare.net/slideshow/embed_code/${slideshareEmbedCode}`}
              width="427"
              height="356"
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            />
          </IFrameContainer>
        </>
      )}
    </article>
  </Page>
)

PublicationPage.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  authors: PropTypes.string,
  description: PropTypes.string,
  restCitation: PropTypes.string,
  bodyHtml: PropTypes.string,
  slideshareEmbedCode: PropTypes.string
}

export default PublicationPage
