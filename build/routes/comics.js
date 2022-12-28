"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const comics_1 = __importDefault(require("../controllers/comics"));
const router = express_1.default.Router();
router.get('/comics', comics_1.default.getComics);
router.get('/comics/:id', comics_1.default.getComic);
module.exports = router;
