CREATE DATABASE streetart_app;

CREATE TABLE art_sites
(
  id SERIAL4 PRIMARY KEY,
  artist_name VARCHAR(100) NOT NULL,
  address VARCHAR(400),
  art_photo VARCHAR(100),
  artist_url VARCHAR(100) 

);

INSERT INTO art_sites (artist_name, address, art_photo, artist_url) VALUES ('Heesco', 'cnr Hopkins and Shelley Streets, Footscray', '/img/franco_cozzo.jpg', 'https://www.heesco.com');

