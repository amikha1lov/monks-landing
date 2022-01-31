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

    let gallery = new Swiper(".gallery", {
        slidesPerView: 1,
        scrollbar: {
            el: ".swiper-scrollbar",

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        }
    });
    let reviews = new Swiper(".reviews", {
        scrollbar: {
            el: ".swiper-scrollbar-reviews",

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const menu_open = document.querySelector('.menu_open');
    const menu_block = document.querySelector('.menu_block');
    if (menu_open){

        menu_open.addEventListener('click', e => {
            menu_block.classList.toggle('mobile:block');
        });
    }


});
