import express, { Express } from 'express';

const app: Express = express();

import { indexRoute } from './routes';

app.use('/', indexRoute);

export default app;
