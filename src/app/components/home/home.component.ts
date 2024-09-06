import { Component } from '@angular/core';
import { DifferDemoComponent } from '../differ-demo/differ-demo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DifferDemoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
