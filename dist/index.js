
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./gogym.cjs.production.min.js')
} else {
  module.exports = require('./gogym.cjs.development.js')
}
