const express = require('express')
const app = express()
const Task = require('../model/taskModel')
const router = express.Router()

// create a task
router.post('/api/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get/Read Tasks
router.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
