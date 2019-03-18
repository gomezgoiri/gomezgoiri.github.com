const webpack = require('webpack')
const SUMMARY_JSON = require('./content/summary.json')

const FOLDER_PREFIX_TO_PAGE = {
  'content/projects': '/rdProjects/content',
  'content/publications': '/publications/content',
  'content/coding': '/coding/content'
}

const getPage = (file, page) => {
  if (page) {
    return page
  }

  const found = Object.keys(FOLDER_PREFIX_TO_PAGE).find(
    prefix => file.indexOf(prefix) === 0
  )

  return found ? FOLDER_PREFIX_TO_PAGE[found] : '/rdProjects/content'
}

const assetPrefix = process.env.NODE_ENV === 'production' ? '/next-blog' : ''

module.exports = {
  exportPathMap: () => {
    const posts = {}
    const paths = {}

    SUMMARY_JSON.fileMap &&
      Object.keys(SUMMARY_JSON.fileMap).forEach(file => {
        const fileObj = SUMMARY_JSON.fileMap[file]

        const fullUrl = file.match(/^content(.+)\.json$/)[1]
        const config = {
          page: getPage(file, fileObj.page),
          query: {
            fullUrl
          }
        }

        if (fileObj.paths) {
          // Handle custom paths / aliases.
          fileObj.paths.forEach(path => {
            paths[path] = config
          })
        }

        // No matter it has paths or not, add the fullUrl path
        posts[fullUrl] = config
      })

    return Object.assign(
      {},
      {
        '/': { page: '/' }
      },
      posts,
      paths
    ) // aliases
  },
  assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
      })
    )

    return config
  }
}
