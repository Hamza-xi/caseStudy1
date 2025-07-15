import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrserviceService } from '../../TrServices/trservice.service';
import { Router } from '@angular/router';
import { TrInterface } from '../../tr-interface';

@Component({
  selector: 'app-add-training',
  imports: [FormsModule, NgIf],
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.css'
})
export class AddTrainingComponent {
  topic = '';
  date!: Date;
  unit = '';
  instructor = '';

  constructor(private TrService: TrserviceService, private router: Router) { }

  addTraining(form: any) {
    if (form.invalid) return;

    let newTraining: TrInterface = {
      id: 0,
      topic: this.topic,
      date: new Date(this.date),
      unit: this.unit,
      instructor: this.instructor
    };

    this.TrService.addNew(newTraining).subscribe({
      next: () => this.router.navigate(['/TrSheduleList']),
      error: (err) => console.error('Error adding training:', err)
    });
  }
}
