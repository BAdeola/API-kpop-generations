import express from 'express';
import dotenv from 'dotenv';
import router from './router';
import cors from 'cors';

dotenv.config();

function createApp() {
    const app = express();
    app.use(express.json());
    app.use('/api-kpop', router);
    app.use(cors())
    return app;
}

export default createApp;
