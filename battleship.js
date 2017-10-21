//Global Variables for Ship Creation
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

//Start of Document Ready
$(document).ready(function(){
    var randomLocations = [];
    var allSquares = []
    for (var i = 0; i < 100; i++) { allSquares[i] = i;}
    allSquares.forEach(function(element) {
        if (element < 10) {
            allSquares[element] = "0" + element;
        } else {
            allSquares[element] = "" + element;
        }
    });

    console.log(allSquares);
    console.log(randomLocations);
    console.log(pickRandomSquare(allSquares));
    console.log(pickRandomSquare(allSquares));
    console.log(pickRandomSquare(allSquares));
    console.log(pickRandomSquare(allSquares));



    console.log(board);

    function pickRandomSquare(set){
        var location = set.splice(random(set.length+1),1);
        console.log(set.length);
        randomLocations.push(location[0]);
        return location
    }


    function random (max) {
        return Math.floor(Math.random() * max);
    }

    randomLocations.forEach(function(element){
        var shipSplit = element.split("");
        board[shipSplit[0]][shipSplit[1]] = ship;
    });



    // Table
    for (indexR=0; indexR<10; indexR++){
        $("#battleBoard").append("<tr id='" + indexR + "'>");
        for (indexC=0; indexC<10; indexC++) {
            $("#battleBoard").append("<td id='" + indexR + indexC + "'>");
        };
    };

    //Creating Ships

    //WORKING 5 BLOCK SHIP
    // for (placement = 0; placement < 1; placement++) {
    //     var x = Math.floor((Math.random()*4)+3);
    //     var y = Math.floor((Math.random()*4)+3);
    //     if (Math.floor(Math.random()*100)%2 == 0){
    //         //VERTICAL
    //         board[x-2][y] = ship;
    //         board[x-1][y] = ship;
    //         board[x][y] = ship;
    //         board[x+1][y] = ship;
    //         board[x+2][y] = ship;
    //     } else {
    //         //HORIZONTAL
    //         board[x][y-2] = ship;
    //         board[x][y-1] = ship;
    //         board[x][y] = ship;
    //         board[x][y+1] = ship;
    //         board[x][y+2] = ship;
    //     };
    // };

    for (placement = 0; placement < 99; placement++) {
        // var x = Math.floor(Math.random()*10);
        // var y = Math.floor(Math.random()*10);
        pickRandomSquare(allSquares);


        // var join = "#" + x.toString() + y.toString();

        // $(join).addClass("joined");

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
        if (counter >= 25) {
            setTimeout(function(){
                alert("Oh no! You are out of torpedos! The enemy sinks your battleship!");
            },10);

            $("td").off("click");

            var shipLocation = [];
            for (indexR=0; indexR<10; indexR++){
                console.log(board[indexR]);
                for (indexC=0; indexC<10; indexC++) {
                    if (board[indexR][indexC] == ship) {
                        shipLocation.push(indexR + indexC);
                        $("#" + indexR + indexC).addClass("hit");
                    };
                };
            };

        };
    });

    //Torpedo counter
    $("td").on("click", function(){
        $("#torpedoCounter").text(counter);
    });

//End of Document Ready
});
