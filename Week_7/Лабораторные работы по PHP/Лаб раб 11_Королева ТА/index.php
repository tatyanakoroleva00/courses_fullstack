<?php
function d($arr) {
    echo '<pre>';
    print_r($arr);
    echo '</pre>';
}

//Лабораторная работа ООП в PHP



//Задача 1. Сделайте класс Employee (работник), в котором будут следующие свойства - name (имя), age (возраст), salary (зарплата).

//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//}

//Задача 2. Создайте объект класса Employee, затем установите его свойства в следующие значения - имя 'john', возраст 25, зарплата 1000.

//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//
//    public function __construct($name, $age, $salary) {
//        $this->name=$name;
//        $this->age=$age;
//        $this->salary=$salary;
//    }
//}
//
//$John = new Employee('john', 25, 1000);

//Задача 3. Создайте второй объект класса Employee, установите его свойства в следующие значения - имя 'eric', возраст 26, зарплата 2000.

//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//
//    public function __construct($name, $age, $salary) {
//        $this->name=$name;
//        $this->age=$age;
//        $this->salary=$salary;
//    }
//}
//
//$john = new Employee('john', 25, 1000);
//$eric = new Employee('eric', 26, 2000);

//Задача 4. Выведите на экран сумму зарплат созданных юзеров.

//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//
//    public function __construct($name, $age, $salary) {
//        $this->name=$name;
//        $this->age=$age;
//        $this->salary=$salary;
//    }
//}
//
//$john = new Employee('john', 25, 1000);
//$eric = new Employee('eric', 26, 2000);
//
//echo $john->salary + $eric->salary;

//Задача 5. Выведите на экран сумму возрастов созданных юзеров.

//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//
//    public function __construct($name, $age, $salary) {
//        $this->name=$name;
//        $this->age=$age;
//        $this->salary=$salary;
//    }
//}
//
//$john = new Employee('john', 25, 1000);
//$eric = new Employee('eric', 26, 2000);

//echo $john->salary + $eric->salary;
//echo $john->age + $eric->age;

//Задача 6*. Сделайте в классе Employee метод getName, который будет возвращать имя работника.

//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//
//    public function __construct($name, $age, $salary) {
//        $this->name=$name;
//        $this->age=$age;
//        $this->salary=$salary;
//    }
//
//    public function getName() {
//       echo $this->name . '<br>';
//    }
//}
//
//$john = new Employee('john', 25, 1000);
//$john->getName();
//$eric = new Employee('eric', 26, 2000);
//$eric->getName();

//echo $john->salary + $eric->salary;
//echo $john->age + $eric->age;


//Задача 7*. Сделайте в классе Employee метод getAge, который будет возвращать возраст работника.

//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//
//    public function __construct($name, $age, $salary) {
//        $this->name=$name;
//        $this->age=$age;
//        $this->salary=$salary;
//    }
//
//    public function getName() {
//       return $this->name . '<br>';
//    }
//
//    public function getAge() {
//        return $this->age . '<br>';
//    }
//}
//
//$john = new Employee('john', 25, 1000);
//$john->getName();
//$john->getAge();
//
//$eric = new Employee('eric', 26, 2000);
//$eric->getName();
//$eric->getAge();

//echo $john->salary + $eric->salary;
//echo $john->age + $eric->age;


//Задача 8*. Сделайте в классе Employee метод getSalary, который будет возвращать зарплату работника.

//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//
//    public function __construct($name, $age, $salary) {
//        $this->name=$name;
//        $this->age=$age;
//        $this->salary=$salary;
//    }
//
//    public function getName() {
//       return $this->name . '<br>';
//    }
//
//    public function getAge() {
//        return $this->age . '<br>';
//    }
//
//    public function getSalary() {
//        return $this->salary . '<br>';
//    }
//}
//
//$john = new Employee('john', 25, 1000);
//$john->getName();
//$john->getAge();
//$john->getSalary();
//
//$eric = new Employee('eric', 26, 2000);
//$eric->getName();
//$eric->getAge();
//$eric->getSalary();
//
//echo $john->salary + $eric->salary;
//echo $john->age + $eric->age;

//Задача 9*. Сделайте в классе Employee метод checkAge, который будет проверять то, что работнику больше 18 лет
// и возвращать true, если это так, и false, если это не так.
//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//
//    public function __construct($name, $age, $salary) {
//        $this->name=$name;
//        $this->age=$age;
//        $this->salary=$salary;
//    }
//
//    public function getName() {
//        return $this->name . '<br>';
//    }
//
//    public function getAge() {
//        return $this->age . '<br>';
//    }
//
//    public function getSalary() {
//        return $this->salary . '<br>';
//    }
//
//    public function checkAge() {
//    echo ($this->age) > 18 ? "true<br>" : 'false';
//    }
//}
//
//$john = new Employee('john', 25, 1000);
//$john->getName();
//$john->getAge();
//$john->getSalary();
//$john->checkAge();
//
//$eric = new Employee('eric', 26, 2000);
//$eric->getName();
//$eric->getAge();
//$eric->getSalary();
//$eric->checkAge();
//
//echo $john->salary + $eric->salary;
//echo $john->age + $eric->age;

//Задача 10*. Создайте два объекта класса Employee, запишите в их свойства какие-либо значения.
// С помощью метода getSalary найдите сумму зарплат созданных работников.

//class Employee {
//    public $name;
//    public $age;
//    public $salary;
//
//    public function __construct($name, $age, $salary) {
//        $this->name=$name;
//        $this->age=$age;
//        $this->salary=$salary;
//    }
//
//    public function getName() {
//        return $this->name . '<br>';
//    }
//
//    public function getAge() {
//        return $this->age . '<br>';
//    }
//
//    public function getSalary() {
//        return $this->salary;
//    }
//
//    public function checkAge() {
//    echo ($this->age) > 18 ? "true<br>" : 'false';
//    }
//}

//$john = new Employee('john', 25, 1000);
//$john->getName();
//$john->getAge();
//$john->getSalary();
//$john->checkAge();
//
//$eric = new Employee('eric', 26, 2000);
//$eric->getName();
//$eric->getAge();
//$eric->getSalary();
//$eric->checkAge();

/*echo $john->salary + $eric->salary;
echo $john->age + $eric->age;*/

//$anna = new Employee('anna', '30', 500);
//$sebastian = new Employee('sebastian', '31', 700);
//
//echo $anna->getSalary() + $sebastian->getSalary();

