import {Request as Req, Response as Res} from 'express';
import {
  Response, Controller, Get
} from '@decorators/express';
import HelloWorldMiddleware from '../middlewares/HelloWorld.middleware';


@Controller('/', [HelloWorldMiddleware])
export default class RootController {
  constructor() {}

  @Get('/')
  getRoot(@Response() res: Res) {
    res.send("The LitexJS boilerplate is started!")
  }

  @Get('/welcome')
  getWelcome(@Response() res: Res) {
    res.send('<p>Welcome to LitexJS!</p>')
  }
}