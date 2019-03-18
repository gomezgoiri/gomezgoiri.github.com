import React from 'react'

import Page from '../../src/components/Page'

import Biography from './Biography'
import Contact from './Contact'
import MoreInfo from './MoreInfo'

import CONFIG from '../../content/index.json'

const Index = () => (
  <Page heroTitle={CONFIG.siteTitle} description={CONFIG.description}>
    <div itemScope itemType="http://schema.org/Person">
      <Biography gravatar={CONFIG.gravatar} author={CONFIG.author} />
      <Contact />
      <MoreInfo />
    </div>
  </Page>
)

export default Index
