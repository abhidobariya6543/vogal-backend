require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.mongoose_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() => {
    console.log("Connected With Mongodb");
}).catch((error) => {
    console.log(error);
})