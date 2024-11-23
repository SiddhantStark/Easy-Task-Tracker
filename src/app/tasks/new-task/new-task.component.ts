import { Component, EventEmitter, Output, signal, Input, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from './new-task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input() userId !: string; 
  @Output() cancelClick = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary ='';
  enteredDate = '';
  taskService = inject(TaskService);

  onCancelClick(){
    this.cancelClick.emit();
  }

  onSubmit(){
    this.taskService.postUserTasks({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    } , this.userId);
    this.addNewTask.emit();
  }
}
