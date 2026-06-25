CREATE DATABASE blog;


USE blog;



CREATE TABLE users(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100) UNIQUE,

password VARCHAR(100)

);



CREATE TABLE posts(

id INT AUTO_INCREMENT PRIMARY KEY,

title VARCHAR(200),

content TEXT

);




INSERT INTO posts(title,content)

VALUES

('Welcome Blog',
'This is my first blog post'),

('Technology',
'Learning full stack development');
