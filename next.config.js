const webpack = require('webpack')
const path = require('path')
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

// const assetPrefix = process.env.NODE_ENV === 'production' ? '/next-blog' : ''
const assetPrefix = ''

module.exports = {
  exportPathMap: () =>
    Object.keys(SUMMARY_JSON.fileMap || {}).reduce((ret, file) => {
        const fileObj = SUMMARY_JSON.fileMap[file]

        const fullUrl = file.match(/^content(.+)\.json$/)[1]
        const config = {
          page: getPage(file, fileObj.page),
          query: {
            fullUrl
          }
        }

        const pathss = {}
        if (fileObj.paths) {
          // Handle custom paths / aliases.
          fileObj.paths.forEach(p => {
            // eslint-disable-next-line no-param-reassign
            pathss[p] = config
          })
        }

        return {
          ...ret,
          ...pathss,
          // No matter it has paths or not, add the fullUrl path
          [fullUrl]: config
        }
      },
      {}
    ),
  assetPrefix,
  webpack: config => {
    config.resolve.modules.push(
      path.resolve(__dirname, './src')
    )

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
      })
    )

    return config
  }
}
