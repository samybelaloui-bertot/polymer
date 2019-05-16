import { PolymerElement } from "@polymer/polymer/polymer-element.js";

/**
 * `samy-autocomplete`
 * A samy autocomplete !
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class SamyAutocomplete extends PolymerElement {
  static INPUT_MATCH: string = "$$qs$$";

  query: string;
  graphqlQuery: string;

  static get is() {
    return "samy-autocomplete";
  }

  static get properties() {
    return {
      query: {
        type: String,
        value: "",
        notify : true
      },
      /*
      graphqlQuery: {
        type: String,
        value: "",
        observer: "_graphqlQueryChanged"
      }
      */
    };
  }

  _inputChanged(e: InputEvent) {
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

  async _getResultsOfQuery(input: string) {
    if (this.graphqlQuery.indexOf(SamyAutocomplete.INPUT_MATCH) < 0) {
      console.error("You forgot the GraphQL query!!!!");
      return;
    }

    if (input.length <= 3)
        {
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
      .then(json => console.log(json));
  }

  _generateGraphqlQuery(input: string) {
    if (this.graphqlQuery !== "") {
      const endFirstPart = this.graphqlQuery.indexOf(
        SamyAutocomplete.INPUT_MATCH
      );
      const startSecondPart =
        endFirstPart + SamyAutocomplete.INPUT_MATCH.length;

      const result = [
        this.graphqlQuery.substr(0, endFirstPart),
        input,
        this.graphqlQuery.substr(startSecondPart)
      ].join("");

      console.log(result);
      return result;
    }
  }
}

window.customElements.define(SamyAutocomplete.is, SamyAutocomplete);
