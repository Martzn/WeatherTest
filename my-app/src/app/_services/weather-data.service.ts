import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { City } from '../_interfaces/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  Cities: City[];

  constructor(private _http: HttpClient) {
    this.Cities = [
      {
        name: 'Dresden'
      },
      {
        name: 'Berlin'
      },
      {
        name: 'Amsterdam'
      }
    ];
  }

  getCities(): City[] {
    this.sortCities();
    return this.Cities;
  }

  addCity(city: string): void  {
    if (city && city.length) {
      let newCity: City;
      newCity = {
        name: city
      };

      /* Prüfe, ob bereits im Array Cities vorhanden */
      const result = this.Cities.filter(obj => {
        return obj.name.toLowerCase() === city.toLowerCase();
      });

      /* Wenn nicht im Array Cities vorhanden, füge hinzu */
      if (!result.length && city) {
        this.Cities.push(newCity);
        this.sortCities();
      }
    }
  }

  deleteCity(city: string): void {
    const filtered = this.Cities.filter(function(value, index, arr) {
      return value.name !== city;
    });
    this.Cities = filtered;
  }

  sortCities() {
    this.Cities.sort(function(a, b) {
      const name1 = a.name.toUpperCase();
      const name2 = b.name.toUpperCase();
      return (name1 < name2) ? -1 : (name1 > name2) ? 1 : 0;
    });
  }

  getWeather(city: string): any {
    // tslint:disable-next-line:max-line-length
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&lang=de&APPID=b1f6820f6ec8283e72aa6a93039ba3a4`);
  }
}
