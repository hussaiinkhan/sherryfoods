const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/dbConnection')

connectDB()
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({      //this is used to access the backend apis from front-end
    origin:'http://localhost:3000',  //since our front-end will run on port 3000
    credentials : true
}))
app.use('/api/users', require('./routes/userRoutes'))  
app.use('/api', require('./routes/dataRoutes'))


 

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})