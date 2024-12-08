import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getStudentsByGroup(groupId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?groupId=${groupId}`);
  }

  addStudent(student: { name: string; birthYear: number; groupId: number }): Observable<any> {
    return this.http.post('http://localhost:3000/students', student);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  updateStudent(student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${student.id}`, student);
  }
}
