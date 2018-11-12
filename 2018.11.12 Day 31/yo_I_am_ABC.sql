-- Exercise A

CREATE TABLE stock (
    id SERIAL primary key,
    name VARCHAR(63) not null,
    description VARCHAR(255),
    quantity integer,
    price decimal
);

-- Exercise B

DROP TABLE stock;

-- Exercise C

CREATE TABLE staff (
    employee_id SERIAL primary key,
    first_name VARCHAR(63),
    last_name VARCHAR(63),
    salary integer,
    contract_length smallint
);

INSERT INTO staff (first_name,last_name,salary,contract_length) VALUES ('Steven','King',10000,3);
INSERT INTO staff (first_name,last_name,salary,contract_length) VALUES ('Neena','Kochhar',8000,2);
INSERT INTO staff (first_name,last_name,salary,contract_length) VALUES ('David','Austin',12000,2);
INSERT INTO staff (first_name,last_name,salary,contract_length) VALUES ('Nancy','Greenberg',3000,1);

-- C1
SELECT first_name, last_name FROM staff WHERE salary < 11000 AND salary > 5000;

-- C2
SELECT first_name, last_name FROM staff WHERE contract_length < 2;

-- C3
INSERT INTO staff (first_name,last_name,salary,contract_length) VALUES ('Jacky','Talkative',20000,0.5);
INSERT INTO staff (first_name,last_name,salary,contract_length) VALUES ('Sam','Teacher',40000,1);

-- C4
UPDATE staff SET contract_length = 2, salary = 8000 WHERE first_name = 'Nancy';

-- C5
SELECT * FROM staff ORDER BY salary DESC;

