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

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
