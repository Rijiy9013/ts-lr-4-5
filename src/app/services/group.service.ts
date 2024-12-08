import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private baseUrl = 'http://localhost:3000/groups';

  constructor(private http: HttpClient) {}

  // Получение всех групп с отладочной информацией
  getGroups(): Observable<any> {
    console.log('Запрос отправлен на:', this.baseUrl); // Отладочная информация
    return this.http.get(this.baseUrl);
  }
}
