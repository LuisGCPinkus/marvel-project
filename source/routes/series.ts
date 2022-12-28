import express from 'express';
import controller from '../controllers/series';
const router = express.Router();

router.get('/series', controller.getSeries);
router.get('/series/:id', controller.getSerie);

export = router;