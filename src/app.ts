import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();


function createApp() {
    const app = express();

    app.use(express.json());

    app.get ('/', (req: Request, res: Response) => {
      res.status(200).json({
        message: 'Welcome to the K-Pop Generations API',});
    });
    return app;
}

export default createApp;
