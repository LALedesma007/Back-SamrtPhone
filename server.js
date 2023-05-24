const express = require('express');
require('dotenv').config();
const {portConfig ,dbConfig} = require('./config/config');
const conectdb = require('./database/mongodb');
const userRoutes = require('./routes/user.route');
const loginRoutes = require('./routes/login.route');
const registerRoutes = require('./routes/register.route');
const productRoutes = require('./routes/product.route');
const productofferRoutes = require('./routes/porductoffer.route');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api' , userRoutes);
app.use('/api', loginRoutes);
app.use('/api', registerRoutes);
app.use('/api', productRoutes);
app.use('/api', productofferRoutes);

conectdb(dbConfig);
app.listen(portConfig.port, ()=>{
  console.log(`Conexion exitosa al puerto: ${portConfig.port}`);
})