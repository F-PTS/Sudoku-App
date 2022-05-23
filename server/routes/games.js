import express from 'express';

// routes logic
import { getGames } from '../controllers/games.js';

const router = express.Router();

// routes
router.get('/', getGames);

export default router;