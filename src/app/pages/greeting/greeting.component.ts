import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',
  standalone: true,  
  imports: [FormsModule, CommonModule],
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  userName: string = '';
  greetingMessage: string = '';

  ngOnInit(): void {
    console.log('GreetingComponent initialized');
  }

  ngOnChanges(): void {
    console.log('GreetingComponent changed');
  }

  ngDoCheck(): void {
    console.log('GreetingComponent checked');
  }

  ngOnDestroy(): void {
    console.log('GreetingComponent destroyed');
  }

  greet(): void {
    this.greetingMessage = `Привет, ${this.userName}!`;
  }
}
