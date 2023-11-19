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
        var $arrow = $("#rb-right");
        if ($arrow.attr("src").includes("right.png")) {
            $arrow.attr("src", "assets/down.png");
        } else {
            $arrow.attr("src", "assets/right.png");
        }
    });

    $(".resume-folder").click(function () {
        // Toggle the visibility of resume-level-2
        $(".resume-level-2").toggle();

        // Change the arrow image for resume-folder
        var $arrow = $("#resume-right");
        if ($arrow.attr("src").includes("right.png")) {
            $arrow.attr("src", "assets/down.png");
        } else {
            $arrow.attr("src", "assets/right.png");
        }
    });

    $(".research-folder").click(function () {
        // Toggle the visibility of resume-level-2
        $(".research-level-2").toggle();

        // Change the arrow image for resume-folder
        var $arrow = $("#research-right");
        if ($arrow.attr("src").includes("right.png")) {
            $arrow.attr("src", "assets/down.png");
        } else {
            $arrow.attr("src", "assets/right.png");
        }
    });


});


$(document).ready(function () {
    var isDrawerOpen = true; // Flag to track the state of the drawer

    $(".prj-col").click(function () {
        var prjColWidth = $(".prj-col").outerWidth(); // width in pixels
        var drawerWidth = $(".drawer").outerWidth(); // drawer width in pixels

        if (isDrawerOpen) { // Check if drawer is shown
            $(".drawer").animate({
                left: `-${drawerWidth}px` // Hide the drawer
            });
            $(".aboutme").animate({
                left: '1rem' // Adjust the position of .aboutme
            });
            isDrawerOpen = false; // Update the flag
        } else {
            $(".drawer").animate({
                left: `${prjColWidth}px` // Show the drawer beside .prj-col
            });
            $(".aboutme").animate({
                left: '17rem' // Adjust the position of .aboutme
            });
            isDrawerOpen = true; // Update the flag
        }
    });
});




$(document).ready(function () {
    $("#run").click(function () {
        var isMobile = window.matchMedia("screen and (max-width: 700px)").matches;

        if (isMobile) {
            // Mobile-specific effect
            // For example, toggle visibility or change position
            if ($(".terminal-popup").is(":visible")) {
                $(".terminal-popup").hide(); // or any other effect you want
            } else {
                $(".terminal-popup").show(); // or any other effect you want
            }
        } else {
            // Desktop effect
            if ($(".terminal-popup").css('bottom') === '0px') {
                $(".terminal-popup").css('bottom', '-100%');
            } else {
                $(".terminal-popup").css('bottom', '0');
            }
        }
    });

    // Optional: Hide the terminal when user scrolls
    $(window).scroll(function () {
        if (!window.matchMedia("screen and (max-width: 700px)").matches) {
            $(".terminal-popup").css('bottom', '-100%');
        }
        // You can add an else block here if you want to handle the scroll event differently on mobile
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


