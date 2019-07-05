const prettyjson = require('prettyjson')
const data = require('./lib/data')

const renderOptions = {
  dashColor: 'blue',
  keysColor: 'cyan',
  stringColor: 'white'
}

module.exports = () => {
  return `
DEVELOPER. DREAMER. ACHIEVER.          ~ヾ(＾∇＾)
__________________________________________________

${prettyjson.render(data, renderOptions)}

__________________________________________________

                    ヽ(⌐■_■)ノ♪♬
  `
}
