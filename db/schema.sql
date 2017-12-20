CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name TEXT,
	eaten BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)
);