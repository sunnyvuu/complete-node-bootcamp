const express = require('express');

const tourRouter = require('./routes/tourRoutes');
const app = express();
app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from the server side uwu' });
// });

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);

app.use('/api/v1/tours', tourRouter);

module.exports = app;
