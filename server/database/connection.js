// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try{
//         // mongodb connection string
//         const con = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             // useFindAndModify: false,
//             // useCreateIndex: true
//         })

//         console.log(`MongoDB connected : ${con.connection.host}`);
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// }

// module.exports = connectDB

const Mongoose = require("mongoose");



const localDB = `mongodb+srv://deepakls:dee9342@cluster0.jwsjhn8.mongodb.net/employeeinfo?retryWrites=true&w=majority`;



const connectDB = async () => {

  await Mongoose.connect(localDB, {

    useNewUrlParser: true,

    useUnifiedTopology: true,

  });



  console.log("MongoDB Connected");

};



module.exports = connectDB;