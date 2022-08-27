import dotenv from 'dotenv-safe';

dotenv.config();

export default {
    db: {
        str: process.env.DB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};