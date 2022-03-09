// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')
//
// const app = express()
//
// app.use('/', serveStatic(path.join(__dirname, '/dist')))
// const port = process.env.PORT || 8080
// app.listen(port)
//
// console.log("Listening on port: "+ port)

const express = require('express');
const history = require('connect-history-api-fallback')
const path = require('path')
const serveStatic = require('serve-static')


const app = express()

// Use a fallback for non-root routes (required for Vue router)
//   NOTE: History fallback must be "used" before the static serving middleware!
app.use(history({
    // OPTIONAL: Includes more verbose logging
    verbose: true
}))

// Serve static assets from the build files (images, etc)
app.use(serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Server started at http://localhost:8080')
})