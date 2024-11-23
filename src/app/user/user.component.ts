import { Component, signal, computed, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
// import { CardComponent } from "../shared/card/card.component";

let randInd = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // selected_user = signal(DUMMY_USERS[randInd]);
  // // get functionality of TypeScript
  // imagePath = computed(() => 'assets/users/' + this.selected_user().avatar);
  // @Input({required: true})
  // id !: string;

  // @Input({required: true})
  // avatar!: string;
  
  // @Input({required: true})
  // name!: string;
  @Input({required: true })
  user!: User

  @Input({required: true})
  selected !: boolean

  @Output() select = new EventEmitter<string>();


  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  get userName(){
    return this.user.name;
  }

  onSelectUser(){
    // console.log(this.selected_user);
    // let randInd = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selected_user.set(DUMMY_USERS[randInd]);
    this.select.emit(this.user.id);
  }
}
