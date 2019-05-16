/// <reference types="dom-inputevent" />
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import '@polymer/iron-list';
/**
 * `samy-autocomplete`
 * A samy autocomplete !
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export declare class SamyAutocomplete extends PolymerElement {
    static INPUT_MATCH: string;
    query: string;
    graphqlQuery: string;
    autocompleteCities: Array<any>;
    static readonly is: string;
    static readonly properties: {
        query: {
            type: StringConstructor;
            value: string;
            notify: boolean;
        };
        autocompleteCities: {
            type: ArrayConstructor;
            value: never[];
        };
    };
    _inputChanged(e: InputEvent): void;
    _getResultsOfQuery(input: string): Promise<null | undefined>;
    _generateGraphqlQuery(input: string): string | undefined;
}
