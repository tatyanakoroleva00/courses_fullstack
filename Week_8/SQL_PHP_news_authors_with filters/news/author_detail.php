<?php
// отображение инфо об авторе по ID
// echo '<h1>Отображение автора по ID: ' . $_GET['id'] . '</h1>';
// var_dump($_GET);

/*
Задание: реализовать скрипт отображения автора новости по ID по аналогии с файлом news_detail.php.

1. В этом файле мы получили ID автора, его нужно забрать из массива $_GET и положить в переменную. +
2. Далее нужно написать текст запроса к таблице с авторами для получения одного автора по имеющемуся ID.
3. Выполнить запрос к БД и получить данные об авторе.
4. С помощью fetch() забрать данные из полученного объекта и положить в переменную.
5. Вывести данные из полученного массива в HTML-разметку
6. Взять с полки пирожок и с наслаждением заслуженно его съесть.
*/

require '../DBConnect.php';
$pdo = DBConnect::getConnection();

//echo $_GET['id'];

$id = (int)$_GET['author_id'];
if($id === 0){
    $id = 1;
}

$query = "SELECT authors.id AS author_id, first_name, last_name, age, country, avatar, 
       news.id AS news_id, `category`, `title`, `short_text`, `news_image`, `add_date`
		    FROM authors, news 
			WHERE authors.id = author_id
			AND authors.id = ?
            ORDER by add_date desc;";

$result = $pdo->prepare($query);// 1. подготавливаем запрос
$result->execute( [$id] ); // 2. Выполняем запрос к бд  [4]

//DBConnect::d($result->fetch());
$news_data = $result->fetch();
$dt =  new DateTime($news_data['add_date']);
$dt = $dt->format('Y-m-d');
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= "Автор: " . $news_data['first_name'] . ' ' . $news_data['last_name'] ?></title>
    <style>
        body {
            background-color: white;
            margin: 0;
            padding: 0;
            background-color: gray;
        }
        .author__page {
            width: 900px;
            margin: 0 auto;
            border: 1px solid black;
            /*background-color: white;*/
            padding: 20px;
            background-color: darkgrey;
        }
        .author__content {
            display: flex;
            flex-direction: row;
            gap: 10px;
            width: 100%;
        }
        .author {
            display: flex;
            flex-direction: column;
            width: 300px;
            border: 5px solid gray;
            font-size: 20px;
        }
        .author__image {
            width: 300px;
            float: left;
        }
        .author__bottom {
            padding: 10px;
            background-color: white;
        }
        .author__fullname {
            font-weight: bold;
            font-size: 20px;
        }
        .author__age span, .author__country span {
            font-weight: bold;
        }
        .author__news {
            background-color: white;
            width: 100%;
        }
        .author__news-title {
            text-align: center;
            font-size: 40px;
            border-bottom: 5px solid gray;
            font-weight: bold;
        }
        .author__news-list {
            padding: 10px;
            font-size: 20px;
        }
        .news__item {
            display: flex;
            flex-direction: row;
            background-color: #eaeaea;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .news__item-date {
            width: 20%;
        }
        .news__item-news {
            width: 80%;
        }
        .links__block {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: center;
            padding: 20px;
            gap: 10px;
            font-weight: bold;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="author__page">
        <div class="author__content">
            <div class="author">
                <img class="author__image" src="../<?=$news_data['avatar']?>" alt="<?=$news_data['last_name']?>">
                <div class="author__bottom">
                <p class="author__fullname"><?=$news_data['first_name']?> <?=$news_data['last_name']?></p>
                <p class="author__age"><span>Возраст:</span> <?=$news_data['age']?></p>
                <p class="author__country"><span>Страна проживания: </span> <?=$news_data['country']?></p>
                </div>
            </div>
            <div class="author__news">
                <div class="author__news-title">Статьи:</div>
                <div class="author__news-list">
                    <?php while ($news_data = $result->fetch()): ?>
                    <div class="news__items">
                        <div class="news__item">
                            <div class="news__item-date"><?= $dt ?></div>
                            <div class="news__item-news"><a href="news_detail.php?id=<?=$news_data['news_id']?>"><?= $news_data['title']?></a></div>
                        </div>
                    </div>
                    <?php endwhile;?>
                </div>
            </div>
        </div>
        <div class="links__block">
            <a href="../index.php">Главная</a>
            <a href="news.php">Новости</a>
        </div>
    </div>


</body>
</html>