"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const characters_1 = __importDefault(require("../controllers/characters"));
const router = express_1.default.Router();
router.get('/characters', characters_1.default.getCharacters);
router.get('/characters/:id', characters_1.default.getCharacter);
module.exports = router;
