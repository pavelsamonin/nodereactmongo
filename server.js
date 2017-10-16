import config from './config';
import express from 'express';
import apiRouter from './api';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: '<h1>EJS Page</h1><p>Hello Express and EJS!</p>'
  });
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, (req, res) => {
  console.log('Server listening on port ', config.port);
});
