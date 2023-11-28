import { GlobalMiddlewareList } from '../../lib';
import { CorsMiddleware } from './CorsMiddleware';
import { ErrorMiddleware } from './ErrorMiddleware';
import { JSONParserMiddleware } from './JSONParserMiddleware';
import { LoggerMiddleware } from './LoggerMiddleware';
import { URLEncodedParserMiddleware } from './UrlEncodedParserMiddleware';

const middlewares: GlobalMiddlewareList = {
    pre: [
        LoggerMiddleware,
        CorsMiddleware,
        URLEncodedParserMiddleware,
        JSONParserMiddleware,
    ],
    post: [
        ErrorMiddleware,
    ],
};

export { middlewares };