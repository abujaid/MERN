const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

// @route  GET api/users
// @desc   Test routes
// @acess  Public

router.get('/', (req, res) => res.send('Post route'))


module.exports = router