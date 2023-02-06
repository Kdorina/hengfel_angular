/*
* File: cylinder.component.ts
* Author: Kovács Dorina
* Copyright: 2023, Kovács Dorina
* Group: Szoft II/N
* Date: 2023-02-05
* Github: https://github.com/Kdorina/
* Licenc: GNU GPL
*/


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.scss']
})
export class CylinderComponent implements OnInit{

  cylinderForm!: FormGroup;
  show:any;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
  this.cylinderForm = this.formBuilder.group({
    radius:['', Validators.required],
    length:['', Validators.required],
    result:['']
  })
  }

  calcButton(){
    this.Calculation();
    this.show = true
  }

  Calculation(){
    let radius = Number(this.cylinderForm.value.radius);
    let length = Number(this.cylinderForm.value.length);

    let result = 2*Math.PI*radius*(radius+length);
    this.cylinderForm.patchValue({result: result})
  }
}
