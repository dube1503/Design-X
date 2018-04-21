// Content filter //

$(document).on("click", "a#filter-btn", function() {
    if(!$(this).hasClass("selected")) {
        // Remove previous selected and change to current //
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        // Dump text from selected title and replace with current //
        $(".active-sort").empty();
        // Convert data-filter to string
        var str = $(this).attr("data-filter");
        // Strip string of extra characters
        str = str.replace(/[.-]/g, ' ');
        // Check what string is selected
        switch (str) {
            // If 'all' selected, insert empty space to sort
            case 'all':
                $(".active-sort").append('&emsp; &emsp; &emsp;');
                break;
            // If 'thrD' selected, insert '3d' to sort
            case ' thrD design':
                $(".active-sort").append('3d design');
                break;
            // Else, insert converted text
            default:
                $(".active-sort").append(str);
        };
    };
});

// $(document).on("click", ".div-title h2::after", function() {
//     if() {};
// });

$( "a.drop-btn" ).click(function() {
    if (!$(this).hasClass("rotated")){
        $(this).addClass("rotated");
        $(".filter-tab").removeClass("collapsed");
    } else {
        $(this).removeClass("rotated");
        $(".filter-tab").addClass("collapsed");
    }
});

