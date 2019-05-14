import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {

  num1 : number = null;
  num2 : number = null;
  risultato : number = null;
  inputNome : string = null;
  inputCognome :string = null;
  resConcat : string = null;

  constructor(){}

  somma(){
    this.risultato = this.num1+this.num2;
  }
  sottrazione(){
    this.risultato = this.num1-this.num2;
  }
  moltiplicazione(){
    this.risultato = this.num1*this.num2;
  }
  divisione(){
    this.risultato = this.num1/this.num2;
  }
  concatena(){
    this.resConcat = this.inputNome.concat(" " + this.inputCognome);
  }


  // num1: number ='par1';
  // somma(f: NgForm) {
  //   f.value.res = parseFloat(f.value.num1)+parseFloat(f.value.num2);
  // }
  // sottrazione(f: NgForm) {
  //   f.value.res = parseFloat(f.value.num1)-parseFloat(f.value.num2);
  // }
  // moltiplicazione(f: NgForm) {
  //   f.value.res = parseFloat(f.value.num1)*parseFloat(f.value.num2);
  // }
  // divisione(f: NgForm) {
  //   f.value.res = parseFloat(f.value.num1)/parseFloat(f.value.num2);
  // }
  //--------------------
  // somma(){
  //   let x = (<HTMLInputElement>document.getElementById('par1')).value;
  //   let y = (<HTMLInputElement>document.getElementById('par2')).value;
  //   let somma = (parseFloat(x)+ parseFloat(y))
  //   let a = String(somma)
  //   return (<HTMLInputElement>document.getElementById('risultato')).value = a;
  // }
  //
  // sottrazione(){
  //   let x = (<HTMLInputElement>document.getElementById('par1')).value;
  //   let y = (<HTMLInputElement>document.getElementById('par2')).value;
  //   let sottrazione = (parseFloat(x)-parseFloat(y))
  //   let a = String(sottrazione)
  //   return (<HTMLInputElement>document.getElementById('risultato')).value = a;
  // }
  //
  // moltiplicazione(){
  //   let x = (<HTMLInputElement>document.getElementById('par1')).value;
  //   let y = (<HTMLInputElement>document.getElementById('par2')).value;
  //   let moltiplicazione = (parseFloat(x)*parseFloat(y))
  //   let a = String(moltiplicazione)
  //   return (<HTMLInputElement>document.getElementById('risultato')).value = a;
  // }
  //
  // divisione(){
  //   let x = (<HTMLInputElement>document.getElementById('par1')).value;
  //   let y = (<HTMLInputElement>document.getElementById('par2')).value;
  //   let divisione = (parseFloat(x)/parseFloat(y))
  //   let a = String(divisione)
  //   return (<HTMLInputElement>document.getElementById('risultato')).value = a;
  // }
  //
  // concatena(){
  //   let x = (<HTMLInputElement>document.getElementById('inputNome')).value;
  //   let y = (<HTMLInputElement>document.getElementById('inputCognome')).value;
  //   let concatena = x.concat(" " + y)
  //   return (<HTMLInputElement>document.getElementById('resConcat')).value = concatena;
  // }
}
