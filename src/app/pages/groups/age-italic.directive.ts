import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAgeItalic]',
})
export class AgeItalicDirective implements OnInit {
  @Input('appAgeItalic') birthYear!: number;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.birthYear;

    if (age < 18) {
      this.el.nativeElement.style.fontStyle = 'italic';
    }
  }
}
