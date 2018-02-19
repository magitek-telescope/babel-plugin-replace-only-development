const { transform } = require('@babel/core')
const { NODE_ENV } = process.env

const plugin = ({types: t}, options) => {

  // Guard
  if (!('rules' in options)) return {}
  if (!('env' in options) && NODE_ENV == 'production') return {}
  if (options.env.includes(NODE_ENV)) return {}

  return {
    visitor: {
      Literal (path, file) {
        Object.entries(options.rules).forEach(([before, after]) => {
          if (path.get('literal').container.value == before) {
            path.replaceWith(t.stringLiteral(after))
          }
        })
      }
    }
  }
}

module.exports = plugin
