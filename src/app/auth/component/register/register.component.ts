import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  passwordVisible = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      // Make a request to reqres.in
      const userData = {
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password
      };
      console.log(userData)
      this.authService.register(userData).subscribe({
        next: response => {
          console.log('Registration successful:', response);
          localStorage.setItem("token", response.token);
          this.router.navigateByUrl('/home');
          // You can redirect or perform other actions upon successful registration
        },
        error: error => {
          console.error('Registration failed:', error);
        }
      });
    }
  }
}
