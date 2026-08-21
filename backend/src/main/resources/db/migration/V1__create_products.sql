CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  description VARCHAR(2000),
  image_url VARCHAR(1000),
  active BOOLEAN NOT NULL DEFAULT TRUE,
  stock INTEGER NOT NULL DEFAULT 0
);

INSERT INTO products (name, price, description, image_url, stock)
SELECT 'Classic Sneakers',2499.00,'Comfortable everyday sneakers','',25
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name='Classic Sneakers');
INSERT INTO products (name, price, description, image_url, stock)
SELECT 'Premium Backpack',1899.00,'Durable everyday backpack','',20
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name='Premium Backpack');
INSERT INTO products (name, price, description, image_url, stock)
SELECT 'Smart Watch',3999.00,'Modern fitness smart watch','',15
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name='Smart Watch');
INSERT INTO products (name, price, description, image_url, stock)
SELECT 'Wireless Headphones',2999.00,'Wireless over-ear headphones','',18
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name='Wireless Headphones');
