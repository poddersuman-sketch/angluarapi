import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { AuthService } from '../auth-service';
import { response } from 'express';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  template: `
  <div>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label for="email">Email</label>
      <input id="email" type="email" formControlName="email">
      <label for="password">Password</label>
      <input id="password" type="password" formControlName="password">
      <button type="submit" [disabled]="!loginForm.valid">Login</button> 
      <p>{{ loginstatus }}</p>
    </form>
  </div>
  `,
  styleUrl: './login-component.css',
})
export class LoginComponent {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);
    loginstatus : string = '';
    loginForm=new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  onSubmit()
  {
    if(this.loginForm.valid){
      //console.log('LOgged in',this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login success', response);
          this.loginstatus = 'Login success';
          this.authService.isLoggedOn(true);
          this.router.navigate(['/']);
          
          
        },
        error: (err) => 
        {
          this.loginstatus = 'Login failed.';
          console.error('Login failed', err);
        }
      });
    }
  }

}
