import { html as html } from "@polymer/polymer";
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import "@polymer/paper-item/paper-item.js";
import "@polymer/paper-listbox/paper-listbox.js";
import "../samy-button/samy-button.js";
/**
 * `samy-weather`
 * This is samy !
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class SamyWeather extends PolymerElement {
    constructor() {
        super();
        this.selectedCityCode = this.cities[0].code;
    }
    static get is() { return 'samy-weather'; }
    static get properties() {
        return {
            name: {
                type: String,
                value: "Samy"
            },
            temperature: {
                type: Number,
                value: 18
            },
            selectedCityCode: {
                type: String,
                observer: "_selectedCityCodeChanged"
            },
            modern: {
                type: Boolean,
                value: true,
                reflectToAttribute: true
            },
            weather: {
                type: Object,
                value: function () {
                    return {
                        city: "---",
                        description: "",
                        temp: "--"
                    };
                }
            },
            cities: {
                type: Object,
                value() {
                    return [
                        { name: "Göteborg", code: "2711537" },
                        { name: "Lyon", code: "6454573" },
                        { name: "Stockholm", code: "2673730" }
                    ];
                }
            },
            idCitySelected: {
                type: String,
                value: ""
            }
        };
    }
    _increaseTemperature() {
        this.temperature++;
        console.log(this.weather);
    }
    async _getWeatherOfCity() {
        // cityId = "6167865";
        var cityId = this.idCitySelected;
        var key = "ab689e369a47daa13acd7c14fce95c5c";
        this.weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`)
            .then(response => response.json())
            .then(json => {
            const desc = json.weather[0].description.charAt(0).toUpperCase() +
                json.weather[0].description.slice(1);
            const weather = {
                city: json.name,
                description: desc,
                temp: Math.floor((json.main.temp -= 273.15))
            };
            return weather;
        });
        console.log(this.weather);
    }
    _selectCity(event) {
        console.log(event);
        // this.idCitySelected = event.model.__data.item['code'];
        this.idCitySelected = event.target.myCityInfo.code;
        console.log(this.idCitySelected);
    }
    _selectedCityCodeChanged(newValue) {
        this.idCitySelected = newValue;
        this._getWeatherOfCity();
    }
    static get template() { return html `<style>\r\n     :host {\r\n        width: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    }\r\n    \r\n    .container {\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 300px;\r\n        height: 350px;\r\n        background: rgb(19, 93, 154);\r\n        background: radial-gradient(circle, rgba(19, 93, 154, 1) 35%, rgba(40, 103, 171, 1) 68%, rgba(57, 72, 122, 1) 100%);\r\n        border-radius: 10px;\r\n        border: 2px solid #39487a;\r\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);\r\n    }\r\n    \r\n    .main-widget {\r\n        padding: 10px;\r\n        flex: auto;\r\n        color: white;\r\n        flex-direction: column;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n    #city {\r\n        font-size: 35px;\r\n    }\r\n    \r\n    #description {\r\n        padding: 10px;\r\n        font-weight: bold;\r\n        font-size: 20px;\r\n    }\r\n    \r\n    #temperature {\r\n        font-size: 100px;\r\n    }\r\n    \r\n    .city-selector {\r\n        padding: 10px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .city-selector paper-dropdown-menu {\r\n        cursor: pointer;\r\n        --paper-input-container-label: {\r\n            color: white;\r\n        }\r\n        --paper-input-container-input: {\r\n            color: white;\r\n        }\r\n    }\r\n</style>\r\n<div class="container">\r\n    <div class="main-widget">\r\n        <div id="city">{{weather.city}}</div>\r\n        <div id="description">{{weather.description}}</div>\r\n        <div id="temperature">{{weather.temp}}&deg;</div>\r\n    </div>\r\n    <div class="city-selector">\r\n        <paper-dropdown-menu label="Choose a city">\r\n            <paper-listbox slot="dropdown-content" attr-for-selected="city-code" selected="{{selectedCityCode}}">\r\n                <dom-repeat items="{{cities}}">\r\n                    <template>\r\n                  <paper-item city-code="[[item.code]]">[[item.name]]</paper-item>\r\n                </template>\r\n                </dom-repeat>\r\n            </paper-listbox>\r\n        </paper-dropdown-menu>\r\n    </div>\r\n\r\n</div>`; }
}
window.customElements.define(SamyWeather.is, SamyWeather);
//# sourceMappingURL=samy-weather.js.map