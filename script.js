$(document).ready(function() {
    $(".rug").mouseover(moveAcross);
    $(".rug").mouseleave(goBack);

    function moveAcross() {
        // $(".bunnies").show();
        $(".bunnies").addClass("moving");
    }

    function goBack() {
        // $(".bunnies").hide();
        $(".bunnies").removeClass("moving");
    }
    
})

console.log("test");