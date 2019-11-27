<?php
include_once 'db_connect.php';
$id = 'xxxx';
if (isset($_GET['id']))
{
    $id =  $_GET['id'];
}
$sql = "SELECT * FROM userpageinfo WHERE page_id = '$id';";
$row = mysqli_fetch_assoc(mysqli_query($conn, $sql));
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?php echo $row['name']?></title>
    <link href="main.css" rel="stylesheet"/>
</head>
<body>
<h1>
    <?php echo $row['name']?>
</h1>
<p>
    <?php echo $row['bio']?>
</p>
</body>
</html>