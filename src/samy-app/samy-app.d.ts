import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import "../../samy-components/samy-weather/samy-weather";
import "volvo-web-components/volvo-button/volvo-button";
import "volvo-web-components/volvo-timeline/volvo-timeline";
import "volvo-web-components/volvo-list/volvo-list";
import "volvo-web-components/volvo-list/volvo-list-item";
/**
 * @customElement
 * @polymer
 */
export declare class SamyApp extends PolymerElement {
    static readonly is: string;
    ready(): void;
    static readonly properties: {
        prop1: {
            type: StringConstructor;
            value: string;
        };
    };
}
