CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  category_id INT
);

FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE;



CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price INT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  rating INT NOT NULL,
  category_id INT,
  count INT,

  FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
);


CREATE TABLE customer (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  phone_number VARCHAR(13) UNIQUE NOT NULL,
  password VARCHAR(56) NOT NULL,
  image_url VARCHAR(255)
);



CREATE TYPE order_status AS ENUM ('canceled', 'pending', 'completed', 'payed');


CREATE TABLE orders (
  id SERIAL PRIMARY KEY ,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  customer_id INT,
  address TEXT,
  order_status order_status DEFAULT 'pending',

  FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE
);


CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  price INT NOT NULL,

  FOREIGN KEY (product_id) 
  REFERENCES product(id) 
  ON DELETE CASCADE 
  ON UPDATE NO ACTION,

  FOREIGN KEY (order_id) 
  REFERENCES orders(id) 
  ON DELETE CASCADE 
  ON UPDATE NO ACTION
);

CREATE TABLE contract_type (
    id SERIAL PRIMARY KEY,
    duration INT,
    percentage INT
);

CREATE TABLE contract (
    id SERIAL PRIMARY KEY,
    customer_id INT,
    order_id INT,
    monthly_payment INT,
    contract_type_id INT,
    contract_status ENUM,
    starting_payment_percentage INT,
    total_payment INT,

  FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE,
  FOREIGN KEY (order_id) REFERENCES order(id) ON DELETE CASCADE,
  FOREIGN KEY (contract_type_id) REFERENCES contract_type(id) ON DELETE CASCADE

);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  customer_id INT NOT NULL,
  total_price DECIMAL(20, 2) NOT NULL,
  contract_id INT,

  FOREIGN KEY (customer_id) 
  REFERENCES customer(id) 
  ON DELETE CASCADE 
  ON UPDATE NO ACTION,

  FOREIGN KEY (contract_id) 
  REFERENCES contract(id) 
  ON DELETE CASCADE 
  ON UPDATE NO ACTION
);




