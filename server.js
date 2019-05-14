var express = require('express');

var PORT = process.env.PORT || 3000; 

var exphbs = require('express-handlebars'); 

var app = express();

var routes = require('./controllers/burgers_controller.js')

    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
	
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', routes); 

app.listen(PORT, function() {
    console.log(`Server running on PORT ${PORT}`);
});
