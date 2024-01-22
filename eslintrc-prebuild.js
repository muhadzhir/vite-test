/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const config = require('./.eslintrc.js')
config.rules['no-console'] = ['error', { allow: ['warn', 'error', 'info'] }]
config.rules['@typescript-eslint/no-unused-vars'] = ['error']
module.exports = {
  ...config
}
