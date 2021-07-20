import express from 'express';
const router = express.Router();

// @router  GET api/profile 
// @desc    Test route
// @access  Public
export const profileRoute = router.get('/', (req, res) => res.send('--- Profile route ---'));