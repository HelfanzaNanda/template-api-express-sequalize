<!-- # Express API Repository Template -->

## Clone
1. git clone https://github.com/HelfanzaNanda/averin-express.git

## Setup

1. Copy `.env.example` as `.env`
2. Replace the environment variables as necessary
3. Install the dependencies with `npm install`

## Execution

```bash
# migrate to database
$ npx sequelize-cli db:migrate

# seed data into database
$ npx sequelize-cli db:seed:all

# run in development mode with hot reload
$ npm run dev

# build for production and run in production
$ npm run build
$ npm run start
```