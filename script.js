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

        $(".image-container3").removeClass("showing");
        $(".image-container4").removeClass("showing");
        $(".image-container5").removeClass("showing");
        $(".image-container6").removeClass("showing");
        $(".image-container7").removeClass("showing");
        $(".image-container8").removeClass("showing");
        $("image-container9").removeClass("showing");
    }

    function makeDarkpink() {
        $(".image-container3").toggleClass("showing");

        $(".image-container2").removeClass("showing");
        $(".image-container4").removeClass("showing");
        $(".image-container5").removeClass("showing");
        $(".image-container6").removeClass("showing");
        $(".image-container7").removeClass("showing");
        $(".image-container8").removeClass("showing");
        $("image-container9").removeClass("showing");
    }

    function makeRed() {
        $(".image-container4").toggleClass("showing");

        $(".image-container2").removeClass("showing");
        $(".image-container3").removeClass("showing");
        $(".image-container5").removeClass("showing");
        $(".image-container6").removeClass("showing");
        $(".image-container7").removeClass("showing");
        $(".image-container8").removeClass("showing");
        $("image-container9").removeClass("showing");
    }

    function makeOrange() {
        $(".image-container5").toggleClass("showing");

        $(".image-container2").removeClass("showing");
        $(".image-container3").removeClass("showing");
        $(".image-container4").removeClass("showing");
        $(".image-container6").removeClass("showing");
        $(".image-container7").removeClass("showing");
        $(".image-container8").removeClass("showing");
        $("image-container9").removeClass("showing");
    }

    function makeYellow() {
        $(".image-container6").toggleClass("showing");

        $(".image-container2").removeClass("showing");
        $(".image-container3").removeClass("showing");
        $(".image-container4").removeClass("showing");
        $(".image-container5").removeClass("showing");
        $(".image-container7").removeClass("showing");
        $(".image-container8").removeClass("showing");
        $("image-container9").removeClass("showing");
    }

    function makeGreen() {
        $(".image-container7").toggleClass("showing");

        $(".image-container2").removeClass("showing");
        $(".image-container3").removeClass("showing");
        $(".image-container4").removeClass("showing");
        $(".image-container5").removeClass("showing");
        $(".image-container6").removeClass("showing");
        $(".image-container8").removeClass("showing");
        $("image-container9").removeClass("showing");
    }

    function makeBlue() {
        $(".image-container8").toggleClass("showing");

        $(".image-container2").removeClass("showing");
        $(".image-container3").removeClass("showing");
        $(".image-container4").removeClass("showing");
        $(".image-container5").removeClass("showing");
        $(".image-container6").removeClass("showing");
        $(".image-container7").removeClass("showing");
        $("image-container9").removeClass("showing");
    }

    function makePurple() {
        $(".image-container9").toggleClass("showing");

        $(".image-container2").removeClass("showing");
        $(".image-container3").removeClass("showing");
        $(".image-container4").removeClass("showing");
        $(".image-container5").removeClass("showing");
        $(".image-container6").removeClass("showing");
        $(".image-container7").removeClass("showing");
        $(".image-container8").removeClass("showing");
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