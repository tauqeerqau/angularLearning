import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Counter } from './counter/counter';
import { Component } from '@angular/core';
import { MyCode } from './my-code/my-code';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'',component:Login},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'counterApp',component:Counter},
    {path:'my-code', component:MyCode}
];
