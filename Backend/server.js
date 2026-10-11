require('dotenv').config()
const app = require('./src/app')



app.listen(3000,()=>{console.log("Server listening on Port 3000")})