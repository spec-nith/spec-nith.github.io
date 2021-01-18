$(document).ready(function(){

    let $btns = $('.button-group button');
    $btns.click(function(e){
        $('.button-group button').removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $('.grid').isotope({
            filter: selector
        })

        return false;
    })

    $(".button-group #btn1").trigger("click");

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });

    // owl-carosel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
    });

    let nav_offset_top= $('.header_area').height() +50;
    function navbarFixed(){
        if($(".header_area").length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $(".main-menu").addClass("navbar_fixed");
                }else{
                    $(".main-menu").removeClass("navbar_fixed");
                }
            })
        }
    }

    navbarFixed();
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });

})