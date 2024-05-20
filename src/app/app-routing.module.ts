import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: "", pathMatch:"full", component:CarComponent},
  {path: "cars" , component:CarComponent},
  {path: "cars/brand/:brandId" , component:CarComponent},
  {path: "cars/color/:colorId" , component:CarComponent},
  {path: 'cars/brand/:brandId/color/:colorId', component: CarComponent },
  {path:'car-detail/:carId',component:CarDetailComponent},
  {path:'rentals/add/:carId',component:CarDetailComponent},
  {path: "login" , component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
