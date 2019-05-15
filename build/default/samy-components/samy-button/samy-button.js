import { html } from "../../node_modules/@polymer/polymer/polymer-element.js";
import { PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * `samy-button`
 * A samy button !
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

export class SamyButton extends PolymerElement {
  static get is() {
    return 'samy-button';
  }

  static get properties() {
    return {
      danger: {
        type: Boolean,
        value: true,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return html`<style>\r\n     :host {\r\n        display: block;\r\n    }\r\n    \r\n     :host([danger]) button {\r\n        background-color: red;\r\n    }\r\n</style>\r\n<button><slot></slot></button>`;
  }

}
window.customElements.define(SamyButton.is, SamyButton); //# sourceMappingURL=samy-button.js.map