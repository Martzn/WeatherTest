import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../_interfaces/city';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  @Input() Cities: City[];
  @Input() actCity: string;
  @Output() citySet = new EventEmitter<string>();
  @Output() cityDelete = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  setCity(city: any): void {
    this.citySet.emit(city);
  }

  deleteCity(city: any): void {
    this.cityDelete.emit(city);
  }
}
