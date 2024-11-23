import { Component, Input } from '@angular/core';
// import { TaskComponent } from './task/task.component';
// import { dummyTasks } from '../dummy-tasks';
// import { NewTaskComponent } from "./new-task/new-task.component";
// import { NewTask } from './new-task/new-task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // standalone: true,
  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
   @Input({required: true}) userId !: string;
   @Input({required: true}) userName !: string;
   addingTask = false;
   // tasks = dummyTasks;

   constructor ( private taskService : TaskService ) {}
   
   get selectedUserTasks(){
      // this.addingTask = false;
      return this.taskService.getUserTasks(this.userId);
   }

   updatedTasks(id : string){
      this.taskService.removeUserTasks(id);
   }

   addTasks(){
    console.log("Adding task");
    this.addingTask = true;
   }

   cancelAddingTasks(){
    this.addingTask = false;
   }

   addingNewTask(){
    // this.taskService.postUserTasks(data, this.userId);
    this.addingTask = false;
   }

}
