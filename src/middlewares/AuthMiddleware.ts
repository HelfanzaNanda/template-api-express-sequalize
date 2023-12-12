import { Middleware } from "../lib/Middleware";
import { UnauthorizedError } from "../app/Errors";
import { TokenFacade } from "../app/Facades";

class AuthMiddleware extends Middleware {
    protected static override handle(): any {
        if (this.request.headers.authorization === undefined || this.request.headers.authorization === null) {
            throw new UnauthorizedError();
        }

        let token = this.request.headers.authorization.toString().split(" ")[1];

        if (token === ''){
            throw new UnauthorizedError();
        }
        
        const { result, message } = TokenFacade.verify(token);
        if (!result){
            throw new UnauthorizedError(message!!);
        }
        
        return this.next();
    }
}

export { AuthMiddleware };