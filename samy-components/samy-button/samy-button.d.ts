import { PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * `samy-button`
 * A samy button !
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export declare class SamyButton extends PolymerElement {
    static readonly is: string;
    static readonly properties: {
        danger: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
    };
}
