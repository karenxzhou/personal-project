$(document).ready(function() {
    $(".rug").mouseover(moveAcross);
    $(".rug").mouseleave(goBack);

    $("#pink").click(makePink);

    $("#darkpink").click(makeDarkpink);
    
    $("#puppy").click(puppyShow);
    
    function puppyShow() {
        $(".image-container").toggleClass("showing");
    }

    function moveAcross() {
        // $(".bunnies").show();
        $(".bunnies").addClass("moving");
    }

    function goBack() {
        // $(".bunnies").hide();
        $(".bunnies").removeClass("moving");
    }
    

    function makePink() {
        $(".ghostContainer2").toggleClass("pink");
    }




    function makeDarkpink() {
        $(".ghost").toggleClass("darkpink");
        $(".ghost").removeClass("ghost");
    }

    function makePink() {
        $(".ghost").toggleClass("pink");
        $(".ghost").removeClass("ghost")
    }
})

console.log("test");