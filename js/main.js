$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

new Swiper('.slider-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        220: {
            spaceBetween: 50,
            slidesPerView: 1,

        },
        880: {
            slidesPerView: 3,

        }
    },
});
new Swiper('.swiper_big-container', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        type: 'progressbar'
    },
    slideToClickedSlide: true,
    slidesPerView: 1,
    loop: true,
    speed: 700,
    autoplay: {
        delay: 3000
    },
    thumbs: {
        swiper: {
            el: ".swiper-container",
            slidesPerView: 3
        }

    },


});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header-menu').toggleClass("active")
    })
})