/*
* File: app.module.ts
* Author: Kovács Dorina
* Copyright: 2023, Kovács Dorina
* Group: Szoft II/N
* Date: 2023-02-05
* Github: https://github.com/Kdorina/
* Licenc: GNU GPL
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { CylinderComponent } from './cylinder/cylinder.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GithubComponent,
    CylinderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
