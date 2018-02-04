/* ------- SQL Commands for TEST Database ------- */
CREATE TABLE IF NOT EXISTS access_token ( token_id SERIAL PRIMARY KEY, name VARCHAR(40) NOT NULL, description TEXT, token VARCHAR(200), endpoint TEXT );

CREATE TABLE IF NOT EXISTS crypto_hash (hash_id SERIAL PRIMARY KEY, hash_token TEXT);