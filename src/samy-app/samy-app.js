import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "../../samy-components/samy-weather/samy-weather";

/**
 * @customElement
 * @polymer
 */
class SamyApp extends PolymerElement {
    static get template() {
        return html `
      <style>
        :host {
          display: block;
        }
      </style>

      <div class="container">
        <div class="weather">
          <samy-weather></samy-weather>
        </div>
      </div>
    `;
    }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: "samy-app"
            }
        };
    }
}

window.customElements.define("samy-app", SamyApp);