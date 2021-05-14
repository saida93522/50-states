let express = require('express')
let States = require('../models').States

let router = express.Router()

//fetch all states
router.get('/states', function (req, res, next) { //get all states
    States.findAll({ order: ['name'] }).then(states => {
        return res.json(states)
    }).catch(err => next(e))
})
//e new route to handle requests to /states/:name
router.get('/states/:name', function (req, res, name) {
    let stateName = req.params.name
    States.findOne({ where: { name: stateName } })
        .then(state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State NOT found')
            }
        }).catch(err => next(err))

})
//patch route to update states visited/not visited
router.patch('/states/:name', function (req, res, next) { //:name to match any patch request to anything
    let stateName = req.params.name //url path to match
    let stateVisited = req.body.visited

    States.update({ visited: stateVisited }, { where: { name: stateName } }).then(rowsUpdated => { //query request to find state
        let numOfRowsUpdate = rowsUpdated[0]
        if (numOfRowsUpdate == 1) {
            //state in db and has been updated
            return res.send('ok')
        } else {
            //if no rows modified, return 404
            return res.status(404).send('State not found')
        }
    }).catch(err => next(err)) //error handle defined in server.js
})

module.exports = router