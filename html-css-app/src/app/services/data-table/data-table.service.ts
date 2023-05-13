import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private http: HttpClient) { }

  data(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
