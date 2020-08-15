import express from 'express';
import cors from 'cors';
import routees from './routees';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routees);


app.listen(3333);