import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import "@polymer/paper-item/paper-item.js";
import "@polymer/paper-listbox/paper-listbox.js";
import "../samy-button/samy-button.js";
import "../samy-autocomplete/samy-autocomplete.js";
import { Handler } from "volvo-web-components/volvo-vehicle/volvo-vehicle";
import { Weather } from "../samy-datatypes/weather.js";
/**
 * `samy-weather`
 * This is samy !
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export declare class SamyWeather extends PolymerElement {
    selectedCityCode: Object;
    cities: Array<any>;
    temperature: number;
    weather: Weather | null;
    idCitySelected: Object;
    cityHandler: Handler;
    constructor();
    connectedCallback(): void;
    static readonly is: string;
    static readonly observers: string[];
    static readonly properties: {
        name: {
            type: StringConstructor;
            value: string;
        };
        temperature: {
            type: NumberConstructor;
            value: number;
        };
        selectedCityCode: {
            type: StringConstructor;
            observer: string;
        };
        modern: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        weather: {
            type: ObjectConstructor;
            value: () => {
                city: string;
                description: string;
                temp: string;
            };
        };
        cities: {
            type: ObjectConstructor;
            value(): {
                name: string;
                code: string;
            }[];
        };
        idCitySelected: {
            type: StringConstructor;
            value: string;
        };
        cityHandler: {
            type: ObjectConstructor;
        };
    };
    _increaseTemperature(): void;
    _getTemperatureOfParis(): Promise<void>;
    _getWeatherOfCity(): Promise<void>;
    _selectCity(event: any): void;
    _selectedCityCodeChanged(newValue: any): void;
}
