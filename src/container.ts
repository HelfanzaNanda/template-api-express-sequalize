import { Container } from 'injektion';
import {
  UserRepository,
} from './app/Repositories';

const container = new Container({
  autoloadBaseDir: './src/app',
});


// Container.bind('UserRepository', UserRepository)
container.bind('UserRepository', UserRepository);

export default container;