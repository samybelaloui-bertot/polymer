import {  PolymerElement } from "@polymer/polymer/polymer-element.js";
import "../../samy-components/samy-weather/samy-weather";
import "volvo-web-components/volvo-button/volvo-button";
import "volvo-web-components/volvo-timeline/volvo-timeline"
import "volvo-web-components/volvo-list/volvo-list";
import "volvo-web-components/volvo-list/volvo-list-item";
import { SamyWeather } from "../../samy-components/samy-weather/samy-weather";
import { SamyCitiesdataHandler } from "../../samy-components/samy-handler/samy-citiesdata-handler";

/**
 * @customElement
 * @polymer
 */
export class SamyApp extends PolymerElement {
    
    static get is() { return 'samy-app'; }

    public ready() {
        super.ready();
        (this.$.samyweather as SamyWeather).cityHandler = new SamyCitiesdataHandler();
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

window.customElements.define(SamyApp.is, SamyApp);