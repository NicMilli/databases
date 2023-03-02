CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT, username VARCHAR(20), text VARCHAR(120), room VARCHAR(20), createdAt DATETIME
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- // text, username, id, room