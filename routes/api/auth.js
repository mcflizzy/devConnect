import express from 'express';
const router = express.Router();

// @router  GET api/auth 
// @desc    Test route
// @access  Public
export const authRoute = router.get('/', (req, res) => res.send('--- Auth route ---'));