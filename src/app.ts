import express, { Request, Response } from 'express';
const app = express();

//parsers
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
