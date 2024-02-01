const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes');

// Get static file
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle the client body submit
app.use(
  express.urlencoded({

      extended: true,
  }),
  
);
app.use(express.json());

// Logger
// app.use(morgan('combined'))

// Layout
app.engine('handlebars', hbs.engine());

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`);
});
