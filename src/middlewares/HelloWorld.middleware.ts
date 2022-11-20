import {Injectable} from '@decorators/di';
import {Middleware} from '@decorators/express';
import {Request as Req, Response as Res, NextFunction} from 'express';

@Injectable()
class HelloWorldMiddleware implements Middleware {
  public use(request: Req, response: Res, next: NextFunction): void {
    console.log("HelloWorld")
    next();
  }
}

export default HelloWorldMiddleware;