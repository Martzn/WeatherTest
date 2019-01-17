import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherDataService } from '../_services/weather-data.service';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent implements OnInit {
  @Input() actCity: string;
  @Output() citySet = new EventEmitter<string>();
  public inputCity: any;

  constructor(private weatherDataService: WeatherDataService) {
  }

  ngOnInit() {
  }

  setCity(): void {
    this.citySet.emit(this.inputCity);
    this.inputCity = '';
  }
}
