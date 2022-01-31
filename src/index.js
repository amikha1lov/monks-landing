import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    new SlimSelect({
        select: '#brand__select',
        showSearch: false,
        onChange: (info) => {
            console.log(info)
        },
        placeholder:'Марка'
    })
    new SlimSelect({
        select: '#model__select',
        showSearch: false,
        placeholder:'Модель'
    })
    new SlimSelect({
        select: '#body_year__select',
        showSearch: false,
        placeholder:'Год кузова'
    })
    new SlimSelect({
        select: '#glass_type__select',
        showSearch: false,
        placeholder:'Тип стекла'
    })
    new SlimSelect({
        select: '#service__select',
        showSearch: false,
        placeholder:'Услуга'
    })

    var gallery = new Swiper(".gallery", {
        slidesPerView: 2,
        spaceBetween: 30,
        scrollbar: {
            el: ".swiper-scrollbar",

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var reviews = new Swiper(".reviews", {
        scrollbar: {
            el: ".swiper-scrollbar-reviews",

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



});
