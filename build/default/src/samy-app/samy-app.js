import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../samy-components/samy-weather/samy-weather";
/**
 * @customElement
 * @polymer
 */

class SamyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        .title-page {
          height : 120px;
          background-color : black;
          display : flex;
        
        }

        .title-main {
          color : white;
          font-size : 50px;
          align-items : center;
          display : flex;
          flex-flow: column wrap;
          text-align : center;
        }

        .page {
          display: flex;
          flex-wrap: wrap;
        }
        .mosaic {
          height: 500px;
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          justify-content: space-around;
        }

        .mosaic img {
          margin: 5px;
          
        }

        .header {
          order: 1;
          width: 100%;
          height: 60px;
          background-color: #eee;
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .sidebar-left {
          order: 2;
          width: 15%;
          float: left;
          background-color: lightgray;
        }

        .sidebar-right {
          order: 4;
          width: 15%;
          float: right;
          background-color: lightgray;
        }

        .footer {
          order: 5;
          width: 100%;
          height: 60px;
          background-color: darkgrey;
          align-items: center;
          display: flex;
          justify-content: center;
        }

        .body {
          order: 3;
          width: 70%;
          float: right;
          background-color: gray;
        }

        @media (max-width: 700px) {
          .body {
            width: 100%;
          }
          .sidebar {
            width: 50%;
            order: 3;
          }
        }
      </style>
<div class = "title-page">

<p class = "title-main">WeatherFlix</p>

</div>
      <div class="page">
        <div class="header">
          <a href="#"> Home </a>
          <a href="#"> Weather </a>
          <a href="#"> Cities </a>
          <a href="#"> Contacts </a>
        </div>

        <div class="sidebar sidebar-left">
          Je suis une sidebar
        </div>
        <div class="sidebar sidebar-right">
          Je suis une autre sidebar
        </div>
        <div class="body">
          <div class="mosaic">
            <img
              class="image"
              src="https://via.placeholder.com/150x150"
              alt=""
            />

            

            <img
              class="image"
              src="https://via.placeholder.com/150x150"
              alt=""
            />
            <img
              class="image"
              src="https://via.placeholder.com/150x150"
              alt=""
            />
            <div class="weather">
              <samy-weather></samy-weather>
            </div>
            <img
              class="image"
              src="https://via.placeholder.com/150x150"
              alt=""
            />
            <img
              class="image"
              src="https://via.placeholder.com/150x150"
              alt=""
            />
          
          <img
              class="image"
              src="https://via.placeholder.com/150x150"
              alt=""
            />

            <img
              class="image"
              src="https://via.placeholder.com/150x150"
              alt=""
            />
            <img
              class="image"
              src="https://via.placeholder.com/150x150"
              alt=""
            />
            <img
              class="image"
              src="https://via.placeholder.com/150x150"
              alt=""
            />
            </div>
          </div>
          
        </div>

        <div class="footer">
          Je suis un footer
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: "samy-app"
      }
    };
  }

}

window.customElements.define("samy-app", SamyApp);