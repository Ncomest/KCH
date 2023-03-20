<?php
if(isset($_POST['submit'])) {
    $userName = $_POST['userName'];
    $userPhone = $_POST['userPhone'];
    $email = $_POST['email'];
    $agree = $_POST['agree'];
    $to = "eledan_007@mail.ru";
    $subject = "Заявка с сайта";
    $message = "Имя: ".$userName."\nТелефон: ".$userPhone."\nE-mail: ".$email."\nПолитика конфиденциальности: ".$agree;
    $headers = "From: noreply@yourwebsite.com";
    mail($to, $subject, $message, $headers);
    echo "Ваша заявка отправлена!";
}
?>
