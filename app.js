require("dotenv-flow").config();

const {MESSAGE, NODE_ENV, PORT, DB_CONNECTION} = process.env

console.log(`Lancé en ${NODE_ENV} ${MESSAGE}`,);

// import du module mongoose
const mongoose = require('mongoose');


const express = require('express');
const app = express();

// pour lire les json
app.use(express.json());

//gérer les async
require('express-async-errors');

//on importe le module router (dossier Routes)
const router = require('./routes')

app.use(async(req,res,next)=>{
    await mongoose.connect(DB_CONNECTION);
    console.log('trouloulou');
    next();
})

// app.get('/customer', (req, res) => {
//     const data = {
//         msg : 'Coucou'
//     }
//     res.json(data);
// })
app.use('/api', router);

// on met le serveur sur écoute
app.listen(PORT, ()=>{
    console.log((`Server up on port: ${PORT} [${NODE_ENV}]`));
})