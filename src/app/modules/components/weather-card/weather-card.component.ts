import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/models/interfaces/Weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent {  
  //recebendo previsão do tempo do componente pai
  @Input() weatherDataInput!: WeatherData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperaturIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
