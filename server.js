const express = require("express");
const session = require("express-session");
const uuid = require('./helpers/uuid');
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const path = require("path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");
// const withAuth = require("./utils/auth");
const router = require("./controllers/index");

const app = express();
const PORT = process.env.PORT || 3001;
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
  secret: "The Mouse always Wins",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),

};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('server running'));
}
);
