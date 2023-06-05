import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToDo } from '../model/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private message: string;
  private BASE_URL: string = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.message = '';
  }

  createTask(todo: ToDo): Observable<Object> {
    return this.http.post(`${this.BASE_URL}`, todo)
  }

  getList(): Observable<Object> {
    return this.http.get(`${this.BASE_URL}`);
  }

  updateTask(id : ToDo): Observable<Object> {
    return this.http.put(`${this.BASE_URL}`,id)
  }

  deleteTask(task: ToDo): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${task.id}`)
  }
}