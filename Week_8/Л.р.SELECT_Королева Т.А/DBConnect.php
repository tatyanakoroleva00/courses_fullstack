<?php
class DBConnect
{
    const DB_NAME = 'test';
    const DB_HOST = 'localhost';
    const DB_LOGIN = 'root';
    const DB_PASSWORD = '';

    private static function getDSN() {
        return "mysql:dbname=".self::DB_NAME.";host=".self::DB_HOST;
    }

    public static function getConnection() {
        return new PDO(self::getDSN(), self::DB_LOGIN,
        self::DB_PASSWORD,
        [
            PDO::ATTR_DEFAULT_FETCH_MODE =>PDO::FETCH_ASSOC,
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
        ]);
    }

    public static function d($arr) {
        echo '<pre>';
        print_r($arr);
        echo '</pre>';
    }
}