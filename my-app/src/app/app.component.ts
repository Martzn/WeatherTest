import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './_services/weather-data.service';
import { City } from './_interfaces/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WetterIn';
  Cities: City[];
  public actCity: any;
  weatherData: any;

  constructor(private weatherDataService: WeatherDataService) {
    this.Cities = this.weatherDataService.getCities();
  }

  ngOnInit() {
  }

  setCity(city: any) {
    if (city !== this.actCity && city.length) {
      this.actCity = city;
      this.weatherDataService.getWeather(city).subscribe(weatherData => {
        this.weatherData = weatherData;
        this.weatherDataService.addCity(weatherData.name);
      }, error => {
        this.weatherData = error.error;
      });
    } else {
      console.log('setCity: nicht gesetzt');
    }
  }

  deleteCity(city: any) {
    this.weatherDataService.deleteCity(city);
    this.Cities = this.weatherDataService.getCities();
  }
}
