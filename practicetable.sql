-- CREATE TABLE penis_info(
-- length_1 INT,
-- name VARCHAR(20),
-- girls VARCHAR(50),
-- girth INT
-- );

-- INSERT INTO penis_info2 (length_1, name,girls,girth)
-- 	VALUES (7, "bigguy","lili", 5),
-- 			(8, "BIGdong", "karol", 6),
-- 			(9, "fatboy", "jill", 6);
 

 -- INSERT INTO people (first_name, last_name, age)
 -- VALUES ("Tina","Belcher",13),
 -- 		("Bob","Belcher",48 ),
 -- 		("Linda","Belcher",45),
 -- 		("phillip","frond",38),
 -- 		("calvin","Fischoeder",70);



-- allways best to set all tables with null collums to something and as 
-- well as the default column to there according variables.
--  CREATE TABLE penis_info2(


-- length_1 INT NOT NULL,
-- name VARCHAR(20) NOT NULL,
-- girls VARCHAR(50) NOT NULL,
-- girth INT NOT NULL
-- );
--*************************EXAMPLE BELOW OF SETTING COLUMNS**************************************

-- CREATE TABLE penis_info3(
-- length_1 INT  NOT NULL DEFAULT 0,
-- name VARCHAR(20) NOT NULL DEFAULT "NAME NOT GIVEN",
-- girls VARCHAR(50) NOT NULL DEFAULT "NAME NOT GIVEN",
-- girth INT NOT NULL DEFAULT 0
-- );


-- INSERT INTO penis_info3 ()
-- 	VALUES ();

--  primary KEY==== IS A UNIQUE IDENTIFIER.
-- you simply just added to the end as a key term and determine it as a roq that is the key,,
CREATE TABLE penis_info4(
length_1 INT  NOT NULL DEFAULT 0,
name VARCHAR(20) NOT NULL ,
girls VARCHAR(50) NOT NULL DEFAULT "NAME NOT GIVEN",
girth INT NOT NULL DEFAULT 0,
penis_info INT NOT NULL,
PRIMARY KEY (penis_info));

