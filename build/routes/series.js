"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const series_1 = __importDefault(require("../controllers/series"));
const router = express_1.default.Router();
router.get('/series', series_1.default.getSeries);
router.get('/series/:id', series_1.default.getSerie);
module.exports = router;
