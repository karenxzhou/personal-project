$(document).ready(function() {
    $(".rug").mouseover(moveAcross);
    $(".rug").mouseleave(goBack);
    
    // $("#pinkpup").click(puppyShow);
    $("#pink").click(makePink);
    $("#darkpink").click(makeDarkpink);
    $("#red").click(makeRed);
    $("#orange").click(makeOrange);
    $("#yellow").click(makeYellow);
    $("#green").click(makeGreen);
    $("#blue").click(makeBlue);
    $("#purple").click(makePurple);
    
    $(".ghostButton").hover(changeBackground);
    
    
    // function puppyShow() {
    //     $(".image-container").toggleClass("showing");
    // }

    function makePink() {
        $(".image-container2").toggleClass("showing");
    }

    function makeDarkpink() {
        $(".image-container3").toggleClass("showing");
    }

    function makeRed() {
        $(".image-container4").toggleClass("showing");
    }

    function makeOrange() {
        $(".image-container5").toggleClass("showing");
    }

    function makeYellow() {
        $(".image-container6").toggleClass("showing");
    }

    function makeGreen() {
        $(".image-container7").toggleClass("showing");
    }

    function makeBlue() {
        $(".image-container8").toggleClass("showing");
    }

    function makePurple() {
        $(".image-container9").toggleClass("showing");
    }

    function changeBackground() {
        $(".ghostButton").removeClass("changed");
        $(this).toggleClass("changed");
    }

    function moveAcross() {
        // $(".bunnies").show();
        $(".bunnies").addClass("moving");
    }

    function goBack() {
        // $(".bunnies").hide();
        $(".bunnies").removeClass("moving");
    }
    

    // function makePink() {
    //     $(".ghostContainer2").toggleClass("pink");
    // }




    // function makeDarkpink() {
    //     $(".ghost").toggleClass("darkpink");
    //     $(".ghost").removeClass("ghost");
    // }

    // function makePink() {
    //     $(".ghost").toggleClass("pink");
    //     $(".ghost").removeClass("ghost")
    // }
})

console.log("test");