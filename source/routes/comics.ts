import express from 'express';
import controller from '../controllers/comics';
const router = express.Router();

router.get('/comics', controller.getComics);
router.get('/comics/:id', controller.getComic);

export = router;