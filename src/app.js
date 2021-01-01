const express = require('express');
require("./db/conn")
const marathonRouter = require('./routes/marathonRoute')
const port = process.env.PORT || 3000;

// initialize app
const app = express();


// middlewares
app.use(express.json());
app.use(marathonRouter);




// listening the Server
app.listen(port,()=>{
    console.log('server is running on '+port);
})

