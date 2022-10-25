const express = require('express')
const { connect } = require('mongoose')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('ayy bro!')
})

// create a task
app.post('/api/tasks', async (req, res) => {
  //   const task = await new Task(req.body)
  //   task
  //     .save()
  //     .then(() => {
  //       res.status(201).send(task)
  //     })
  //     .catch((e) => {
  //       res.status(400).send(e)
  //     })
  console.log(req.body)
  res.send('task created')
})

const startServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
startServer()
