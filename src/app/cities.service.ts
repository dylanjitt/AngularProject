import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of,tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  
  private localStorageKey = 'citiesList';

  constructor(private _http: HttpClient) { }

  getCities(): Observable<any[]> {
    const storedCities = localStorage.getItem(this.localStorageKey);
    if (storedCities) {
      return of(JSON.parse(storedCities));
    } else {
      return this._http.get<any[]>('assets/cities.json').pipe(
        tap((cities) => {
          localStorage.setItem(this.localStorageKey, JSON.stringify(cities));
        })
      );
    }
  }

  saveCities(cities: any[]): void {
    console.log("new city added: ",cities)
    localStorage.setItem(this.localStorageKey, JSON.stringify(cities));
  }
}
