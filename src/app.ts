import express from 'express';
import dotenv from 'dotenv';
import router from './router';

dotenv.config();

function createApp() {
    const app = express();
    app.use(express.json());
    app.use('/api-kpop', router);
    return app;
}

export default createApp;
