import {
  Injectable, Container
} from '@decorators/di';

@Injectable()
export default class HelloWorldService {
  public say(text: string): string {
    return text
  }
}
