import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import "../../samy-components/samy-weather/samy-weather";
/**
 * @customElement
 * @polymer
 */
export declare class SamyApp extends PolymerElement {
    static readonly is: string;
    static readonly properties: {
        prop1: {
            type: StringConstructor;
            value: string;
        };
    };
}
