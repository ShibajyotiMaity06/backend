require('dotenv').config()  
const express = require('express')
const DbSession = require('./config/db.js')
const authroutes = require('./routes/authRoutes.js')

const app = express()
const port = 3000

app.use(express.json())
app.use('/api/auth', authroutes)

app.get("/", (req, res) => {
  res.send("API Running...");
});

DbSession().then(() => {
  app.listen(port, () => {
    console.log(`listening on ${port} done bro`)
  })
}).catch((err) => {
  console.log('idhar gadbad server.js', err)
})
