const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

//mongodb+srv://user:password:host/?retryWrites=true&w=majority&appName=PixelClick

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);