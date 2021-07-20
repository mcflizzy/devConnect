import express from 'express';
const router = express.Router();

// @router  POST api/users 
// @desc    Register user
// @access  Public
export const usersRoute = router.post('/', (req, res) => {
    console.log(req.body);
    res.send('--- User route ---')
});
