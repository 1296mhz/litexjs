import express, {Express} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {attachControllers} from '@decorators/express';
import RootController from './controllers/Root.controller';
import HelloWorldController from './controllers/HelloWorld.controller';
dotenv.config();

const app: Express = express();
const port = 3000;
app.use(bodyParser.json());
attachControllers(app, [RootController, HelloWorldController]);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});