import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
require('dotenv').config();
const app: Express = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
    res.send('Servidor raiz is on :3');
});


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});