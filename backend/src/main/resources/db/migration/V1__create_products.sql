CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  description TEXT,
  image_url VARCHAR(1000),
  active BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO products (name, price, description, image_url) VALUES
('Classic Sneakers',2499.00,'Comfortable everyday sneakers',''),
('Premium Backpack',1899.00,'Durable everyday backpack',''),
('Smart Watch',3999.00,'Modern fitness smart watch',''),
('Wireless Headphones',2999.00,'Wireless over-ear headphones','');
