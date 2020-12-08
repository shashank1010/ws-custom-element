class WsBookCart extends HTMLElement {
    connectedCallback() {
      this.outerHTML = '<div class="ws-element" data-ws-type="wsbookcart"></div>';
    }
}
customElements.define('ws-book-cart', WsBookCart);