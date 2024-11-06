import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowCitiesComponent } from './show-cities/show-cities.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ShowCitiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course-2024';
}
