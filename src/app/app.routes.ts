import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: 'groups/:groupNumber', component: GroupsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'add-student', component: AddStudentComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: '', redirectTo: '/greeting', pathMatch: 'full' },
  { path: '**', redirectTo: '/greeting' }
];
