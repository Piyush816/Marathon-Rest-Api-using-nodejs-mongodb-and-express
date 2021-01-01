const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Tata-Mumbai-Marathon-API',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log('connection successfull...');
}).catch(e=>{
    console.log('not connected to database');
})
