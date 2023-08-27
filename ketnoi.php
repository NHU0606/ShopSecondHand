<?php
    $severname="localhost";
    $username="root";
    $password="";
    $database="2hand_shop";

    $conn = mysqli_connect($severname,$username,$password,$database);
    if(!$conn){
        echo ("Ket noi khong thanh cong!");
    }
    // else{
    //     echo ("Ket noi thanh cong nhe!");
    // }
?>