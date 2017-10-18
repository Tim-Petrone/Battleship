$(document).ready(function(){
    // Table
    for (indexR=0; indexR<10; indexR++){
        $("#battleBoard").append("<tr>");
    };
    for (indexC=0; indexC<10; indexC++) {
        $("tr").append("<td id='Col_" + indexC + "'>");
    };

    // Torpedo shot
    counter = 0;

    $("td").on("click", function() {
        $(this).addClass("torpedo");
        $(this).off("click");
        counter++;
        if (counter > 25) {
            alert("Oh no! You are out of torpedos! The enemy sinks your battleship!")
        };
    });

    //Torpedo counter
    $("td").on("click", function(){
        $("#torpedoCounter").text(counter);
    });

});
