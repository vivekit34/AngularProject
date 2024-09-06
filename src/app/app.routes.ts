import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {path: 'users', component: EmployeeCRUDComponent },
    {path: 'products', component: ProductsComponent },
    {path: 'aboutus', component: AboutusComponent },
    {path: 'careers', component: CareersComponent },
    {
        path: 'productDetails/:id', 
        component: ProductDetailsComponent 
    },
];
