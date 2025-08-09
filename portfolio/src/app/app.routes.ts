import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { BlogsComponent } from './screen/blogs/blogs.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'blog', component: BlogsComponent}
];
