console.log('connecté');
// créer un composant
// PascalCase vs camelCase (par convention, PC s'utilise pour les class en JS)
class DemoCard extends HTMLElement {
    constructor(){
        // récupère le constructor de HTMLElement
        super();

        this.innerHTML = 'Nouveau composant';
    }
}

customElements.define('app-demo', DemoCard)