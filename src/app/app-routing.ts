import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: {
      title: 'home page'
    }
  },
  {
    path: 'about',
    loadChildren: './pages/pages.module#PagesModule',
    data: {
      title: 'about me'
    }
  }
]


@Ngmodule({
  imports: [],
  exports: [],
})
export class AppRoutingModule { }
