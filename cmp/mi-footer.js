class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Cristian Alexis Alcantar García.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
