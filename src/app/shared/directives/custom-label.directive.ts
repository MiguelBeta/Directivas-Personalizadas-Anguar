import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color:string = 'red';
  private _errors?: ValidationErrors | null;


  //Apunta al campo de entrada que aparece en pantalla
  @Input() set color( value: string ){
    // console.log({color: value})
    this._color = value;
    this.setStyle();
  }

  @Input() set errors( value: ValidationErrors | null | undefined ){
    this._errors = value;
    this.setErrorMessage();
  }

  //Hace referencia al elemento HTML donde se va a ubicar la informacion en patalla
  constructor( private el: ElementRef<HTMLElement>  ) {
    // console.log('constructor de la directiva')
    // console.log(el);
    this.htmlElement = el;

    // this.htmlElement.nativeElement.innerHTML = 'Hola mundo';
  }
  ngOnInit(): void {
    // console.log('DIrectiva -NgOnInit')
    this.setStyle();
  }

  setStyle():void{
    if( !this.htmlElement ) return;

    //Le asigna el color que llega ingresando a las propiedades que ofrece html
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void{
    //Pregunta si el elemento es valido
    if( !this.htmlElement ) return;
    //Pregunta si el elemento es nulo y limpia los errores
    if( !this._errors ){
      this.htmlElement.nativeElement.innerText = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(errors);

    if( errors.includes('required') ) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

    if( errors.includes('minlength') ){
      this.htmlElement.nativeElement.innerText = 'Este campo debe tener minimo 6 caracteres';
      return;
    }

    if( errors.includes('email') ){
      this.htmlElement.nativeElement.innerText = 'Email incorrecto';
      return;

    }



  }

}
