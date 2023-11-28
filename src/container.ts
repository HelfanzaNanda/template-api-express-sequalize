import { Container } from 'injektion';
import { UserRepository, } from './app/Repositories';

const container = new Container({
  autoloadBaseDir: './src/app',
});

// const container = Container.singleton(Logg);


container.bind('UserRepository', UserRepository);

export default container;