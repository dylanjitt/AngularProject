import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifs',
  standalone: true,
  imports: [],
  templateUrl: './notifs.component.html',
  styleUrl: './notifs.component.scss'
})
export class NotifsComponent {

  @Input() messages!: string[]
}
