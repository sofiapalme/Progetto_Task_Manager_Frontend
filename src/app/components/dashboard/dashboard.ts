import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  email: string | null = '';
  username: string | null = '';

  modalOpen = false;

  formData = {
    titolo: '',
    descrizione: '',
    fasi: '',
    collaboratori: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');

    if (this.email) {
      this.http.get<any>(`http://localhost:8080/users/${this.email}`).subscribe({
        next: (res) => {
          this.username = res.username;
          this.email = res.email;
        },
        error: (err) => console.error('Errore recupero utente:', err)
      });
    }
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  submitProgetto() {
    if (!this.formData.titolo || !this.formData.fasi) {
      alert("Titolo e Fasi sono obbligatori");
      return;
    }

    this.http.post('http://localhost:8080/test', this.formData).subscribe({
      next: () => {
        alert("Progetto inviato!");
        this.closeModal();
        this.formData = { titolo: '', descrizione: '', fasi: '', collaboratori: '' };
      },
      error: (err) => console.error("Errore invio:", err)
    });
  }
}
