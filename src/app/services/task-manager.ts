import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../models/task';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskManager {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = "http://localhost:8080";

  async getTasks(): Promise<Task[]> {
    const response = this.http.get<Task[]>(`${this.baseUrl}/task`)
    return firstValueFrom(response);
  }

  async getTaskForFase(fase: string): Promise<Task> {
    const response = this.http.get<Task[]>(`${this.baseUrl}/task/fase/${fase}`)
    const taskFase = await firstValueFrom(response);
    return taskFase[0];
  }

  async getTaskForEtichetta(etichetta: string): Promise<Task> {
    const response = this.http.get<Task[]>(`${this.baseUrl}/task/etichetta/${etichetta}`)
    const taskEtichetta = await firstValueFrom(response);
    return taskEtichetta[0];
  }

  async getTaskForAssegnatario(assegnatario: string): Promise<Task> {
    const response = this.http.get<Task[]>(`${this.baseUrl}/task/assegnatario/${assegnatario}`)
    const taskAssegnatario = await firstValueFrom(response);
    return taskAssegnatario[0];
  }

  async getTaskForScadenza(scadenza: string): Promise<Task> {
    const response = this.http.get<Task[]>(`${this.baseUrl}/task/scadenza/${scadenza}`)
    const taskScadenza = await firstValueFrom(response);
    return taskScadenza[0];
  }

  async getTaskForProgetto(idProgetto: string): Promise<Task> {
    const response = this.http.get<Task[]>(`${this.baseUrl}/task/progetto/${idProgetto}`)
    const taskProgetto = await firstValueFrom(response);
    return taskProgetto[0];
  }

  async modifyTask(task: Task, id: string): Promise<Task> {
    const response = this.http.put<Task>(`${this.baseUrl}/task/${id}`, task);
    return firstValueFrom(response);
  }

  async createTask(task: Task): Promise<Task> {
    const response = this.http.post<Task>(`${this.baseUrl}/task/create`, task);
    return firstValueFrom(response);
  }

  async deleteTask(id: string): Promise<void> {
    const response = this.http.delete<void>(`${this.baseUrl}/task/elimina/${id}`);
    return firstValueFrom(response);
  }
}
