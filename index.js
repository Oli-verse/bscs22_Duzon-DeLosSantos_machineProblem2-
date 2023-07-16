/*
	Program: 	 E-commerce API MVP requirements
	Programmer:  Jan Lawrence M. Delos Santos
	Programmer:  Oliver Gadwin Duzon
	Section: 	 AN22
	Start Date:  July 16, 2023 
	End Date:  	 July 16, 2023 
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const auRoutes = require('./routes/auRoutes');
const prodRoutes = require('./routes/prodRoutes');
const ordRoutes = require('./routes/ordRoutes');

const app = express();

mongoose.connect('mongodb+srv://admin:rememberthis31@sandbox.3op3d8w.mongodb.net/an22_sample_database?retryWrites=true&w=majority',{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', auRoutes);
app.use('/products', prodRoutes);
app.use('/orders', ordRoutes);

app.listen(process.env.PORT || 4000, () => {
	console.log(`API is now online on port ${ process.env.PORT || 4000}`)
});
