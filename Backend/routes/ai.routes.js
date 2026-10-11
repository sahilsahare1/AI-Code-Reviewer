const express = require('express')
const aiController = require('../controller/ai.controller')
const router  = express.Router()

router.post('/ai-review', aiController.aiResponse)

module.exports = router