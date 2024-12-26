import CardComponent from './components/Card/Card.js';
import HeaderComponent from './components/Header/Header.js';
import Swiper from './components/swiper/swiper-bundle.mjs';
export default class Main {
    static init() {
        console.log('start');
        const header = new HeaderComponent();
        const headerHolder = document.querySelector('[data-header-holder]');
        headerHolder.replaceWith(header.render());

        const card = new CardComponent();
        const servicesHolderList = document.querySelector('[data-js-services-holder-list]');
        servicesHolderList.replaceWith(card.render());

        // const swiper = new Swiper('.swiper', {
        //     // Navigation arrows
        //     navigation: {
        //       nextEl: '.swiper-button-next',
        //       prevEl: '.swiper-button-prev',
        //     },
        // });
    }
}
