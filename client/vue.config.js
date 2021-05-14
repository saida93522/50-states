//this file tells vue to send all requests to the API  to node/express server
module.exports = {
    devServer: {
        // '/api/states/'
        proxy: 'http://127.0.0.1:3000'
    }
}