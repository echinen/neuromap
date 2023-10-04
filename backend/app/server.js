const express = require('express');
const app = express();
const config = require('./config')
const userRoute = require('./routes/userRoute')

const port = config.server.port

// Add all middlewares here
app.use(express.json());

// All public routes - check health
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// all private routes
app.use('/api', userRoute)

// create server
app.listen(port, () => {
  console.log(`A API está rodando na porta ${port}`);
});
