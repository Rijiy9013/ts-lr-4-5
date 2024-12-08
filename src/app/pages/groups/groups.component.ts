import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgeItalicDirective } from './age-italic.directive';
import { StudentService } from '../../services/student.service';
import { GroupService } from '../../services/group.service';
import { BirthCenturyPipe } from './birth-century.pipe';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, AgeItalicDirective, BirthCenturyPipe],
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  groups: any[] = [];
  students: any[] = [];
  selectedGroupId: number | null = null;

  constructor(
    private studentService: StudentService,
    private groupService: GroupService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(
      (groups) => {
        this.groups = groups;
        console.log('Группы загружены:', this.groups);
      },
      (error) => {
        console.error('Ошибка загрузки групп:', error);
      }
    );
  }

  onGroupChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    const groupId = target?.value;

    if (groupId) {
      this.selectedGroupId = +groupId;
      this.loadStudents(this.selectedGroupId);
    } else {
      this.selectedGroupId = null;
      this.students = [];
    }
  }

  loadStudents(groupId: number): void {
    this.studentService.getStudentsByGroup(groupId).subscribe(
      (data) => {
        this.students = data;
        this.cdr.detectChanges();
        console.log('Студенты для группы:', this.students);
      },
      (error) => {
        console.error('Ошибка загрузки студентов:', error);
      }
    );
  }

  get currentGroupNumber(): string {
    const group = this.groups.find((group) => group.id === this.selectedGroupId);
    return group ? group.number : 'Неизвестно';
  }

  navigateToAddStudent(): void {
    this.router.navigate(['/add-student']);
  }

  editStudent(id: number): void {
    this.router.navigate([`/edit-student/${id}`]);
  }
}
