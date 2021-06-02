import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
    },
    {
      path:'piechart',
      component: PiechartComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
