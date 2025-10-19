const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const passport = require('passport');

require('./strategies/local-strategy.js');
require('@dotenvx/dotenvx').config({ path: './config.env' }); //Used for the config.env file setup and access

app.use(session({
    secret: process.env.SESSIONSECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,  //1 hour
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
//app.use('/api', apiRouter);




let seasonPicker = (month) => {
    if( (month >= 0 && month < 2) || (month == 11) ) {return 'Winter'}
    else if((month >= 2 && month < 5)) { return 'Spring'}
    else if ((month >= 5 && month < 8 )){ return 'Summer'}
    else {return 'Fall'}
}

// Add your code below
const seasonMiddleware = (req, res, next) => { 
  const d = new Date();
  let month = d.getMonth();

  console.log(seasonPicker(month));
  req.season = seasonPicker(month);
  next();
};

app.get('/season', seasonMiddleware, (req, res, next) => {
    res.send(`The current season is ${req.season}`);
});




app.listen(process.env.PORT, () => {
  console.log(`E-Commerce app listening on port ${process.env.PORT}`);
  console.log(`Connected to Postgres Server: ${process.env.PGHOST} Port: ${process.env.PGPORT} Database: ${process.env.PGDATABASE}`);
});