$(document).ready(function () {
    $(".dhead").click(function () {
        // Toggle the visibility of the dropdown
        $(".dropdown").toggle();
    });
});

$(document).ready(function () {
    $(".rayan-bouhal-folder").click(function () {
        // Toggle the visibility of resume-folder
        $(".resume-folder").toggle();
        $(".research-folder").toggle();

        // Check the state of resume-level-2 and act accordingly
        if (!$(".resume-folder").is(":visible")) {
            // If resume-folder is now hidden, also hide resume-level-2 and remember its state
            $(".resume-level-2").data('wasVisible', $(".resume-level-2").is(":visible")).hide();
        } else {
            // If resume-folder is now visible, restore the visibility of resume-level-2 based on its remembered state
            if ($(".resume-level-2").data('wasVisible')) {
                $(".resume-level-2").show();
            }
        }
        // Check the state of resume-level-2 and act accordingly
        if (!$(".research-folder").is(":visible")) {
            // If resume-folder is now hidden, also hide resume-level-2 and remember its state
            $(".research-level-2").data('wasVisible', $(".research-level-2").is(":visible")).hide();
        } else {
            // If resume-folder is now visible, restore the visibility of resume-level-2 based on its remembered state
            if ($(".research-level-2").data('wasVisible')) {
                $(".research-level-2").show();
            }
        }

        // Change the arrow image for rayan-bouhal-folder
        var $arrow = $("rb-right");
        if ($arrow.attr("src").includes("right.png")) {
            $arrow.attr("src", "assets/down.png").css({ 'width': '1rem', 'height': '0.7rem' });
        } else {
            $arrow.attr("src", "assets/right.png").css({ 'width': '0.7rem', 'height': '1rem' });
        }
    });

    $(".resume-folder").click(function () {
        // Toggle the visibility of resume-level-2
        $(".resume-level-2").toggle();

        // Change the arrow image for resume-folder
        var $arrow = $("#resume-right");
        if ($arrow.attr("src").includes("right.png")) {
            $arrow.attr("src", "assets/down.png").css({ 'width': '1rem', 'height': '0.7rem' });
        } else {
            $arrow.attr("src", "assets/right.png").css({ 'width': '0.7rem', 'height': '1rem' });
        }
    });

    $(".research-folder").click(function () {
        // Toggle the visibility of resume-level-2
        $(".research-level-2").toggle();

        // Change the arrow image for resume-folder
        var $arrow = $("#research-right");
        if ($arrow.attr("src").includes("right.png")) {
            $arrow.attr("src", "assets/down.png").css({ 'width': '1rem', 'height': '0.7rem' });
        } else {
            $arrow.attr("src", "assets/right.png").css({ 'width': '0.7rem', 'height': '1rem' });
        }
    });


});


$(document).ready(function () {
    $(".prj-col").click(function () {
        // Check if drawer is already shown (left position is at roughly 50px)
        if ($(".drawer").css('left') === '50px') {
            // Drawer is shown, so animate to hide it
            $(".drawer").animate({
                left: "-250px" // or the width of your drawer in pixels
            });

            // Smoothly move the .index class to the left when drawer is closed
            $(".aboutme").animate({
                left: '1rem' // Adjust this value as per your design requirement
            });

        } else {
            // Drawer is hidden, so animate to show it
            $(".drawer").animate({
                left: "50px" // or the equivalent of 3.1rem in pixels
            });

            // Smoothly move the .index class to the right when drawer is open
            $(".aboutme").animate({
                left: '17rem' // This is your original value
            });
        }
    });
});


$(document).ready(function () {
    $("#run").click(function () {
        // Check if terminal is already shown
        if ($(".terminal-popup").css('bottom') === '0px') {
            // Terminal is shown, so hide it
            $(".terminal-popup").css('bottom', '-100%');
        } else {
            // Terminal is hidden, so show it
            $(".terminal-popup").css('bottom', '0');
        }
    });
    
    // Optional: Hide the terminal when user scrolls
    $(window).scroll(function () {
        $(".terminal-popup").css('bottom', '-100%');
    });
});

window.onload = function() {
    var aboutMeHeight = document.querySelector('.aboutme').offsetHeight;
    document.querySelector('.drawer').style.height = aboutMeHeight + 'px';
    document.querySelector('.prj-col').style.height = aboutMeHeight + 'px';

    var prjColTop = document.querySelector('.prj-col').offsetTop;
    document.querySelector('.drawer').style.top = prjColTop + 'px';
    document.querySelector('.aboutme').style.top = prjColTop + 'px';
    var prjColHeight = document.querySelector('.prj-col').offsetHeight;
    document.querySelector('.drawer').style.height = prjColHeight + 'px';
};

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('bottom').addEventListener('click', function() {
        window.scrollTo(0, document.body.scrollHeight);
    });
});


