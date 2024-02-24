import express, { Express } from 'express';

const app: Express = express();

import { indexRoute } from './routes';

app.use(express.json());

app.use('/', indexRoute);

export default app;
