import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthCentury',
})
export class BirthCenturyPipe implements PipeTransform {
  transform(birthYear: number): string {
    if (!birthYear) {
      return 'Год рождения неизвестен';
    }

    const century = Math.ceil(birthYear / 100); // Определяем век
    return `Родился в ${century}-м веке нашей эры`;
  }
}
