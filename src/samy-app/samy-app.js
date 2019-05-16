import { html as html } from "@polymer/polymer";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import "../../samy-components/samy-weather/samy-weather";
import "volvo-web-components/volvo-button/volvo-button";
import "volvo-web-components/volvo-timeline/volvo-timeline";
import "volvo-web-components/volvo-list/volvo-list";
import "volvo-web-components/volvo-list/volvo-list-item";
import { SamyCitiesdataHandler } from "../../samy-components/samy-handler/samy-citiesdata-handler";
/**
 * @customElement
 * @polymer
 */
export class SamyApp extends PolymerElement {
    static get is() { return 'samy-app'; }
    ready() {
        super.ready();
        this.$.samyweather.cityHandler = new SamyCitiesdataHandler();
    }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: "samy-app"
            }
        };
    }
    static get template() { return html `<style>\r\n     :host {\r\n        display: block;\r\n    }\r\n    \r\n    .weather {\r\n        margin: 40px;\r\n    }\r\n    \r\n    .title-page {\r\n        height: 120px;\r\n        background-color: black;\r\n        display: flex;\r\n    }\r\n    \r\n    .title-main {\r\n        color: white;\r\n        font-size: 50px;\r\n        align-items: center;\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        text-align: center;\r\n    }\r\n    \r\n    .page {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n    \r\n    .mosaic {\r\n        height: 500px;\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n        align-items: center;\r\n        justify-content: space-around;\r\n    }\r\n    \r\n    .mosaic img {\r\n        margin: 5px;\r\n    }\r\n    \r\n    .header {\r\n        order: 1;\r\n        width: 100%;\r\n        height: 60px;\r\n        background-color: #eee;\r\n        display: flex;\r\n        align-items: center;\r\n        align-content: center;\r\n        justify-content: space-around;\r\n        flex-wrap: wrap;\r\n    }\r\n    \r\n    .sidebar-left {\r\n        order: 2;\r\n        width: 15%;\r\n        float: left;\r\n        background-color: lightgray;\r\n    }\r\n    \r\n    .sidebar-right {\r\n        order: 4;\r\n        width: 15%;\r\n        float: right;\r\n        background-color: lightgray;\r\n    }\r\n    \r\n    .footer {\r\n        order: 5;\r\n        width: 100%;\r\n        height: 60px;\r\n        background-color: darkgrey;\r\n        align-items: center;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .body {\r\n        order: 3;\r\n        width: 70%;\r\n        float: right;\r\n        background-color: gray;\r\n    }\r\n    \r\n    @media (max-width: 700px) {\r\n        .body {\r\n            width: 100%;\r\n        }\r\n        .sidebar {\r\n            width: 50%;\r\n            order: 3;\r\n        }\r\n    }\r\n</style>\r\n<div class="title-page">\r\n\r\n    <p class="title-main">WeatherFlix b</p>\r\n\r\n</div>\r\n<div class="page">\r\n    <div class="header">\r\n        <a href="#"> Home </a>\r\n        <a href="#"> Weather </a>\r\n        <a href="#"> Cities </a>\r\n        <a href="#"> Contacts </a>\r\n    </div>\r\n\r\n    <div class="sidebar sidebar-left">\r\n        I'm a sidebar\r\n        <volvo-timeline></volvo-timeline>\r\n    </div>\r\n    <div class="sidebar sidebar-right">\r\n        I'm another sidebar\r\n    </div>\r\n    <div class="body">\r\n        <div class="mosaic">\r\n            <volvo-list>\r\n                <volvo-list-item value-title="item 1">\r\n                    volvo item 1\r\n                </volvo-list-item>\r\n                volvo item 2\r\n                <volvo-list-item value-title="item 1">\r\n\r\n                </volvo-list-item>\r\n                volvo item3\r\n                <volvo-list-item value-title="item 3">\r\n\r\n                </volvo-list-item>\r\n\r\n            </volvo-list>\r\n            <volvo-button></volvo-button>\r\n            <volvo-button></volvo-button>\r\n            <volvo-button></volvo-button>\r\n            <volvo-button></volvo-button>\r\n            <volvo-button></volvo-button>\r\n\r\n            <div class="weather">\r\n                <samy-weather id="samyweather"></samy-weather>\r\n            </div>\r\n\r\n\r\n            <volvo-button></volvo-button>\r\n            <volvo-button></volvo-button>\r\n            <volvo-button></volvo-button>\r\n            <volvo-button></volvo-button>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class="footer">\r\n    I'm a footer\r\n</div>\r\n</div>`; }
}
window.customElements.define(SamyApp.is, SamyApp);
//# sourceMappingURL=samy-app.js.map