import {Request as Req, Response as Res} from 'express';
import {
  Request, Response, Controller, Get, Post, Body
} from '@decorators/express';
import {Inject} from '@decorators/di';

import IHelloWorldService from '../interfaces/HelloWorld.interface';
import HelloWorldService from '../services/HelloWorld.service';

@Controller('/helloworld')
export default class HelloWorldController {
  constructor(@Inject(HelloWorldService) private helloWorldService: IHelloWorldService) {}

  @Get('/')
  async getData(@Request() req: Req, @Response() res: Res) {
    const result = this.helloWorldService.say("Hello");
    res.json({msg: result})
  }
  @Post('/')
  translateText( @Request() req: Req, @Response() res: Res, @Body() body: any) {
    res.json({ msg: "hello post"})
  }
}