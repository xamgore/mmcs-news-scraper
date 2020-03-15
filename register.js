require('core-js/stable')
require('core-js/stage/3')
require('core-js/proposals')
require('regenerator-runtime/runtime')

require('@babel/register')({
  extensions: ['.js', '.ts'],
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: { version: 3, proposals: true },
      targets: { node: 'current' },
    }],
    '@babel/preset-typescript',
  ],
  'plugins': [
    'transform-numeric-separator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
  ],
})
