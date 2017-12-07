/* SQL commands used for creation */
CREATE TABLE access_token ( token_id SERIAL PRIMARY KEY, name VARCHAR(40) NOT NULL, description TEXT, token VARCHAR(200), endpoint TEXT );

/* INSERT FAKE ACCESS TOKEN */
INSERT INTO access_token values ('113','fake-service','Fake Service Access Token', 'f58694a9-b7e8-4b61-9e23-96fbaac1f24e', 'http://fake-service-access-token.nope.co.in' );