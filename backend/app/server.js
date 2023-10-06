const express = require('express');
const cors = require('cors');
const config = require('./config')
const sequelize = require('./database/connection')
const { 
  classRoute,
  disorderTypeRoute,
  mappingRoute,
  redFlagRoute,
  registrationRoute,
  schoolRoute,
  studentRoute,
  teacherRoute,
  userRoute,
  authRoute
} = require('./routes/index')


const port = config.server.port

const app = express();

// Add all middlewares here
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());

// All public routes - check health
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// all private routes
app.use('/api', classRoute)
app.use('/api', disorderTypeRoute)
app.use('/api', mappingRoute)
app.use('/api', redFlagRoute)
app.use('/api', registrationRoute)
app.use('/api', schoolRoute)
app.use('/api', studentRoute)
app.use('/api', teacherRoute)
app.use('/api', userRoute)
app.use('/api', authRoute)

// sync to the database
sequelize.sync()
.then(result => {
  console.log(result)
  // create server
  app.listen(port, () => {
    console.log(`A API está rodando na porta ${port}`);
  });
})
.catch(error => {
  console.log(error)
})
