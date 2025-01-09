import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoursesComponent } from '../courses/courses.component';


@NgModule({
  declarations: [HomeComponent,CoursesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { 
  constructor(){
    console.log('HomeModule loaded');
  }
}
