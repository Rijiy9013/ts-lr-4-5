import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class AddStudentComponent {
  studentForm: FormGroup;
  isFormDirty = false; // Для отслеживания изменений в форме
  currentYear = new Date().getFullYear();

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      birthYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      groupId: ['', [Validators.required]],
    });

    this.studentForm.valueChanges.subscribe(() => {
      this.isFormDirty = true; // Отмечаем, что форма была изменена
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value).subscribe(() => {
        this.isFormDirty = false; // Форма сохранена, можно переходить
        this.router.navigate(['/groups']); // Перенаправление на страницу групп
      });
    }
  }

  canDeactivate(): boolean {
    if (this.isFormDirty) {
      return confirm('У вас есть несохранённые изменения. Вы уверены, что хотите покинуть страницу?');
    }
    return true;
  }
}
