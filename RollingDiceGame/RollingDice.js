// /**
//  * Created by vibhutitripathi on 3/9/18.

//
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


var player1 = {
    localscore1 : 0,
    globalscore1 : 0,
    activeplayer: true
}

var player2 = {
    localscore2: 0,
    globalscore2: 0,
    activeplayer:false,
}




function rolldice(){

        if (player1.activeplayer == true) {
            player1.activeplayer = true;
            var randomnumber = getRandomInt(7);
            if (randomnumber == 1) {
                player1.localscore1 = 0;
                document.querySelector('#current-0').textContent = player1.localscore1;
                player1.activeplayer = false;
                player2.activeplayer = true;
            }
            else {
                player1.localscore1 = player1.localscore1 + randomnumber;
                document.querySelector('#current-0').textContent = player1.localscore1;
            }
        }

        if (player2.activeplayer == true){
            var randomnumber = getRandomInt(7);
            if (randomnumber == 1){
                player2.localscore2 = 0;
                document.querySelector('#current-1').textContent = player2.localscore2;

                player2.activeplayer = false;
                player1.activeplayer = true;
            }
            else{
                player2.localscore2 = player2.localscore2 + randomnumber;
                document.querySelector('#current-1').textContent = player2.localscore2;
            }

        }
}

function hold(){

    if (player1.activeplayer == true){
        var totalscore1  = player1.globalscore1
        totalscore1 = totalscore1 + player1.localscore1

        if (totalscore1 >= 100) {
            console.log("the score is more than 100")
            alert("Player 1 won!!!!")
            document.querySelector('#score-0').textContent = 0;
            document.querySelector('#score-1').textContent = 0;

        }
        document.querySelector('#score-0').textContent = totalscore1;
        player1.globalscore1 = totalscore1
        player1.localscore1 = 0


        player1.activeplayer = false;
        player2.activeplayer = true;
    }

    else{
        totalscore2 = player2.globalscore2;
        totalscore2 = totalscore2 + player2.localscore2 ;

        if (totalscore2 >= 100) {
            console.log("the score is more than 100")
            alert("Player 2 won!!!!")
            document.querySelector('#score-0').textContent = 0;
            document.querySelector('#score-1').textContent = 0;


        }
        document.querySelector('#score-1').textContent = totalscore2;
        player2.globalscore2 = totalscore2;
        player2.localscore2 = 0

        player2.activeplayer = false;
        player1.activeplayer = true;

    }

}

function newgame(){

    var player1name = prompt("Enter Player1 name");
    var player2name = prompt("Enter second Player's name");

    document.querySelector("#name-0").textContent = player1name;
    document.querySelector("#name-1").textContent = player2name;

    player1.localscore1 = 0;
    player2.localscore2 = 0;
    player1.globalscore1 = 0;
    player2.globalscore2 = 0;


    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    player1.activeplayer = true;
    player2.activeplayer = false;

}

document.querySelector('.btn-roll').addEventListener('click',rolldice);
document.querySelector('.btn-hold').addEventListener('click',hold);
document.querySelector('.btn-new').addEventListener('click',newgame);

