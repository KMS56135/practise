export default class Component {
    template = '';

    constructor(template) {
        this.template = template || this.template;
    }

    render() {
        const div = document.createElement('div');
        div.innerHTML = this.template;
        return div.firstElementChild;
    }
} 