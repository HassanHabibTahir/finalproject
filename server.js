
//DATABASE
require('./src/db/db')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//passport
const passport = require('passport');

const user = require('./src/routes/api/user/user');
const product = require('./src/routes/api/products/produts')
const FavAdd = require('./src/routes/api/favourit/favourit')
//cors is use to data send
var cors = require('cors');
//path is required
var path = require("path");
//bodyParsre  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use cors
app.use(cors())
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// passport Config
require('./src/config/passport')(passport)
//use Api routes
app.use('/api/users', user)
//porducts
app.use('/api/product',product)
//favourit
app.use('/api/Favour',FavAdd)


const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static('./public/file'));
app.use(express.static('./client/build/'))
app.listen(port, () => {

    console.log(`servsr is running ${port}`)
})



















// Desgin for makakin website
// https://colorlib.com/preview/#minishop

// https://www.fiverr.com/muhammadhama662?