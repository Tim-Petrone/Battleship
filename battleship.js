//Global Variables for Ship Creation
// var rowIndex=event.target.id;
// var colIndex=event.target.id;
var link;
var board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var ship = 1;

$(document).ready(function(){
    // Table
    for (indexR=0; indexR<10; indexR++){
        $("#battleBoard").append("<tr id='" + indexR + "'>");
        for (indexC=0; indexC<10; indexC++) {
            $("#battleBoard").append("<td id='" + indexR + " " +   indexC + "'>");
        };
    };

    // Torpedo shot
    counter = 0;
    hitCounter = 0;

    $("td").on("click", function(event) {
        link = event.target.id;
        linkSplit = link.split(" ")
        // console.log(linkSplit);
        if (board[linkSplit[0]][linkSplit[1]] == 0){
            $(this).addClass("torpedo");
        } else {
            $(this).addClass("hit");
            hitCounter++;
            $("#hitCounter").text(hitCounter);
            if (hitCounter == 5){
                setTimeout(function() {
                    alert("You have sunk all the battleships. You win!");
                },10);
                $("td").off("click");
            };
        };
        $(this).off("click");
        counter++;
        if (counter >= 25) {
            setTimeout(function(){
                alert("Oh no! You are out of torpedos! The enemy sinks your battleship!");
            },10);
            $("td").off("click");
            // if (board[linkSplit[0]][linkSplit[1]] == 0){
            //     $("td").addClass("torpedo");
            // } else {
            //     $("td").addClass("hit");
            // }
        };
    });

    //Torpedo counter
    $("td").on("click", function(){
        $("#torpedoCounter").text(counter);
    });

    //Creating Ships
    for (placement = 0; placement < 5; placement++) {
        board[Math.floor(Math.random()*10)][Math.floor(Math.random()*10)] = ship;
    }


//End of Document Ready
});
