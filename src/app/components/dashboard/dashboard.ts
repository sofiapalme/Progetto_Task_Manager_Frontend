import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  email: string | null = '';


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }


  aggiungiProgetto() {
    this.http.post('/api/progetti', {}).subscribe({
      next: (res) => console.log('Progetto aggiunto', res),
      error: (err) => console.error('Errore:', err)
    });
  }
}