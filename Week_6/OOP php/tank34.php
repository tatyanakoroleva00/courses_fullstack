<?php
function d($arr)
{
    echo '<pre>';
    print_r($arr);
    echo '</pre>';
}
//class Tanks { //ТТХ - тактико-техн.хар-ки танков
//    public $max_speed; //макс.скорость км/ч
//    public $armor; //толщина брони в мм
//    public $crew; //экипаж кол-во чел в танке
//    public $clearance; //клиренс в мм
//
//    public function getData() {
//    echo "<div style='background-color: beige; display: block; width: 400px; margin: 0 auto; padding: 7px;'><h1>ТАНК Т-34</h1>
//    <p><img width='300px' src='https://victorymuseum.ru/upload/iblock/819/XK4N0834.jpg'</p>
//    <p><b>Максимальная скорость:</b> $this->max_speed</p>
//    <p><b>Экипаж:</b> $this->crew</p>
//    <p><b>Толщина брони:</b> $this->armor</p>
//    <p><b>Клиренс: </b>$this->clearance</p>
//    </div>";
//    }
//}
////ТТХ танка Т-34
//$tankT34 = new Tanks();
//$tankT34->max_speed = '54km/h';
//$tankT34->armor = '45mm';
//$tankT34->crew = '4';
//$tankT34->clearance = '400mm';
//$tankT34->getData();

//d($tankT34);



class Tanks { //ТТХ
    public $max_speed;
    public $armor;
    public $crew;
    public $clearance;

    public function __construct($max_speed, $armor, $crew, $clearance) {
    $this->max_speed = $max_speed;
    $this->armor = $armor;
    $this->crew = $crew;
    $this->clearance = $clearance;
    }

    public function getData() {
        echo "<div style = 'background-image: url('https://img.freepik.com/premium-vector/military-background-grunge-style_1102-1133.jpg'); width: 100%;'> <div style='background-color: beige;
    display: flex; justify-content: center; flex-direction: column; height: 500px; 
    border: 1px solid black; width: 400px; margin: 0 auto; padding: 7px;'><h1>ТАНК Т-34</h1>
    <p><img width='300px' src='https://victorymuseum.ru/upload/iblock/819/XK4N0834.jpg'></p>
    <p><b>Максимальная скорость:</b> $this->max_speed</p>
    <p><b>Экипаж:</b> $this->crew</p>
    <p><b>Толщина брони:</b> $this->armor</p>
    <p><b>Клиренс: </b>$this->clearance</p>
    </div></div>";
    }
}
//ТТХ танка Т-34
$tankT34 = new Tanks('54km/h', '45mm','4чел', '400mm');
$tankT34->getData();



