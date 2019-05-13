import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
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
class SamyWeather extends PolymerElement {
    static get template() {
        return html `
      <style>
        :host {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .container {
          display: flex;
          flex-direction: column;
          width: 300px;
          height: 350px;
          background: rgb(19,93,154);
          background: radial-gradient(circle, rgba(19,93,154,1) 35%, rgba(40,103,171,1) 68%, rgba(57,72,122,1) 100%);
          border-radius: 10px;
          border: 2px solid #39487a;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
        }
        .main-widget {
          padding: 10px;
          flex: auto;
          color: white;
          flex-direction: column;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #city {
          font-size: 35px;
        }
        #description {
          padding: 10px;
          font-weight: bold;
          font-size: 20px;
        }
        #temperature {
          font-size: 100px;
        }
        .city-selector {
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .city-selector paper-dropdown-menu {
          cursor: pointer;
          --paper-input-container-label: {
            color: white;
          }
          --paper-input-container-input: {
            color: white;
          }
        }
      </style>
      <div class="container">
        <div class="main-widget">
          <div id="city">{{weather.city}}</div>
          <div id="description">{{weather.description}}</div>
          <div id="temperature">{{weather.temp}}&deg;</div>
        </div>
        <div class="city-selector">
          <paper-dropdown-menu label="Choose a city">
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="city-code"
              selected="{{selectedCityCode}}">
              <dom-repeat items="{{cities}}">
                <template>
                  <paper-item city-code="[[item.code]]">[[item.name]]</paper-item>
                </template>
              </dom-repeat>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>

      </div>
    `;
    }

    constructor() {
        super();
        this.selectedCityCode = this.cities[0].code;
    }

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
                observer: '_selectedCityCodeChanged'
            },
            modern: {
                type: Boolean,
                value: true,
                reflectToAttribute: true
            },
            weather: {
                type: Object,
                value: function() {
                    return {
                        city: '---',
                        description: '',
                        temp: '--'
                    }
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
                const desc = json.weather[0].description.charAt(0).toUpperCase() + json.weather[0].description.slice(1);
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

    _selectedCityCodeChanged(newValue, oldValue) {
        this.idCitySelected = newValue;
        this._getWeatherOfCity();
    }
}

window.customElements.define("samy-weather", SamyWeather);