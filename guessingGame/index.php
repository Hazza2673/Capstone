<!DOCTYPE html>
<html>
    <head>
        <title>Guessing Game for Harrison Sheard 3fa7e755</title>
        <?php require_once "bootstrap.php"; ?>

    </head>
    <body>
        <h1>Welcome to my guessing game</h1>
        <form>
            <input type="number" id="guess" name="guess">
            <button type="submit" id="guess">Guess</button>
            
        </form>
        <?php 
            $number = "30";
            $result = "";
            $guess = (isset($_GET['guess'])) ? $_GET['guess'] : '';


            if($guess > $number){
                $result = "Your guess is too high";
            }
            if($guess < $number){
                $result = "Your guess is too low";
            }
            if($guess == $number){
                $result = "Congratulations - You are right";
            }
            if (!is_numeric($guess)){
                $result = "Your guess is not a number";
            }
            if ($guess == ""){
                $result = "Your guess is too short";
            }




            if (!isset($_GET['guess'])){
                $result = "Missing guess parameter, please guess a number";
            }
        
            echo $result;
        
            
        ?>
        <br><a href="../">Exit to Main Page</a>

    </body>
</html>