/* ---- SQL commands used for prod. database ----- */
-- CREATE USER sleepy_torpedo WITH PASSWORD 'sleepy_torpedo' CREATEDB;

CREATE DATABASE sleepy_torpedo OWNER sleepy_torpedo;

GRANT ALL PRIVILEGES ON DATABASE sleepy_torpedo TO sleepy_torpedo;

CREATE TABLE access_token ( token_id SERIAL PRIMARY KEY, name VARCHAR(40) NOT NULL, description TEXT, token VARCHAR(200), endpoint TEXT );
