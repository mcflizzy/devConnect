import   express                   from 'express';
import { check, validationResult } from 'express-validator';

// initialize router
const router = express.Router();

// @router  POST api/users 
// @desc    Register user
// @access  Public
export const usersRoute = 
    router.post(
        '/',
        [
            check('name', 'Name is required').not().isEmpty(),
            check('email', 'Please include a valid email').isEmail(),
            check('password', 'PW must be 6 or more characters').isLength({min: 6})
        ],
        (req, res) => {
                        const errors = validationResult(req);
                        
                        if(!errors.isEmpty()){
                            return res.status(400).json({errors: errors.array()});
                        }

                        console.log(req.body);
                        res.send('--- User route ---')
                    });
