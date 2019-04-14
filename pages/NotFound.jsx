import React from 'react'
import styled from 'styled-components'

import Page from 'components/Page'
import { title, cx } from '../content/404.json'

const SearchContainer = styled.div`
  width: 500px;
`

const NotFoundPage = () => (
  <Page siteTitle={title} heroTitle={title}>
    <img
      className="avatar"
      src={`${process.env.ASSET_PREFIX}/static/img/404_thinking.jpg`}
      alt="Me thinking what to do now that you got a 404 error"
      width="200"
      height="200"
    />

    <p>
      Try searching or go back to the <a href="/">home page</a>.
    </p>

    <SearchContainer>
      <script
        async
        src={`https://cse.google.com/cse.js?cx=${cx}`}
        type="text/javascript"
      />
      <div className="gcse-search" data-queryParameterName="search" />
    </SearchContainer>
  </Page>
)

export default NotFoundPage
