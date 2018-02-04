/* ---- SQL commands used for prod. database ----- */
-- CREATE USER sleepy_torpedo WITH PASSWORD 'sleepy_torpedo' CREATEDB;

CREATE DATABASE sleepy_torpedo OWNER sleepy_torpedo;

GRANT ALL PRIVILEGES ON DATABASE sleepy_torpedo TO sleepy_torpedo;

CREATE TABLE IF NOT EXISTS access_token ( token_id SERIAL PRIMARY KEY, name VARCHAR(40) NOT NULL, description TEXT, token VARCHAR(200), endpoint TEXT );

CREATE TABLE IF NOT EXISTS crypto_hash (hash_id SERIAL PRIMARY KEY, hash_token TEXT);

CREATE TABLE IF NOT EXISTS dribbble_data (shot_id SERIAL PRIMARY KEY, title VARCHAR(100) NOT NULL, tags VARCHAR(100), username VARCHAR(220) NOT NULL, user_id VARCHAR(100), data jsonb )