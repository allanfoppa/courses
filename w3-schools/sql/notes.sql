-- W3SCHOOLS TUTORIAL
-- at https://www.w3schools.com/sql/default.asp

-- Some of The Most Important SQL Commands
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index

-- Select all values from table
SELECT * FROM Customers;
-- Select by columns
SELECT CustomerName, City FROM Customers;

-- Select all the different values
SELECT DISTINCT Country FROM Customers;

-- Number of different (distinct)
SELECT COUNT(DISTINCT Country) FROM Customers;
-- Output example: 21

-- With condition

-- With string
SELECT * FROM Customers
WHERE Country='Mexico';

-- With numeric
SELECT * FROM Customers
WHERE CustomerID=1;

-- The following operators can be used in the WHERE clause:
-- =	Equal
-- >	Greater than
-- <	Less than
-- >=	Greater than or equal
-- <=	Less than or equal
-- <>	Not equal. Note: In some versions of SQL this operator may be written as !=
-- BETWEEN	Between a certain range
-- LIKE	Search for a pattern
-- IN	To specify multiple possible values for a column

-- AND example
SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';

-- OR example
SELECT * FROM Customers
WHERE City='Berlin' OR City='München';

-- NOT example
SELECT * FROM Customers
WHERE NOT Country='Germany';

-- Combining AND, OR and NOT
SELECT * FROM Customers
WHERE Country='Germany' AND (City='Berlin' OR City='München');

SELECT * FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA';

-- ORDER BY example
SELECT * FROM Customers
ORDER BY Country;

SELECT * FROM Customers
ORDER BY Country DESC;

-- Orders by Country, but if some rows have the same Country, it orders them by CustomerName.
SELECT * FROM Customers
ORDER BY Country, CustomerName;

SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;

-- INSERT INTO example
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

-- NULL Values
SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;

SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;

-- UPDATE
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1; -- by id only

-- IF WHERE CLAUSE IS OMIT, ALL RECORDS WILL BE CHANGE!

-- UPDATE Multiple records
UPDATE Customers
SET ContactName='Juan'
WHERE Country='Mexico'; -- by column

-- DELETE Statement

DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

-- IF WHERE CLAUSE IS OMIT, ALL RECORDS WILL BE DELETED!

DELETE FROM Customers; -- delete all (rows) customers

-- SQL TOP, LIMIT, FETCH FIRST or ROWNUM Clause
