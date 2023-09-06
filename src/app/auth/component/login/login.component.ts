import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  loading = false;

  passwordVisible = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
      remember: [false]
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      // Simulate login request
      const loginData = this.loginForm.value;
      this.authService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          localStorage.setItem("token", response.token);
          this.router.navigateByUrl('/home');
          // Reset form and loading state
          this.loginForm.reset();
          this.loading = false;
        },
        error: (error) => {
          console.error('Login error', error);
          // Reset loading state
          this.loading = false;
        }
      });
    }
  }
}
