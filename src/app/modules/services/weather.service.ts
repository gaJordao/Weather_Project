import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/models/interfaces/Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'cc969f21bfc3b5d8946dd81909e6a399';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,{

    });
  }
}
