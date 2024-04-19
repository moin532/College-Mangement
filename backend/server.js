const app = require('./app');
const ConnectDatabase = require('./config/database.js');


require('dotenv').config({path:'./config/config.env'});

app.get('/',(req,res)=>{
    res.send("College managment app")
});

//uncaught err
process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`)
    console.log(`shuuting down the server unhandles rejection`);

    server.close(()=>{
        process.exit(1);
    })

})

ConnectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on local http://localhost:${process.env.PORT}`)
});

//unhandled rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`)
    console.log(`shuuting down the server unhandles rejection`);

    server.close(()=>{
        process.exit(1);
    })
})