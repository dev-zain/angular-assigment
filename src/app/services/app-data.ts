import { Injectable } from '@angular/core';

export interface Task {
  type: 'task';
  title: string;
  done: boolean;
}

export interface Note {
  type: 'note';
  text: string;
}

export class Student {
  constructor(
    public firstName: string,
    public lastName: string,
    public credits: number
  ) {}

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  title: string = 'Personal Calendar App';
  semester: number = 3;
  isActive: boolean = true;

  student: Student = new Student('Zain', 'Ali', 23);
  grades: number[] = [1.7, 2.3, 1.3];

  averageGrade(): number {
    const sum = this.grades.reduce((acc, g) => acc + g, 0);
    return Math.round((sum / this.grades.length) * 100) / 100;
  }

  creditsNextSemester(): number {
    return this.student.credits + 6;
  }

  items: (Task | Note)[] = [
  { type: 'task', title: 'Buy groceries', done: false },
  { type: 'note', text: 'Angular lecture at 10am' },
  { type: 'task', title: 'Finish WebTech assignment', done: true },
  { type: 'note', text: 'Meeting with project group' },
];


}
