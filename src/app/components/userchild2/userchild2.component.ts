import { Component } from '@angular/core';

@Component({
  selector: 'app-userchild2',
  standalone: true,
  imports: [],
  templateUrl: './userchild2.component.html',
  styleUrl: './userchild2.component.css',
  inputs: ['child2AddUser']
})
export class Userchild2Component {
  child2AddUser:any;
}
