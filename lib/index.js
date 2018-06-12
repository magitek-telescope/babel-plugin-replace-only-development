const { transform } = require('babel-core')
const { NODE_ENV } = process.env

const plugin = ({types: t}) => {

  return {
    visitor: {
      Literal (path, state) {
        Object.entries(state.opts.rules).forEach(([before, after]) => {
          if (NODE_ENV === 'production') return
          if (path.get('literal').container.value == before) {
            path.replaceWith(t.stringLiteral(after))
          }
        })
      }
    }
  }
}

module.exports = plugin
