import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
   res.send("Welcome to ghidator backend API");
});

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;   //heroku eken process.env.PORT eka add karanwa so i remove it from .env

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(PORT, () => console.log('Server running on port:' + PORT)))
   .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false); //to makesure getting any warnings on the console

