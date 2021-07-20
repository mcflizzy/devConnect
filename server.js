import express          from 'express';
import { connectDB }    from './config/db.js';  // import db connection function

// import routes
import { usersRoute }   from './routes/api/users.js';
import { authRoute }    from './routes/api/auth.js';
import { profileRoute } from './routes/api/profile.js';
import { postRoute }    from './routes/api/post.js';

// create express app
const app = express();

// connect to mongoDB
connectDB();

// init middleware
app.use (express.json({extended: false}));

// routes
app.get('/', (req,res) => res.send('API Running HOT!!!'));

// Define Routes
app.use('/api/users',   usersRoute);
app.use('/api/auth',    authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/post',    postRoute);

// establish port
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

