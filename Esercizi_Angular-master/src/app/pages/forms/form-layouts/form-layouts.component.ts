import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
  name : string = null;
  surname : string = null;
  email : string = null;
  checkEmail : string = null;
  check : number[] = [];
  constructor(){}
  send(){
    let checkNome = this.name
    let analysisNAME = /^[a-zA-Z]{1,50}$/    //checkNome.split("")  //usare rejex vedi email pattern - test
    // analysisNAME.map((v)=>{
    //   let a = parseInt(v)
    //   if (isNaN(a)!==true) return alert('nome non valido, sono presenti numeri');
    if(!analysisNAME.test(checkNome) || this.name == null){
    //  alert("nome non corretto, hai inserito valori non accettati")
      this.check[0] = 1;
    }else{
      this.check[0] = 0;
    }

    //_____________controllo cognome
    let checkCognome = this.surname
    let analysisSUR = /^[a-zA-Z]{1,50}$/
    if(!analysisSUR.test(checkCognome)){
    //  alert("cognome non valido, hai inserito valori non accettati")
      this.check[1] = 1;
    }else{
      this.check[1] = 0;
    }
    // let analysisSUR = checkCognome.split("")
    // analysisSUR.map((v)=>{  //usare rejex
    //   let a = parseInt(v)
    //   if (isNaN(a)!==true) alert('cognome non valido, sono presenti numeri');
    // })

    //_____________controllo email
    let analysisEmail = this.email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.[A-Za-z]{2,4}$/
      //[a-zA-Z0-9_\.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{0,4}
    if(!emailPattern.test(analysisEmail)){
    //  alert('email non corretta');
      this.check[2] = 1;
    }else{
      this.check[2] = 0;
    }
    //_____________email uguale
    if (analysisEmail !== this.checkEmail) {
    //  alert('email differenti')
      this.check[3] = 1;
    }else{
      this.check[3] = 0;
    }

    const arr = []
    if (this.check[0]==1) arr.push("nome")
    if (this.check[1]==1) arr.push("cognome")
    if (this.check[2]==1) arr.push("e-mail")
    if (this.check[3]==1) arr.push("controllo e-mail")
    // alert(this.check)
    arr.toString()
    if (this.check[0]==0 && this.check[1]==0 && this.check[2]==0 && this.check[3]==0) {
      alert("tutti i dati sono inseriti correttamente!!")
    }else{
      alert(arr + " non validi")
    }
    // for(var i = 0; i < this.check.length; i++){
    //   if (this.check[i] == 1) {
    //     alert("campo " + (i+1) + " errato")
    //   }
    // }
    this.check = []
  }

  }

//salvare dati nel db e show in una tabella
//fare il crud
