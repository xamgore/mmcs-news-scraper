require('babel-register')({
    plugins: [
        'transform-es2015-modules-commonjs',
        'transform-object-rest-spread',
        // 'syntax-async-functions',
        // 'syntax-async-generators',
    ]
})

// require('babel-polyfill')


var fs = require('fs')

if (!fs.existsSync('.env'))
  fs.writeFileSync('.env', fs.readFileSync('.env.example'))

require('dotenv').config()
require('./src/app')
