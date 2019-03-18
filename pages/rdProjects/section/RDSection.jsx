import React, { useState } from 'react'
import PropTypes from 'prop-types'

import SUMMARY_JSON from '../../../content/summary.json'

import Page from '../../../src/components/Page'

import { filterRDProjects } from '../../../src/utils/content'

import Chart from './TimelineChart'
import Panel from './CollapsibleProject'

const RD_PROJECTS = Object.values(filterRDProjects(SUMMARY_JSON))

const Projects = ({ title, description, bodyHtml }) => {
  const [selected, setSelected] = useState(0)

  return (
    <Page siteTitle={title} heroTitle={title} description={description}>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Chart rows={RD_PROJECTS} onSelected={n => setSelected(n)} />
      {RD_PROJECTS.map((v, i) => (
        <Panel
          key={v.title}
          expanded={selected === i}
          onCollapse={() => setSelected(i)}
          {...v}
        />
      ))}
    </Page>
  )
}

Projects.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bodyHtml: PropTypes.string
}

export default Projects
