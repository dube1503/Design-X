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

// $(document).on("click", "a#filter-btn", function() {
//     if(!$(this).hasClass("selected")) {
//             // Remove previous selected and change to current //
//             $(".selected").removeClass("selected");
//             $(this).addClass("selected");
//             // Dump text from selected title and replace with current //
//             $(".active-sort").empty();
//             $(".active-sort").append($(this).attr("data-filter"))
//             // Sort images according to selection //
//             $(".mix").each(function() {
//                 // If the Design (ALL) option is selected
//                 if ($(".selected").attr("data-filter")==="design") {
//                     // Make sure all images are visible //
//                     if ($(this).hasClass("hidden")) {
//                         $(this).removeClass("hidden");
//                     };
//                 }
//                 // Check which images DO NOT MATCH the selection //
//                 else if (!$(this).hasClass($(".selected").attr("data-filter"))) {
//                     // If tag isnt found in image, hide it //
//                     $(this).addClass("hidden");
//                 };
//                 // Make sure all images that match selection are showing //
//                 if ($(this).hasClass($(".selected").attr("data-filter")) && $(this).hasClass("hidden")) {
//                     $(this).removeClass("hidden");
//                 };
//             });
//         };
// });

