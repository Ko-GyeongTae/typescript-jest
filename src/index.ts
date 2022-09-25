import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';

const app = express();

app.use(bodyParser);

app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'ok'})
})

app.listen(process.env.PORT, () => {
  console.log(`server is running on port : ${process.env.PORT}`)
})