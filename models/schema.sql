
-- Drops the product if it exists currently --
DROP DATABASE IF EXISTS product_test;

-- Creates the product_test database --
CREATE DATABASE product_test;

USE product_test;

CREATE TABLE sellers (
    sellers_id INT NOT NULL,
    address_id VARCHAR(100) NOT NULL,
    products VARCHAR(100) NOT NULL,
    date_id DATE NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(sellers_id));

CREATE TABLE buyers_wish_list (
    buyers_wish_list_id INT NOT NULL,
    name_id VARCHAR (100) NOT NULL,
    products VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (buyers_wish_list_id)
)