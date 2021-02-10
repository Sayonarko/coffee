import $ from "jquery";
$(window).on("load", function () {
    //modal window
    function openCloseModal() {
        $(".js-modal-container").toggleClass("hidden");
        $("body").toggleClass("disable");
    }
    $(".js-message").on("click", openCloseModal);

    $(".js-modal-container").on("click", function (e) {
        (e.target == $(this)[0]) ? openCloseModal() : null;
    });

    $(".js-form-btn").on("click", function (e) {
        e.preventDefault();
        $(".js-form").addClass("hidden");
        $(".js-done").removeClass("hidden");
        setTimeout(openCloseModal, 2000);
    });

    $(".js-modal-close").on("click", openCloseModal);
});

    //swiper
    import Swiper, {Pagination, Navigation, Autoplay} from "swiper";
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