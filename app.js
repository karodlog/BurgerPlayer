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

// quand on arrive sur la route /api, on utilise le module router qui lui-même fait référence à toutes nos routes (voir plus haut)
app.use('/api', router);

// on met le serveur sur écoute
app.listen(PORT, ()=>{
    console.log((`Server up on port: ${PORT} [${NODE_ENV}]`));
})


//todo  bodyvalidation qui part en cacahuète
//todo  recherche par burger envoie toutes les commandes avec le burger mais aussi les autres burgers repris dans la même commande...

//todo  update de order-controller: pas bien du tout !