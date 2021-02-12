import $ from "jquery";
$(window).on("load", function () {
    //modal window
    function openModal() {
        $(".js-modal-container").fadeIn(500).css('display', 'flex');
        $("body").addClass("disable");
    }

    function closeModal() {
        $(".js-modal-container").fadeOut(500);
        $("body").removeClass("disable");
        setTimeout( function () {
            $(".js-form").removeClass("hidden");
            $(".js-done").addClass("hidden");
        }, 1000);
    }
    $(".js-message").on("click", openModal);

    $(".js-modal-container").on("click", function (e) {
        (e.target == $(this)[0]) ? closeModal() : null;
    });

    $(".js-form-btn").on("click", function (e) {
        e.preventDefault();
        $(".js-form").addClass("hidden");
        $(".js-done").removeClass("hidden");
        setTimeout(closeModal, 2000);
    });

    $(".js-modal-close").on("click", closeModal);
});

//swiper
import Swiper, { Pagination, Navigation, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

//lang select
var lang = document.getElementById('lang');
lang.selectedIndex = localStorage.getItem("index") ? localStorage.getItem("index") : 0;
lang.options[lang.selectedIndex].setAttribute('disabled', 'disabled');

lang.onchange = function () {
    localStorage.setItem("index", lang.selectedIndex);
    var language = (lang.selectedIndex === 0) ? "/" : (lang.selectedIndex === 1) ? "ru.html" : "ua.html";
    window.location = language;
}

