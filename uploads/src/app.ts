import express from 'express';
import 'express-async-errors';

import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@ntatickets/common';
import { uploadsRouter } from './routes/uploads';
import bodyParser from 'body-parser';

const app = express();
app.set('trust proxy', true);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test', // only allow https connection
  })
);
app.use(currentUser);

app.use(uploadsRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
