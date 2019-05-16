import { html as html } from "@polymer/polymer";
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
export class SamyAutocomplete extends PolymerElement {
    static get is() {
        return "samy-autocomplete";
    }
    static get properties() {
        return {
            query: {
                type: String,
                value: "",
                notify: true
            },
            autocompleteCities: {
                type: Array,
                value: []
            }
            /*
            graphqlQuery: {
              type: String,
              value: "",
              observer: "_graphqlQueryChanged"
            }
            */
        };
    }
    _inputChanged(e) {
        console.log("_inputChanged", e);
        console.log("this.query = " + this.query);
        console.log('this.query + e.data = ' + (this.query + e.data));
        this._getResultsOfQuery(this.query + e.data);
    }
    /*
    _graphqlQueryChanged(newValue: string) {
      console.log("grqphql query changed", newValue);
      this._getResultsOfQuery(this.query);
    }
    */
    async _getResultsOfQuery(input) {
        if (this.graphqlQuery.indexOf(SamyAutocomplete.INPUT_MATCH) < 0) {
            console.error("You forgot the GraphQL query!!!!");
            return;
        }
        if (input.length <= 3) {
            return null;
        }
        await fetch(`http://localhost:4000`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                query: "{" + this._generateGraphqlQuery(input) + "}"
            })
        })
            .then(r => r.json())
            .then(json => {
            console.log(json);
            this.autocompleteCities = [];
            this.autocompleteCities = json.data.city;
            console.log('this.autocompleteCities = ');
            console.log(this.autocompleteCities);
        });
    }
    _generateGraphqlQuery(input) {
        if (this.graphqlQuery !== "") {
            const endFirstPart = this.graphqlQuery.indexOf(SamyAutocomplete.INPUT_MATCH);
            const startSecondPart = endFirstPart + SamyAutocomplete.INPUT_MATCH.length;
            const result = [
                this.graphqlQuery.substr(0, endFirstPart),
                input,
                this.graphqlQuery.substr(startSecondPart)
            ].join("");
            console.log("result = ");
            console.log(result);
            return result;
        }
    }
    static get template() { return html `<style>\r\n     :host {\r\n        width: 100%;\r\n    }\r\n    \r\n    .list-item {\r\n        background-color: rgb(235, 235, 235);\r\n        opacity: 0.8;\r\n        border: solid black 1px;\r\n    }\r\n</style>\r\n\r\n<iron-input bind-value="{{query}}">\r\n    <input on-input="_inputChanged">\r\n</iron-input>\r\n\r\n<iron-list items="[[autocompleteCities]]">\r\n    <template>\r\n        <div class="list-item">\r\n            [[item.name]], [[item.country]]\r\n        </div>\r\n    </template>\r\n</iron-list>`; }
}
SamyAutocomplete.INPUT_MATCH = "$$qs$$";
window.customElements.define(SamyAutocomplete.is, SamyAutocomplete);
//# sourceMappingURL=samy-autocomplete.js.map