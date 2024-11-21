import { type NewTask } from "./new-task/new-task.model";
import { type Task } from "./task/task.model";
import { dummyTasks } from "../dummy-tasks";
import { Injectable, Injector } from "@angular/core";


@Injectable({providedIn : 'root'})
export class TaskService {
    private tasks = dummyTasks;

    constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId : string){
        return this.tasks.filter((task : Task) => {
            return task.userId === userId;
        });
    }
    
    removeUserTasks(id : string){
        this.tasks =  this.tasks.filter((task) => {
            return task.id !== id;
        });
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    postUserTasks(data : NewTask, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: data.title,
            summary: data.summary,
            dueDate: data.date
        })
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}