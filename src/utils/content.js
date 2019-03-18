import SUMMARY_JSON from '../../content/summary.json'

const makeUrl = article =>
  `${article.dir.split('content').join('')}/${article.base
    .split('.json')
    .join('')}`

const filterByPath = path =>
  SUMMARY_JSON &&
  SUMMARY_JSON.fileMap &&
  Object.keys(SUMMARY_JSON.fileMap)
    .filter(file => file.indexOf(`${path}/`) === 0)
    .sort((a, b) => -1 * a.localeCompare(b))
    .map(file => SUMMARY_JSON.fileMap[file])

const filterPosts = () => filterByPath('content/projects')

const filterRDProjects = () =>
  filterByPath('content/projects').sort((a, b) => {
    const toComparisonStr = v => `${v.end} ${v.start} ${v.short}`
    // Reverse order
    return -1 * toComparisonStr(a).localeCompare(toComparisonStr(b))
  })

const filterPublications = () => filterByPath('content/publications')

const filterTeaching = () => filterByPath('content/teaching')

const createSubsectionDict = ({ base, dir, subsection }) =>
  SUMMARY_JSON &&
  SUMMARY_JSON.fileMap &&
  Object.values(SUMMARY_JSON.fileMap)
    .filter(file => subsection === file.subsection && dir === file.dir)
    .sort((a, b) => a.subsectionOrder - b.subsectionOrder)
    .map(file => ({
      title: file.title,
      url: makeUrl(file),
      selected: base === file.base
    }))

const extractYMD = filename => {
  const match = /(\d{4})-(\d{2})-(\d{2})-*/u.exec(filename)
  if (match) {
    return { year: match[1], month: match[2], day: match[3] }
  }
  return {}
}

const getPublicationsByDate = () =>
  Object.values(filterPublications()).reduce((ret, pub) => {
    const { year } = extractYMD(pub.base)
    if (year) {
      if (!(year in ret)) {
        // eslint-disable-next-line no-param-reassign
        ret[year] = []
      }
      ret[year].push(pub)
    }
    return ret
  }, {})

export {
  makeUrl,
  filterPosts,
  filterRDProjects,
  filterPublications,
  filterTeaching,
  createSubsectionDict,
  getPublicationsByDate
}
