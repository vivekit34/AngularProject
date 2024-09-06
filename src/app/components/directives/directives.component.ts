import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
employees= [{name:'Vivek', salary:20000, age:30}, {name:'Anil', salary:20000, age:30},{name:'Ramesh', salary:20000, age:30}];
}
