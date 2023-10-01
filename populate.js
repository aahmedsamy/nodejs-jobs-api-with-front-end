require('dotenv').config()

const mockData = require('./mock_data.json')

const Job = require('./models/Job')

const connectDB = require('./db/connect')

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        await Job.create(mockData)
        console.log('Success populating')
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

start()