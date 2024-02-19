import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-pages.component.html',
  styleUrl: './product-pages.component.css'
})
export class ProductPagesComponent {

  //constructor( private fb: FormBuilder );
  //2da forma de crear un formulario
  private fb = inject( FormBuilder );

  public color:string = 'green';

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(6), Validators.email ] ]
  });

  changeColor(){
    // const color =  '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    // this.color = color;
    // Otra forma
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

  }





}

