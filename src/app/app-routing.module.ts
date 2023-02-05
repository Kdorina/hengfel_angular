/*
* File: app-routing.module.ts
* Author: Kovács Dorina
* Copyright: 2023, Kovács Dorina
* Group: Szoft II/N
* Date: 2023-02-05
* Github: https://github.com/Kdorina/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  {path:"cylinder", component:CylinderComponent},
  {path:"about", component:AboutComponent},
  {path:"github", component:GithubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
