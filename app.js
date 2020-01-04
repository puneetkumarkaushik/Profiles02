const path = require('path');

const express = require('express');
const bodyparser = require('body-parser');

const root = require('./utils/path');
const home = require('./routes/home');
const users = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(root, 'public')));

app.use(users);
app.use(home);

app.listen(3000, () => {
	console.log('Server is listening at 3000');
});