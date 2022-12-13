import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  nameandlast: string = "";
  email: string = "Proszę wpisać email";
  product: string = "";
  count: number = 1;
  attention: string = "Jezeli masz uwagi wpisz je";

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("imie: " + this.nameandlast + "email: " + this.email + "produkt: " + this.product + " ilosc: " + this.count + " wiadomosc: " + this.attention);
  }
}
