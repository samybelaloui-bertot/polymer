import {  PolymerElement } from "@polymer/polymer/polymer-element.js";
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
  public selectedCityCode: Object;
  public cities: Array<any>;
  public temperature: number;
  public weather: Object;
  public idCitySelected : Object;


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
        value: function() {
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

  
  async _getTemperatureOfParis() {
    const json = await fetch(
      `http://localhost:4000`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: `{ 
            city(name: "Paris") {
              id
              name
              country
            }
          }`})
        })
        .then(r => r.json());
      console.log(json)
  }

  async _getWeatherOfCity() {
    // cityId = "6167865";
    var cityId = this.idCitySelected;
    var key = "ab689e369a47daa13acd7c14fce95c5c";

    this.weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`
    )
      .then(response => response.json())
      .then(json => {
        const desc =
          json.weather[0].description.charAt(0).toUpperCase() +
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

  _selectCity(event : any) {
    console.log(event);

    // this.idCitySelected = event.model.__data.item['code'];
    this.idCitySelected = event.target.myCityInfo.code;
    console.log(this.idCitySelected);
  }

  _selectedCityCodeChanged(newValue : any) {
    this.idCitySelected = newValue;
    this._getWeatherOfCity();
  }
}

window.customElements.define(SamyWeather.is, SamyWeather);
