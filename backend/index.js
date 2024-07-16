const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');

// Set up your global variables after connecting to the database
mongoDB((err, data, CatData) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    global.foodData = data;
    global.foodCategory = CatData;

    // Start the server only after the database connection is successful
    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  }
});

// Middleware to handle CORS (uncomment if needed)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api',require("./Routes/Createuser"));

// Uncomment and set up your routes if needed
// app.use('/api/auth', require('./Routes/Auth'));
