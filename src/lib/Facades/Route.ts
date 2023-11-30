import { Middleware } from 'lib/Middleware';
import { Handler } from '../Handler';
import { Route } from '../Route';

class RouteFacade {
  public static checkout(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('checkout', path, handler, middlewares);
  }

  public static copy(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('copy', path, handler, middlewares);
  }

  public static delete(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('delete', path, handler, middlewares);
  }

  public static get(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('get', path, handler, middlewares);
  }

  public static head(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('head', path, handler, middlewares);
  }

  public static lock(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('lock', path, handler, middlewares);
  }

  public static merge(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('merge', path, handler, middlewares);
  }

  public static mkactivity(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('mkactivity', path, handler, middlewares);
  }

  public static mkcol(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('mkcol', path, handler, middlewares);
  }

  public static move(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('move', path, handler, middlewares);
  }

  public static 'm-search'(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('m-search', path, handler, middlewares);
  }

  public static notify(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('notify', path, handler, middlewares);
  }

  public static options(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('options', path, handler, middlewares);
  }

  public static patch(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('patch', path, handler, middlewares);
  }

  public static post(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('post', path, handler, middlewares);
  }

  public static purge(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('purge', path, handler, middlewares);
  }

  public static put(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('put', path, handler, middlewares);
  }

  public static report(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('report', path, handler, middlewares);
  }

  public static search(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('search', path, handler, middlewares);
  }

  public static subscribe(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('subscribe', path, handler, middlewares);
  }

  public static trace(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('trace', path, handler, middlewares);
  }

  public static unlock(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('unlock', path, handler, middlewares);
  }

  public static unsubscribe(path: string, handler: Handler, middlewares?: Array<typeof Middleware>) {
    return new Route('unsubscribe', path, handler, middlewares);
  }
}

export { RouteFacade as Route };