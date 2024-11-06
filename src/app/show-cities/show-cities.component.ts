import { ChangeDetectorRef, Component, OnInit,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesService } from '../cities.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-show-cities',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './show-cities.component.html',
  styleUrl: './show-cities.component.scss'
})
export class ShowCitiesComponent implements OnInit {
  public cities:any[]=[];
  public filteredCities: any[] = [];
  public newCityName: string = '';
  public filterText: string = '';
  public errorMessage: string = '';

  constructor( private _citiesService: CitiesService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this._citiesService.getCities().subscribe((res) => {
      this.cities = res.sort((a, b) => a.name.localeCompare(b.name));
      this.filteredCities = [...this.cities];
      this.cdr.detectChanges();
    });
  }

  addCity(): void {
    if (!this.newCityName.trim()) return;

    const exists = this.cities.some(city => city.name.toLowerCase() === this.newCityName.toLowerCase());
    if (exists) {
      this.errorMessage = 'City already exists!';
      return;
    }

    // Find the smallest available ID
    const allIds = this.cities.map(city => city.id);
    let newId = 1;
    while (allIds.includes(newId)) {
      newId++;
    }

    const newCity = { id: newId,name: this.newCityName.trim() };
    this.cities.push(newCity);
    this.cities.sort((a, b) => a.name.localeCompare(b.name));
    this.filteredCities = [...this.cities];
    this._citiesService.saveCities(this.cities);
    this.newCityName = '';
    this.errorMessage = '';
  }

  deleteCity(cityName: string): void {
    this.cities = this.cities.filter(city => city.name !== cityName);
    this.filteredCities = this.filteredCities.filter(city => city.name !== cityName);
    this._citiesService.saveCities(this.cities);
  }

  filterCities(): void {
    const filter = this.filterText.toLowerCase();
    this.filteredCities = this.cities.filter(city => city.name.toLowerCase().includes(filter));
  }

}
