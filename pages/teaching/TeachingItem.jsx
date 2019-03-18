import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FieldName = styled.span`
  font-weight: bold;
`

const MainContent = styled.div`
  clear: both;
`

const TeachingItem = ({
  originalName,
  topics,
  language,
  who,
  where,
  when,
  bodyHtml
}) => (
  <article>
    <header>
      <div>
        <FieldName>Course name:</FieldName> {originalName}
      </div>
      <div>
        <FieldName>Topics:</FieldName>{' '}
        <span dangerouslySetInnerHTML={{ __html: topics }} />
      </div>
      <div>
        <FieldName>Language:</FieldName> {language}
      </div>
      {who && (
        <div>
          <FieldName>Who?</FieldName>{' '}
          <span dangerouslySetInnerHTML={{ __html: who }} />
        </div>
      )}
      <div>
        <FieldName>Where?</FieldName>{' '}
        <span dangerouslySetInnerHTML={{ __html: where }} />
      </div>
      <div>
        <FieldName>When?</FieldName> {when}
      </div>
    </header>

    <br />
    <MainContent>
      <span dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </MainContent>
  </article>
)

TeachingItem.propTypes = {
  originalName: PropTypes.string,
  topics: PropTypes.string,
  language: PropTypes.string,
  who: PropTypes.string,
  where: PropTypes.string,
  when: PropTypes.string,
  bodyHtml: PropTypes.string
}

export default TeachingItem
