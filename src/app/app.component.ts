import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  user = { id: '', name: '', avatar: ''};
  selectedUser = false;

  onClick(id: string){
    this.selectedUser = true;
    // console.log("Selected user's id: " + id);
    // filtering using filter function
    this.user = DUMMY_USERS.filter((temp) => {return temp.id === id})[0];
  }


}
