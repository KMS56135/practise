import cardContent from '../../assets/constants/card-content.js';
import Component from "../../utils/create-component.js";

export default class CardComponent extends Component {
    constructor() {
        super(); // Вызов конструктора родительского класса
        this.createTemplate(); // Генерация шаблона
    }

    createTemplate() {
        this.template = `
        <ul class='services__list grid grid--2'> 
            ${cardContent.map(({ id, img, title, description }) => {
                return `
                <li class='services__item'>
                    <article class='services-card'>
                        <div class='services-card__wrapper-image'>
                            <img class='services-card__image' src='/images/card-image/${img}' alt='${title}' loading='lazy'/>
                        </div>
                        <div class='services-card__body'>
                            <h3 class='services-card__title'>${title}</h3>
                            <p class='services-card__description'>${description}</p>
                        </div>
                    </article
                </li>`;
            }).join('')}
        </ul>`;
    }
}
