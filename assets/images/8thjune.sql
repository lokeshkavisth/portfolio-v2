use transform

select orders.orderid,employees.lastname
from orders
right join employees on orders.employeeid=  employees.employeeid
order by orders.orderid

select count(*) from customers; -- 91
select count(*) from orders; -- 196


select customers.customername,orders.orderid
from customers
cross join orders
order by customers.customerName;

select count(*)
from customers
cross join orders;


select city from customers
union
select city from suppliers

select city from customers
union all
select city from suppliers


-- group by

select count(customerid),country from customers group by country
select count(customerid) as 'CustomerCount',country from customers
 group by country 
having CustomerCount>4

-- cascade delete
drop database sample
create database sample

CREATE TABLE Employee (  
  emp_id int(10) NOT NULL ,  
  name varchar(40) NOT NULL,  
  birthdate date NOT NULL,  
  gender varchar(10) NOT NULL,  
  hire_date date NOT NULL,  
  PRIMARY KEY (emp_id)  
);  

INSERT INTO Employee (emp_id, name, birthdate, gender, hire_date) VALUES  
(101, 'Bryan', '1988-08-12', 'M', '2015-08-26'),  
(102, 'Joseph', '1978-05-12', 'M', '2014-10-21'),  
(103, 'Mike', '1984-10-13', 'M', '2017-10-28'),  
(104, 'Daren', '1979-04-11', 'M', '2006-11-01'),  
(105, 'Marie', '1990-02-11', 'F', '2018-10-12'); 

CREATE TABLE Payment (  
  payment_id int(10) PRIMARY KEY NOT NULL,  
  emp_id int(10) NOT NULL,  
  amount float NOT NULL,  
  payment_date date NOT NULL,  
  FOREIGN KEY (emp_id) REFERENCES Employee (emp_id) ON DELETE CASCADE  
);   

INSERT INTO Payment (payment_id, emp_id, amount, payment_date) VALUES   
(301, 101, 1200, '2015-09-15'),  
(302, 101, 1200, '2015-09-30'),  
(303, 101, 1500, '2015-10-15'),  
(304, 101, 1500, '2015-10-30'),  
(305, 102, 1800, '2015-09-15'),  
(306, 102, 1800, '2015-09-30'); 


select * from employee where emp_id=102
select * from payment where emp_id=102


delete from employee where emp_id=102


-- alter 
use transform

select * from customers limit 1

alter table customers
add email varchar(200)

alter table customers
drop column email

alter table customers
add dateofbirth date

alter table customers
modify column dateofbirth year


create table Test(
id int not null,
name varchar(20)
)

alter table test
add constraint primary key(id)


-- self join
use transform

select A.customerName as CustomerName1 , B.customerName as customerName2
 from customers A, customers B
where A.customerId <> B.customerId
and a.city=b.city
order by a.city


select now()
select curdate()
select curtime()

select Adddate('2023-06-05',12)
select adddate('2023-06-05',interval 2 hour)

SELECT ADDTIME('2020-01-02 12:11:11', '01:10:00');

select subdate('2020-08-15', 31)

SELECT SUBTIME('2020-01-02 12:11:11', '02:20:05');

-- SELECT CONVERT_TZ('2004-01-01 12:00:00', 'UTC', 'MET');

SELECT FROM_UNIXTIME(1547430881);
SELECT UNIX_TIMESTAMP('2020-03-15 07:10:56.123')

create temporary table Sales(
productName varchar(200)
-- date datetime
)
use transform
select * from sales
insert into sales values('Test',curdate())
drop temporary table sales

select * from customers where customerid in (
select customerid from customers where city ="Berlin"
)

insert into sales select customerName from customers

select * from sales

create database sample
use sample

create table workcenters(
id int auto_increment primary key,
name varchar(100) not null,
capacity int not null
)

create table workcentercapacity(
totalcapacity int not null
)


-- trigger
delimiter $$
create trigger before_workcenter_insert
before insert
on workcenters for each row
begin
    declare rowcount int;
    select count(*) into rowcount from workcentercapacity;
    
    if rowcount>0 then
    update workcentercapacity
    set totalcapacity= totalcapacity+ new.capacity;
    else
     insert into workcentercapacity values(new.capacity);
    end if;
end $$
delimiter;

select * from workcentercapacity
select * from workcenters

insert into workcenters(name,capacity) values("First",200);
insert into workcenters(name,capacity) values("second",400);



-- after insert 

CREATE TABLE members (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    birthDate DATE,
    PRIMARY KEY (id)
);

CREATE TABLE reminders (
    id INT AUTO_INCREMENT,
    memberId INT,
    message VARCHAR(255) NOT NULL,
    PRIMARY KEY (id , memberId)
);


DELIMITER $$

CREATE TRIGGER after_members_insert
AFTER INSERT
ON members FOR EACH ROW
BEGIN
    IF NEW.birthDate IS NULL THEN
        INSERT INTO reminders(memberId, message)
        VALUES(new.id,CONCAT('Hi ', NEW.name, ', please update your date of birth.'));
    END IF;
END$$

DELIMITER ;

INSERT INTO members(name, email, birthDate)
VALUES
    ('John Doe', 'john.doe@example.com', NULL),
    ('Jane Doe', 'jane.doe@example.com','2000-01-01');

select * from reminders






