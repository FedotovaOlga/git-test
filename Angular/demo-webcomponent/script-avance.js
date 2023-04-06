console.log('connecté depuis script avance');

// créer un template
const template = document.createElement('template');

template.innerHTML =
`
    <div>
        <h3>Texte depuis H3</h3>
        <img />
    </div>
    <div>
        <slot></slot>
    </div>
`;

class AppCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open'});

        // attacher le template
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // cibler le template et placer des valeurs (qui viennent de HTML)
        this.shadowRoot.querySelector('img').src = this.getAttribute('img')
    }
}

// attribuer un nom de balise à ce webcomponent
window.customElements.define('app-card', AppCard);