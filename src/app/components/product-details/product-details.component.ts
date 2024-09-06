import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  prod: any;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient){};

  ngOnInit(){
    this.activatedRoute.params.subscribe((param)=>
    {
      const id=+param['id'];
    this.httpClient.get(`https://fakestoreapi.com/products/${id}`).subscribe((data: any)=>{
      this.prod=data;
    });
  });
  }
}
