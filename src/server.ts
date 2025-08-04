import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.get ('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the K-Pop Generations API',});
});

app.listen(port, () => {    
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});