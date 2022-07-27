var express = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");

const PORT =  3000;

//Express app setup
var app = express();
app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'));

app.listen(PORT, () => {
    console.log(`${new Date().toISOString()}: Server is running on port ${PORT}`);
	app.emit("ready");
});

//Landing page
app.get('/', (req, res, next) => {
	res.render('index');
});

module.exports = app; 