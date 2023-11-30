
import { UserRepository } from 'app/Repositories/UserRepository';
import { AccountNotActivatedError, EmailAlreadyInUseError, InvalidCredentialsError } from '../Errors';
import { PasswordFacade, TokenFacade } from '../Facades';
import { Role, User } from '../Models';
import { Includeable } from 'sequelize';

class AuthService {
    constructor( private userRepository: UserRepository, ) { }

    public async login(email: string, password: string): Promise<any> {
        const include : Includeable[] = [
            {
                model : Role,
                through: {attributes: []},
                attributes: ['id', 'name']
            }
        ];
        const user = await this.userRepository.findByEmail(email, include);

        if (!user) {
            throw new InvalidCredentialsError();
        }

        const passwordMatches = PasswordFacade.compare(password, user.password);

        if (!passwordMatches) {
            throw new InvalidCredentialsError();
        }

        return AuthService.generateToken(user);
    }

    public async createUser(name: string, email: string, password: string): Promise<User> {
        if (await this.userRepository.emailExists(email)) {
            throw new EmailAlreadyInUseError();
        }

        return this.userRepository.create({
            name,
            email,
            password: PasswordFacade.hash(password),
        });
    }

    private static async generateToken(user: User): Promise<any> {
        const userData = {
            id: user.id,
            email: user.email,
            name: user.name,
            roles: user.roles
        };
        const expiresIn = 60 * 60;
        const authData = {
            user: userData,
            jwt : {
                token: await TokenFacade.sign(userData, {
                    expiresIn: expiresIn,
                }),
                expiresIn : expiresIn,
                token_type : 'bearer'
            }

        };

        return authData;
    }
}

export { AuthService };