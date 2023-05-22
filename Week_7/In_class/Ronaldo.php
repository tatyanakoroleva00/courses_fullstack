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



//class Tanks { //ТТХ
//    public $max_speed;
//    public $armor;
//    public $crew;
//    public $clearance;
//
//    public function __construct($max_speed, $armor, $crew, $clearance) {
//    $this->max_speed = $max_speed;
//    $this->armor = $armor;
//    $this->crew = $crew;
//    $this->clearance = $clearance;
//    }
//
//    public function getData() {
//        echo "<div style = 'background-image: url('https://img.freepik.com/premium-vector/military-background-grunge-style_1102-1133.jpg'); width: 100%;'>
// <div style='background-color: beige;
//    display: flex; justify-content: center; flex-direction: column; height: 500px;
//    border: 1px solid black; width: 400px; margin: 0 auto; padding: 7px;'><h1>ТАНКИ РФ (общие сведения)</h1>
//    <p><img width='300px' src='https://victorymuseum.ru/upload/iblock/819/XK4N0834.jpg'></p>
//    <p><b>Максимальная скорость:</b> $this->max_speed</p>
//    <p><b>Экипаж:</b> $this->crew</p>
//    <p><b>Толщина брони:</b> $this->armor</p>
//    <p><b>Клиренс: </b>$this->clearance</p><br>
//    </div>";
//    }
//}
////ТТХ танки
//$tank = new Tanks('54km/h', '45mm','4чел', '400mm');
//$tank->getData();
//
//class tank

echo <<<_HTML_
<div style="padding-top: 50px; height: 90vh; width: 100vw; display: flex; justify-content: space-between; background-image: url('https://img.freepik.com/free-vector/realistic-american-football-stadium_52683-53798.jpg?w=2000')">
_HTML_;



class footballTeams{
    public $country;

    public function __construct($country) {
        $this->country = $country;
    }
    public function getData() {
        echo <<<_HTML_
        <div style='background-color: beige; display: flex; flex-direction: column; height: 450px; 
            border: 1px solid black; width: 300px; margin: 0 auto; padding: 7px;'>
            <h1>Football teams</h1>
            <h2>$this->country</h2>
            <p><img src='https://images.sportsbrief.com/images/1120/7bd1a62693c9bfb2.jpeg?v=1' width='300px' alt="Portugal Team"></p>
            <p>Team: $this->country</p>
            </div>
_HTML_;
    }
}
$portugalTeam = new footballTeams('Portugal');
$portugalTeam->getData();

class PlayersPortugal extends footballTeams
{
    public $name;
    public $image;

    public function __construct($country, $name, $image)
    {
        parent::__construct($country);
        $this->name = $name;
        $this->image=$image;
    }

    public function getData()
    {
        echo <<<_HTML_
        <div style='background-color: beige; display: flex; flex-direction: column; height: 450px; 
            border: 1px solid black; width: 300px; margin: 0 auto; padding: 7px;'>
            <h1>Football player</h1>
            <h2>$this->country</h2>
            <p><img src="$this->image" width='100px' height="150px" alt="Portugal Team"></p>
            <p>Team: $this->country</p>
            <p>Player: $this->name</p>
        </div>
_HTML_;
    }
}
$Ronaldo = new PlayersPortugal('Portugal', 'Ronaldo', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg');
$Ronaldo->getData();
$Messi = new PlayersPortugal('Argentina', 'Messi', 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg');
$Messi->getData();
echo <<<_HTML_
</div>
_HTML_;