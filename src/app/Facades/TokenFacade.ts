import jwt, { JwtPayload } from 'jsonwebtoken';
import { AUTH_SECRET } from '../../config/auth';

class TokenFacade {
    static async sign(payload: object, options?: jwt.SignOptions) {
        return jwt.sign(payload, AUTH_SECRET, options);
    }

    static verify(token: string, audience?: string) {
        let result = false;
        let message = null;
        let data : string | JwtPayload | undefined = undefined;

        jwt.decode

        jwt.verify(token, AUTH_SECRET, function(err, decoded) {
            if (err instanceof Error) {
                message = err.message;
                result = false;
                data = {};
            }else{
                message = null;
                result = true;
                data = decoded;
            }
        });

        return { result, message, data };
    }
}

export { TokenFacade };