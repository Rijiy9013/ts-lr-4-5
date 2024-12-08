import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
  imports: [FormsModule, CommonModule],
})
export class EditStudentComponent implements OnInit {
    student: any = {
      name: '',
      birthYear: null,
      groupId: null,
    };
    currentYear: number = new Date().getFullYear(); // Текущий год
  
    constructor(
      private route: ActivatedRoute,
      private studentService: StudentService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      const studentId = this.route.snapshot.paramMap.get('id');
      if (studentId) {
        this.loadStudent(+studentId);
      }
    }
  
    loadStudent(id: number): void {
      this.studentService.getStudentById(id).subscribe(
        (data) => {
          this.student = data;
        },
        (error) => {
          console.error('Ошибка загрузки студента:', error);
        }
      );
    }
  
    onSubmit(): void {
      this.studentService.updateStudent(this.student).subscribe(
        () => {
          this.router.navigate(['/groups']); // Перенаправление на страницу групп
        },
        (error) => {
          console.error('Ошибка обновления студента:', error);
        }
      );
    }
  }
