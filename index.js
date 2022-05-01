import express from 'express';
import configureServer from './src/config.js';
const server = configureServer(express());
var listener = server.listen(server.get('PORT'), () => {
  console.log(`Server is running on port ${listener.address().port}`);
});