import express from 'express';
import router from './routes.js';
/**
 * Configure server
 * @param {express.Application} server 
 * @returns {express.Application}
 */
export default function configureServer(server) {
  server.set('PORT', process.env['PORT'] ?? 5000);
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());
  server.use(function(req, res, next) {
    res.set({
      // Set CORS Headers
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Accept',
      'Access-Control-Allow-Credentials': false
    });
    next();
  })
  server.use(router);  
  return server;
}