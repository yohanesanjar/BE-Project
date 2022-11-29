const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/articleRoutes');
const videoRoutes = require('./routes/videoRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

const PORT = 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());


// database connection
mongoose.connect('mongodb://anjardewantara:anjardewantara@ac-pxahqqo-shard-00-00.v79hqx9.mongodb.net:27017,ac-pxahqqo-shard-00-01.v79hqx9.mongodb.net:27017,ac-pxahqqo-shard-00-02.v79hqx9.mongodb.net:27017/be_project?ssl=true&replicaSet=atlas-vn0eqm-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser:true})
.then(() => {
    console.log("connect to mongodb atlas");
}).catch(error => {
    console.log("Something wrong happened",error);
})

// routes
app.get('/', (req, res) => res.send('home'));
app.get('/about', (req, res) => res.send('ini halaman about'));
app.use(authRoutes);
app.use(articleRoutes);
app.use(userRoutes);
app.use(videoRoutes);

app.listen(PORT, () => {
    console.log("Server started at PORT ", PORT);
})