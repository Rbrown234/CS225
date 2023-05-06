customElements.define('todo-list',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document
        .getElementById('todo-list-template')
        .content;
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(template.cloneNode(true));
  }
});