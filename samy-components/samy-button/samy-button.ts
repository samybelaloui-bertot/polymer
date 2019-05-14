import { PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `samy-button`
 * A samy button !
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class SamyButton extends PolymerElement {
    
    static get is() { return 'samy-button'; }

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

window.customElements.define(SamyButton.is, SamyButton);