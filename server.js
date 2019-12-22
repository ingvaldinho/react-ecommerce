const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


if(process.env.NODE_ENV != 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded: true}));
app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'client/build')));

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client/build','index.html'))
    });
}

app.listen(port,error=>{
    if(error) throw error;
    console.log('Server runnin on port ' +port);
})

app.post('/payment', (req,res)=>{
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'eur'
    }

    stripe.charges.create(body, (stripErr,stripeRes)=>{
        if(stripErr){
            res.status(500).send({error: stripErr})
        }else {
            res.status(200).send({sucess: stripeRes})
        }
    })
})