<?php
require 'DBConnect.php';
$pdo = DBConnect::getConnection();
//DBConnect::d($pdo);

//---------------------Задание 1. # Простые запросы-----------------------------------
//Получить все данные из таблицы offices

//$query = "SELECT *
//            FROM offices;";
//$result = $pdo->query($query)->fetchAll(); //Все результаты
//$result = $pdo->query($query)->fetch(); // 1 результат - 1 строка, 1 массив
//DBConnect::d($result);

//var_dump($result); - некрасивая структура
//echo($result); - не можем вывести, т.к. массивы внутри!

//------------------------2. Получить все данные из таблицы orders-------------------------

//$query = "SELECT *
//            FROM orders;";
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------3.Получить все данные из таблицы customers----------------

//$query = "SELECT *
//            FROM customers;";
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//---------------------------------4.Получить все данные из таблицы salesreps----------------

//$query = "SELECT *
//            FROM salesreps;";
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------5.Получить city, target, sales из таблицы offices----------------

//$query = "SELECT city, target, sales
//FROM offices;";
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------6.Получить office region target из таблицы offices----------------
//$query = "SELECT office, region, target
//FROM offices;";
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------7. Получить номера заказов, менеджеров, производителей и сумму
// заказов из таблицы заказов---------------

//$query = "SELECT order_num, rep, mfr, qty
//FROM orders;";
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//$query = "SELECT SUM(qty)
//FROM orders;";
//$result2 = $pdo->query($query)->fetchAll();
//echo $result2 = 'SUM is equal to ' . $result2[0]['SUM(qty)'];


//---------------------------------8. Получить имена, возраст, должность и день найма у работников из таблицы salesreps-------
//$query = "SELECT name, age, title, hire_date
//FROM salesreps;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------9. Получить список офисов, которые расположены в западном регионе,
// с планами продаж и фактическими продажами-------

//$query = "SELECT office, target, sales
//FROM offices
//WHERE region = 'WESTERN';";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------10. Получить список покупателей, включая номер, номер менеджера и
// кредитный лимит, где лимит равен 55000-------

//$query = "SELECT cust_num, company, cust_rep, credit_limit
//FROM customers
//WHERE credit_limit = 55000;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------11. Получить имя, план продаж и факт продаж служащего с номером 108 -------
//$query = "SELECT name, quota, sales
//FROM salesreps
//WHERE empl_num = 108;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------12. Получить имя, план продаж и факт продаж служащих,
// у которых номер менеджера = 106 -------

//$query = "SELECT name, quota, sales
//FROM salesreps
//WHERE manager = 108;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------13. Получить список имен и дат приема на
// работу служащих, у которых факт продажи больше 300000 -------

//$query = "SELECT name, hire_date
//FROM salesreps
//WHERE sales > 300000;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------14. Получить имена, возраст, дату найма,
// продажи у работников, которые не выполнили план -------

//$query = "SELECT name, age, hire_date
//FROM salesreps
//WHERE quota > sales;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------15. Получить офис, города, регион и сумм, на
// которые бы перевыполнен или не довыполнен план по продажам -------

//$query = "SELECT office, city, region,
//(sales - target) as difference
//FROM offices;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//---------------------------------16. Получить номера сотрудников, имена, возраст и
// вычислить сколько лет осталось до 100 лет
//
//$query = "SELECT empl_num, name, age,
//(100 - age) as years_left
//FROM salesreps;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//---------------------------------17. Получить идентификатор продукта, описание и суммарную стоимость по каждому товару---
//$query = "SELECT product_id, description,
//(price * qty_on_hand) as sum
//FROM products;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------18. Получить список регионов офисов без повторений---------
//$query = "SELECT DISTINCT region
//FROM offices;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------19. Получить имена, фактический план продаж и план продаж + 10%---------

//$query = "SELECT name, quota, (quota * 1.1) as 110perc_quota
//from salesreps;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//---------------------------------20. Найти имена работников, которые приняты на работу до '2007-01-01'---------
//$query = "SELECT name
//FROM salesreps
//WHERE hire_date < '2007-01-01';";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//---------------------------------21. Получить список офисов, где фактические продажи были менее 90% от плана---------
//$query = "SELECT office
//FROM offices
//WHERE sales < (target * 0.9);";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------22. Получить список офисов, менеджером которых не является менеджер с номером 106---------
//$query = "SELECT office
//FROM offices
//WHERE mgr = 106;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------23. Получить номера заказов, дату заказа,
// количество и стоимость по заказам, которые совершены за первый квартал 2008---------

//$query = "SELECT order_num, order_date, qty, amount
//FROM orders
//WHERE order_date BETWEEN '2008-01-01' AND '2008-04-01';
//";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------24. Получить номера покупателей, компанию, кредитный лимит
// всех покупателей где кредитный лимит между 20000 и 40000---------

//$query = "SELECT cust_num, company, credit_limit
//FROM customers
//WHERE credit_limit BETWEEN 20000 AND 40000;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//---------------------------------25. Получить список работников, у которых факт. продажи менее 90% либо более 110% от плана---------

