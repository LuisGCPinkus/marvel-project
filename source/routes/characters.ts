import express from 'express';
import controller from '../controllers/characters';
const router = express.Router();

router.get('/characters', controller.getCharacters);
router.get('/characters/:id', controller.getCharacter);

export = router;