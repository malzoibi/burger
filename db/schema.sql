CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (250) NOT NULL,
devoured BOOL DEFAULT false, 
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE); 
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE); 
INSERT INTO burgers (burger_name, devoured) VALUES ('Chicken Burger', FALSE); 