//$query = "SELECT name
//FROM salesreps
//WHERE sales BETWEEN (quota * 0.9) AND (quota * 1.1);";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------26. Получить сотрудников из офисов 21, 22, 11---------
//$query = "SELECT name
//FROM salesreps
//WHERE rep_office = 21 OR rep_office = 22 OR rep_office = 11;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------27. Получите номера заказов, даты заказов,
// количество и стоимость заказов которые не обслуживали
// сотрудники (Sue Smith, Bill Adams, Larry Fitch)---------

//$query = "SELECT order_num, order_date, qty, amount
//FROM orders
//WHERE rep != 102 AND rep != 105 AND rep != 108
//;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);



//---------------------------------28. Получить имя компании, кредитный лимит для компании 'AAA Investments'
//$query = "SELECT company, credit_limit
//FROM customers
//WHERE company = 'AAA Investments';";
//
//$result = $pdo->query($query)->fetch();
//DBConnect::d($result);

//---------------------------------29. Найти все заказы, сделанные в 2008г
//$query = "SELECT order_num, order_date
//FROM orders
//WHERE YEAR(order_date) = 2008;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//---------------------------------30. Получить столбики с номером заказа, датой и стоимостью

//$query = "SELECT order_num, order_date, amount
//FROM orders;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------------------------31. Получить имена сотрудников, у которых нет руководителя
//$query = "SELECT name
//FROM salesreps
//WHERE manager is NULL;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//-------------------------------32. Получить имена сотрудников, у которых есть руководитель
//$query = "SELECT name, manager
//FROM salesreps
//WHERE manager IS NOT NULL;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//-------------------------------33. Получить имя, план продаж и
// продажи сотрудников, у которых продажи меньше плана и меньше 300000

//$query = "SELECT name, quota, sales
//FROM salesreps
//WHERE sales < quota AND sales < 300000;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//-------------------------------34. Получить город, регион, продажи из
// таблицы офисов отсортированные по уменьшению продаж

//$query = "SELECT city, region, sales
//FROM offices
//ORDER BY sales DESC;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//-----------------------------------------Задание 2. # Многотабличные запросы
//1. Получить номер, город, регион офисов, а также имя и возраст руководителей этих офисов
//$query = "SELECT office, city, region, name, age
//FROM offices, salesreps
//WHERE empl_num = mgr;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//-------------------------------------------2.Получить идентификатор, имя, возраст, должность сотрудников, а
// также город офиса, в котором они работают и регион этого офиса

//$query = "SELECT empl_num, name, age, title, city, region
//FROM salesreps, offices
//WHERE empl_num = mgr;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//----------------------------------------------3.Получить идентификатор клиента, название клиентов,
// а также имя, возраст, должность закрепленных за ними сотрудников

//$query = "SELECT cust_num, company, name, age, title
//FROM customers, salesreps
//WHERE cust_rep = empl_num;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//----------------------------------------------4.Получить номер, дату, стоимость заказов,
// а также названия клиентов, которые их оформили

//$query = "SELECT order_num, order_date, amount, company
//FROM orders, customers
//WHERE cust_num = cust;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//----------------5. Получить номер, дату, стоимость заказов, а также названия клиентов,
//которые их оформили и имя, должность сотрудников, которые эти заказы сопровождали


//$query = "SELECT order_num, order_date, amount, cust_num, name, title
//FROM orders, customers, salesreps
//WHERE cust = cust_num AND cust_rep = empl_num;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------6. Получить номер, дату, кол-во, стоимость заказов,
//а также названия клиентов, которые их оформили и имя,
//должность сотрудников, которые эти заказы сопровождали и описание, и цену продукции

//$query = "SELECT order_num, order_date, qty, amount, company, name, title
//       FROM orders, customers, salesreps
//        WHERE cust = cust_num AND cust_rep = empl_num;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);


//---------------7. Получить номер, дату, кол-во, стоимость заказов, а также названия клиентов,
// которые их оформили и имя, должность сотрудников, которые
// эти заказы сопровождали,
// а также город и регион офисов, в которых
// эти сотрудники работают и описание, и цену продукции

//$query = "SELECT order_num, order_date, qty, amount, company, name, title,
//       city, region, description, (price * qty_on_hand) as production_price
//       FROM orders, customers, salesreps, offices, products
//    WHERE cust = cust_num AND cust_rep = empl_num AND empl_num = mgr AND  mfr = mfr_id;";
//
//$result = $pdo->query($query)->fetchAll();
//DBConnect::d($result);

//---------------8. Получить номер, имя, возраст, продажи сотрудника, а
// также город, регион, продажи офиса, в котором сотрудники работают


//$query = "SELECT empl_num, name, age, city, region
//FROM salesreps, offices
//WHERE empl_num = mgr;";
//
//$result = $pdo ->query($query)->fetchAll();
//DBConnect::d($result);










