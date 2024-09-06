import { Component, input } from '@angular/core';

@Component({
  selector: 'app-userchild1',
  standalone: true,
  imports: [],
  templateUrl: './userchild1.component.html',
  styleUrl: './userchild1.component.css',
  inputs: ['userList', 'child1DeleteUser']
})
export class Userchild1Component {
  userList:any;
  child1DeleteUser:any;
}
