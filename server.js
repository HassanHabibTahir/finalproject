
//DATABASE
require('./src/db/db')

const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
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
const handleChat = require('./src/chat/chat');  
const chat = require('./src/routes/api/chat/chat');
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
// chat
app.use("/api/chat",chat);

const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static('./public/file'));
app.use(express.static('./client/build/'))
http.listen(port, () => {

    console.log(`servsr is running ${port}`)
})
io.on('connection', (socket) => {
    console.log('a user connected');
    handleChat(socket,io)
  });


  app.get('/*', function(req, res) {
    res.sendFile(__dirname+'/client/build/', function(err) {
      if (err) {
            console.log(err)
            res.status(500).send(err)
      
      }
    })
  })
  













// Desgin for makakin website
// https://colorlib.com/preview/#minishop


// https://github.com/Junaid250/Gobachi/blob/category-grid/client/src/components/home/categoryGrid/CategoryGrid.jsx

// https://www.fiverr.com/muhammadhama662?



// https://hhfa-fsd.herokuapp.com/

{/* <h1>  <button onClick={() => window.print()}>PRINT</button></h1> */}