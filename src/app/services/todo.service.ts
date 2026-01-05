import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodo(): Observable<Todo> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos/1', {
        responseType: 'text'
      })
      .pipe(map(text => JSON.parse(text) as Todo));
  }
}
