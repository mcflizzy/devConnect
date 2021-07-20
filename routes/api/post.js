import express from 'express';
const router = express.Router();

// @router  GET api/post 
// @desc    Test route
// @access  Public
export const postRoute = router.get('/', (req, res) => res.send('--- Post route ---'));