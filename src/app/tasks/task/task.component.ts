import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // @Input() title !: string;
  // @Input()  summary!: string;
  // @Input() date!: string; 
  @Input() task !: Task;
  @Output() complete = new EventEmitter<string>();
  taskService = inject(TaskService);

  onCompleteTask(){
    // this.complete.emit(this.task.id);
    this.taskService.removeUserTasks(this.task.id);
    this.complete.emit();
  }
}
