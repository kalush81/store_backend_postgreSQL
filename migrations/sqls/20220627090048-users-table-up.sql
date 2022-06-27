/* Replace with your SQL commands */
CREATE TABLE users (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), email VARCHAR(30), passhash VARCHAR);

INSERT INTO users (email, passhash) VALUES ('bla1@bla', 'abc');
INSERT INTO users (email, passhash) VALUES ('bla2@bla', 'xyz');
INSERT INTO users (email, passhash) VALUES ('bla3@bla', '123');