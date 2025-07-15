
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../Servics/authservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username = '';
  password = '';
  role = 'admin';
  errorMessage = '';

  constructor(private auth: AuthserviceService, private router: Router) {}

  onSubmit(form: any) {
    this.errorMessage = '';
    if (form.invalid) {
      return;
    }
    // For demo, accept any username/password, but require at least 4 chars for password
    if (!this.username || !this.password || !this.role) {
      this.errorMessage = 'All fields are required.';
      return;
    }
    if (this.password.length < 4) {
      this.errorMessage = 'Password must be at least 4 characters.';
      return;
    }
    if (this.role === 'admin') {
      this.auth.login('admin');
      this.router.navigate(['/TrSchedule']);
    } else if (this.role === 'user') {
      this.auth.login('user');
      this.router.navigate(['/products/add']);
    } else {
      this.errorMessage = 'Invalid role';
    }
  }
}
