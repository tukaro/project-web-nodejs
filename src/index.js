const express = require('express');
const path =require('path')
var morgan = require('morgan');
const  handlebars = require ('express-handlebars');
const app = express();
const port = 3000;
  
app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'));
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));




app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port htttp://localhost:${port}`);
})