import { Component } from '@angular/core';
import { CommonModule, DatePipe, NgClass, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { TrserviceService } from '../../TrServices/trservice.service';
import { TrInterface } from '../../tr-interface';

@Component({
  selector: 'app-training-schedule',
   standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    NgClass,
    DatePipe  ],
  templateUrl: './training-schedule.component.html',
  styleUrls: ['./training-schedule.component.css']
})
export class TrainingScheduleComponent {
  TrData: TrInterface[] = [];

  constructor(private TrService: TrserviceService, private router: Router) {}

  loadData() {
    this.TrService.getTr().subscribe({
      next: (response) => {
        console.log(response);
        this.TrData = response;
      }
    });
  }

  ngOnInit(): void {
    this.loadData();
  }
  addTraining() {
    this.router.navigate(['add-training']);
  }
}
