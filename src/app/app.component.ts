import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { TrainingScheduleComponent } from './PersonnelTrainingSchedule/training-schedule/training-schedule.component';
import { HeaderComponent } from './PersonnelTrainingSchedule/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrainingScheduleComponent, HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caseStudy';
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) ).subscribe((event: NavigationEnd) => {
      // Hide header on login page
      this.showHeader = !event.urlAfterRedirects.includes('/login');
    });
  }
}
