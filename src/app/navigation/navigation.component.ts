import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  styleUrls: ['./navigation.component.css'],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
