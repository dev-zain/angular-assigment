import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  model = {
    email: '',
    password: '',
    remember: false,
  };

  submitted = false;

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.submitted = true;

    
  }
}
