import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  imie: string = "";

  email:string = "Prosze podac email";

  produkt:string = "";

  ilosc: number = 0;

  wiadomosc: string = "jesli masz uwage wpisz je tutaj";

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("imie: " + this.imie + "email: " + this.email + "produkt: " + this.produkt+ "ilosc: " + this.ilosc + "wiadomosc: " + this.wiadomosc);
  }

  
}
