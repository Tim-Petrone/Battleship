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
            $("#battleBoard").append("<td id='" + indexR + indexC + "'>");
        };
    };
    //Creating Ships
    for (placement = 0; placement < 5; placement++) {
        var x = Math.floor(Math.random()*10);
        var y = Math.floor(Math.random()*10);
        board[x][y] = ship;

        var join = "#" + x.toString() + y.toString();

        $(join).addClass("joined");

        // board[Math.floor(Math.random()*10)][Math.floor(Math.random()*10)] = ship;
    }

    // Torpedo shot
    counter = 0;
    hitCounter = 0;

    $("td").on("click", function(event) {
        link = event.target.id;
        linkSplit = link.split("")
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
        if (counter >= 2) {
            setTimeout(function(){
                alert("Oh no! You are out of torpedos! The enemy sinks your battleship!");
            },10);

            var shipLocation = [];
            for (indexR=0; indexR<10; indexR++){
                console.log(board[indexR]);
                for (indexC=0; indexC<10; indexC++) {
                    if (board[indexR][indexC] == ship) {
                        shipLocation.push(indexR +  indexC);
                        $("#" + indexR +  indexC).addClass("hit");
                    };
                };
            };
            showShip = shipLocation[0];
            showShipSplit = showShip.split(" ");
            if (board[showShipSplit[0]][showShipSplit[1]] == 0){
                $(this).addClass("torpedo");
            } else {
                $(this).addClass("hit");
            };
            console.log(shipLocation);
            // $("#" + shipLocation[0]).addClass("hit");
            // $("#" + shipLocation[1]).addClass("hit");
            // $("#" + shipLocation[2]).addClass("hit");
            // $("#" + shipLocation[3]).addClass("hit");
            // $("#" + shipLocation[4]).addClass("hit");
            // console.log(shipLocation);
            $("td").off("click");

        };
    });

    //Torpedo counter
    $("td").on("click", function(){
        $("#torpedoCounter").text(counter);
    });

    //Reveal Button
    $("#revealButton").click(function(){
        for (indexR=0; indexR<10; indexR++){
            console.log(board[indexR]);
            for (indexC=0; indexC<10; indexC++) {
                if (board[indexR][indexC] == ship) {
                    shipLocation.push(indexR + " " +  indexC);
                    $("#" + indexR + " " +  indexC).addClass("hit");
                };
            };
        };
        $("#" + shipLocation[0]).addClass("hit");
        $("#" + shipLocation[1]).addClass("hit");
        $("#" + shipLocation[2]).addClass("hit");
        $("#" + shipLocation[3]).addClass("hit");
        $("#" + shipLocation[4]).addClass("hit");
        console.log(shipLocation);
    });


//End of Document Ready
});
