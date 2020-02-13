<?php
$user = $_POST['user'];
//if (isset($user)) {
    $server = "localhost";
    $username = "shreya";
    $password = "shreya123";
    $db = "test";

    $link = new mysqli($server,$username,$password,$db);
    if($link->connect_errno) {
        die("Connection unsuccessful");
    }
    else {
        $user = $_POST['user'];
        $password = $_POST['password'];
        $query = $link->query("SELECT * FROM users WHERE username = '".$user."';");
        $result = mysqli_fetch_assoc($query);
        echo $result['username'];
        var_dump($result);
    }
    echo $_POST['user'];
    echo "
<!DOCTYPE html>
<html>
<head>
<title> Test </title>
</head>
<body>
    <form method='POST' action='test.php'>
    <input type='text' name='user'>
    <button type='submit'>submit</button>
    </form>
</body>
</html>
";
// }

