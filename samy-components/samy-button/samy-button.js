import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `samy-button`
 * A samy button !
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SamyButton extends PolymerElement {
    static get template() {
        return html `

      <style>
        :host {
          display: block;
        }

        :host([danger]) button
        {
          background-color : red;
        }



      </style>
      <button><slot></slot></button>
      
    `;
    }
    static get properties() {
        return {
            danger: {
                type: Boolean,
                value: true,
                reflectToAttribute: true

            },


        };
    }




}

window.customElements.define('samy-button', SamyButton);