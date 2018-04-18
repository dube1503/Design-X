// Image loading animation //
// $(window).scroll(function() {
    

//     $(".mix").each(function() {
//         var top_of_element = $(".grid").offset().top;
//         var bottom_of_element = $(".grid").offset().top + $(this).outerHeight();
//         var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
//         var top_of_screen = $(window).scrollTop();
//         var offset = $(this).offset();
//         var curr = $(this);

//         if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
//             // The element is visible, do something
//             if (!curr.hasClass("animate")) {
//                 setTimeout(function(){
//                     curr.addClass("animate");
//                 },offset.left);
//             };
//         };
//     });
// });

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

