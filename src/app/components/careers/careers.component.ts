import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  constructor(private location: Location){}
  goToBack(){
    this.location.back();
  }

  goToNext(){
    this.location.forward();
  }
}
