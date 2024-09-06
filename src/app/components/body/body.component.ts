import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { ProductsComponent } from '../products/products.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { MyModelComponent } from '../my-model/my-model.component';
import { PipesComponent } from '../pipes/pipes.component';
import { UserCrudComponent } from '../user-crud/user-crud.component';
import { ComponentLifeCycleComponent } from '../component-life-cycle/component-life-cycle.component';
import { UserHttpClientComponent } from '../user-http-client/user-http-client.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { FormDemo1Component } from '../form-demo1/form-demo1.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';
import { FormDemo3Component } from '../form-demo3/form-demo3.component';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [UserComponent, ProductsComponent, EmployeeCRUDComponent, 
    MyModelComponent, PipesComponent, UserCrudComponent, ComponentLifeCycleComponent, UserHttpClientComponent, ObservableDemo1Component, FormDemo1Component, FormDemo2Component, FormDemo3Component, HeaderComponent, CarouselComponent, RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
