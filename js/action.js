$(window).scroll(function() {
    

    $(".col").each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        var top_of_screen = $(window).scrollTop();
        var offset = $(this).offset();
        var curr = $(this);

        if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            // The element is visible, do something
            if (!curr.hasClass("animate")) {
                setTimeout(function(){
                    curr.addClass("animate");
                },offset.left);
                // $(this).delay(offset.left).queue(function(nxt) {
                //     $(this).addClass("animate");
                //     nxt();
                // });
            }
            
        }
        else {
            // The element is not visible, do something else
        }
    })
});