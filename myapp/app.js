const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors');
const rateLimit = require("express-rate-limit")

/*
app.use(cors({
    origin: 'http://localhost:3000/'
}));
*/

const limiter = rateLimit({
  windowMs: 120000,
  max: 3,
  message: 'please wait one minute'
  })


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.route('/home')
  .get(limiter,(req,res) =>{

    var number = req.query.phone_number
    //console.log(number)
    get_number_info(number).then(phone_number => res.send(phone_number));
    
  })
  .post((req,res)=>{
    console.log('POSTY REQUEST')
    //res.send(("this is a post request"))
    res.render('home')
  })


function get_number_info(number){

const client = require('twilio')('account_sid', 'auth_token');

return client.lookups.v2.phoneNumbers(number).fetch({fields: 'line_type_intelligence'})
}

app.listen(port = 5000, callback = console.log("connection made"))

//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