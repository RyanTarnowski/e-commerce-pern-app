const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const passport = require('passport');
const cors = require('cors');

require('./strategies/local-strategy.js');
require('@dotenvx/dotenvx').config({ path: './config.env' }); //Used for the config.env file setup and access

//app.use(cors());
app.use(session({
    secret: process.env.SESSIONSECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,  //1 hour
      sameSite: false,
    },
  })
);

app.use(
  cors({
    origin: process.env.APP_ORIGIN,
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`E-Commerce app listening on port ${process.env.PORT}`);
  console.log(`Connected to Postgres Server: ${process.env.PGHOST} Port: ${process.env.PGPORT} Database: ${process.env.PGDATABASE}`);
});