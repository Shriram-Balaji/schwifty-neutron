 CREATE USER sleepy_torpedo WITH PASSWORD 'sleepy_torpedo' CREATEDB; 
 CREATE DATABASE sleepy_torpedo_test OWNER sleepy_torpedo;
 GRANT ALL PRIVILEGES ON DATABASE sleepy_torpedo_test TO sleepy_torpedo;
