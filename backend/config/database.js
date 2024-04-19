const mongoose = require("mongoose");

//mongodb://0.0.0.0:27017/Ecommerse
const url = process.env.MONGO_URL

const connectDatabase = async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
      })
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      }).catch((error) => { 
        console.log(error);
      })
  };
  
  module.exports = connectDatabase;