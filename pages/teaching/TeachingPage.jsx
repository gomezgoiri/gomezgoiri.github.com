import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SUMMARY_JSON from '../../content/summary.json'
import { filterTeaching } from '../../src/utils/content'

import Page from '../../src/components/Page'
import CollapsibleItem from './CollapsibleItem'

const POSTS = Object.values(filterTeaching(SUMMARY_JSON))

const TeachingPage = ({ title, description, bodyHtml }) => {
  const [selected, setSelected] = useState(null)

  const onCollapse = newSelection =>
    setSelected(selected === newSelection ? null : newSelection)

  return (
    <Page siteTitle={title} heroTitle={title} description={description}>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <p>

        I taught the following courses at the
        {' '}
        <a href="http://www.ingenieria.deusto.es/">Faculty of Engineering</a>
        {' '}
of
        the
        <a href="http://www.deusto.es/">University of Deusto</a>
:
      </p>

      {POSTS.filter(({ category }) => category === 'university').map(post => (
        <CollapsibleItem
          key={post.title}
          {...post}
          expanded={selected === post.title}
          onCollapse={() => onCollapse(post.title)}
        />
      ))}

      <hr />

      <p>

        The
        <a href="http://www.e-ghost.deusto.es/">e-ghost</a>
        {' '}
is the
        {' '}
        <a href="http://en.wikipedia.org/wiki/Free_software">free software</a>
        {' '}

        group of the University of Deusto. It organizes summer courses on
        related topics. As part of these courses I have taught the following
        courses:
      </p>

      {POSTS.filter(({ category }) => category === 'eghost').map(post => (
        <CollapsibleItem
          key={post.title}
          {...post}
          expanded={selected === post.title}
          onCollapse={() => onCollapse(post.title)}
        />
      ))}
    </Page>
  )
}

TeachingPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bodyHtml: PropTypes.string
}

export default TeachingPage
