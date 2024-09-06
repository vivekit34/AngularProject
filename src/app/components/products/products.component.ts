import { Component } from '@angular/core';
import * as data from './prducts.json'
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  myProducts=(data as any).default;
  p:any;
  filteredArray=[];
  sortProducts(s:string){

  }


}
