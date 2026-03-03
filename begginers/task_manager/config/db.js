const mongoose = require('mongoose')

const DbSession = async ()=> {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('all good in db.js')
  } catch (error) {
    console.log('Error connecting to db.js:', error)
    process.exit(1)
  }
}

module.exports = DbSession