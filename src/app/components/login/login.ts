import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const payload = {
      email: this.email,
      password: this.password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post<{ accessToken: string }>('http://localhost:8080/auth/login', payload, { headers })
      .subscribe({
        next: (response) => {
          console.log('Login OK!', response);
          
          if (response?.accessToken) {
            localStorage.setItem('token', response.accessToken);
            this.router.navigate(['/dashboard'])
          }
        },
        error: (err) => {
          this.errorMessage = 'Email o password errati';
          console.error(err);
        }
      });
  }
}
