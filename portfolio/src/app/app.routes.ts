import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { BlogsComponent } from './screen/blogs/blogs.component';
import { BlogPostComponent } from './screen/blog-post/blog-post.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'blog', component: BlogsComponent},
    {path: 'blog/:slog', component:BlogPostComponent}
];
