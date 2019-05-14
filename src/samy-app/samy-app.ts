import {  PolymerElement } from "@polymer/polymer/polymer-element.js";
import "../../samy-components/samy-weather/samy-weather";

/**
 * @customElement
 * @polymer
 */
export class SamyApp extends PolymerElement {
    
    static get is() { return 'samy-app'; }

    static get properties() {
        return {
            prop1: {
                type: String,
                value: "samy-app"
            }
        };
    }
}

window.customElements.define(SamyApp.is, SamyApp);