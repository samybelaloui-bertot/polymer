import {
  RestHandler,
  Action,
  IVehicleData
} from "volvo-web-components/volvo-vehicle/volvo-vehicle";
import { Weather } from "../samy-datatypes/weather";
import { City } from "../samy-datatypes/city";

export class SamyCitiesdataHandler extends RestHandler {
  constructor() {
    super();

    var key = "ab689e369a47daa13acd7c14fce95c5c";

    this.registerEndpoint(
      Weather,
      Action.Get,
      {
        uri: (city: City) =>
          `https://api.openweathermap.org/data/2.5/weather?id=${
            city.id
          }&appid=${key}`,
        method: "GET"
      },
      (result): Promise<IVehicleData<Weather>> => {
        return Promise.resolve({
          data: {
            city: result.name,
            description: result.weather[0].description,
            temp: Math.floor(result.main.temp - 273.15)
          },
          read: new Date()
        });
      }
    );
    this.registerEndpoint(City, Action.GetCollection, {
      uri: "http://localhost:4000/",
      method: "POST"
    });
  }
}
