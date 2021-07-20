import mongoose from 'mongoose';
import config   from 'config';    // config.js self-created contains connection string

export const connectDB = async () => {
    try{
        await mongoose.connect(
            config.get('mongoURI'),
            {useNewUrlParser: true},
            {useUnifiedTopology: true}
        )
        console.log('--- MongoDB Connected ---');

    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
};
