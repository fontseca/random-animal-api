import { Router } from 'express';
import getRandomAnimal from './helpers/get-animal.js';

const router = Router();

router.get('/animal', function(req, res) {
  let { lang, category } = req.query;
  let animal = getRandomAnimal(lang, category);
  res.json({ animal, lang, category });
});

export default router;