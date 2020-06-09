DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLES burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name CHARVAR(50),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);