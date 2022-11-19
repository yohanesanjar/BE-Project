const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

//connection to database
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());


// database connection

// routes
app.get('/', (req, res) => res.send('home'));
app.get('/about', (req, res) => res.send('ini halaman about'));
app.use(authRoutes);
app.use(articleRoutes);
app.use(userRoutes);

app.listen(3000, function () {
    console.log('Node server listening on port 3000');
});