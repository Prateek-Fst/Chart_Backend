// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://choudharyprateek131:9927729187@cluster0.nkeq4ce.mongodb.net/dashboard', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB');
// });

// // Define a schema and model for the data
// const dataSchema = new mongoose.Schema({}, { strict: false });
// const Data = mongoose.model('Data', dataSchema);

// // Define API endpoints
// app.get('/api/data', async (req, res) => {
//     try {
//         const data = await Data.find();
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://choudharyprateek131:9927729187@cluster0.nkeq4ce.mongodb.net/dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Data Schema
const dataSchema = new mongoose.Schema({
  end_year: Number,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: Number,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

const Data = mongoose.model('Data', dataSchema);

// API to get data
// API to get data with filters
app.get('/api/data', (req, res) => {
    const query = {};
    if (req.query.endYear) query.end_year = req.query.endYear;
    if (req.query.topic) query.topic = req.query.topic;
    if (req.query.sector) query.sector = req.query.sector;
    if (req.query.region) query.region = req.query.region;
    if (req.query.pest) query.pestle = req.query.pest;
    if (req.query.source) query.source = req.query.source;
    if (req.query.swot) query.swot = req.query.swot;
    if (req.query.country) query.country = req.query.country;
    if (req.query.city) query.city = req.query.city;
  
    Data.find(query).then(data => res.json(data)).catch(err => res.status(400).json('Error: ' + err));
  });
  

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
