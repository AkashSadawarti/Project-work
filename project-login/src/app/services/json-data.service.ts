import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Response } from '../Model/data-model';


@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  public _jsonFile = 'assets/JSON-question.json'
   msg = '';
  constructor(private http: HttpClient) {
      this.msg = "" 
   }

   getData() : Observable<Object>{
    return this.http.get<Response>(`${this._jsonFile}`).pipe(
      map((response) => response.data.map((x) => x.attributes))
    );
   }
}
