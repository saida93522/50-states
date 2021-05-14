let express = require('express')
let path = require('path')
let states_api = require('./routes/states')

//create web server app
let app = express()

let vueAppPath = path.join(__dirname, 'client', 'dist')
app.use(express.static(vueAppPath))

app.use(express.json())  // parses Json sent with request

app.use('/api', states_api)

//Error handling function for server error and 404 errors

app.use(function (req, res, next) {
    res.status(404).send('Not Found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack); //for developer use
    res.status(500).send('Server error')
})

//start server on port 3000 if a port is not specified.
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('App running on port', server.address().port);
})