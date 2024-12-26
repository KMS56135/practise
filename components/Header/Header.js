import Component from '../../utils/create-component.js';

export default class HeaderComponent extends Component {
    constructor() {
        super();
        this.template = this.createTemplate();
    }

    createTemplate() {
        return `
            <header class='header'>
                <div class='header__inner container'>
                    <a class='header__logo logo' href='/'>
                        <img class='logo__image' src='./assets/images/icons/logo.svg' alt='Fylo' width='176' height='52' loading='lazy' />
                    </a>
                    <nav class='header__menu hidden-mobile'>
                        <ul class='header__menu-list'>
                            <li class='header__menu-item'>
                                <a class='header__menu-link' href='/'>Возможности</a>
                            </li>
                            <li class='header__menu-item'>
                                <a class='header__menu-link' href='/'>Команда</a>
                            </li>
                            <li class='header__menu-item'>
                                <a class='header__menu-link' href='/'>Отзывы</a>
                            </li>
                        </ul>
                    </nav>
                    <button class='header__burger-button burger-button visible-mobile' type='button' onclick='mobileOverlay.showModal()'>
                        <span class='visually-hidden>Open navigation menu</span>
                    </button>
                </div>
            </header>`;
    }
}
