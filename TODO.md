# TODO

## Continuos Integration

- Add CircleCI configuration ✓
- Init builds successful on branches ✓

## Database

- This probably requires a database, to cache data and display, we cant really do a request every minute ( costly and inefficient otherwise)
- Decide NoSQL vs SQL ✓ ( [Postgres Wins!](https://www.databaselabs.io/blog/Should-I-use-SQL-or-NoSQL) )
- Decide what tables and schemas are required

## REST Setup

- Initialize endpoints and routes
- Decide endpoints for initial rollout [services](#services_list)
- Setup all Endpoints and auth-tokens in configurations
- Mock up with data from the services, store them in the database and then serve them to work with frontend
- Maybe convert REST endpoints to GraphQL

## Testing

- Write Unit Tests always
- Write integration tests to mock requests or find out better ways of testing ?

## Build and Deploy

- Decide a service to deploy init builds
- Heroku vs AWS vs GCP?

## V2

### Things scheduled for later rollout

- Dockerize Node Application
- Maybe add some personalisaton?