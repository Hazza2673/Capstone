
<!DOCTYPE html>
<html>
<head>
    <title>MD5 Cracking by Harrison Sheard</title>
    <?php require_once "bootstrap.php"; ?>

</head>
<body>
        <h1>My MD5 Cracker</h1>
    <div>
        <p>This application takes an MD5 hash of a four digit pin and check all 10,000 possible four digit PINs to determine the PIN.</p>
    </div>    
    <form>
        <input type="text" name="md5" size="60" />
        <input type="submit" value="Crack MD5"/>
    </form>
    <div>
<?php 
$request = $_GET['md5'];
$cracked = [
                ['hash' => $request,      'pin'   => ''],
];
$show = 15;
$time_pre = microtime(true);

if( $request != ""){
foreach($cracked AS $key => $hash)
{
    for($i=0; $i<=9999; $i++)
    {
        $this_try = str_pad($i, 4, 0, STR_PAD_LEFT);
        $this_hash = md5($this_try);

        if($this_hash == $hash['hash'])
        {
            $cracked[$key]['pin'] = $this_try;
            
            $time_post = microtime(true);
            echo '<br />' . "Elapsed time: ";
            echo $time_post-$time_pre . '<br/>';
            break;
        } 
        else {

            if ( $show > 0 ) {
            echo 'Tried ' . $this_try  . '----' . $this_hash .'<br />';
            $show = $show - 1;
            
        }
    }

}
// Loop through the array and print out the
foreach($cracked AS $crack)
{
    echo '<br />' . 'Hash: ' . $crack['hash'] . ' -- PIN: ' . $crack['pin'] ;
}

}
}
?></div>
<a href="../">Exit to Main Page</a>

</body>
</html>


