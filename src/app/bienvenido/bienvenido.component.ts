import { Component, OnInit } from '@angular/core';
declare var $: any; // Declara la variable global de jQuery
@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent  {
  constructor() {}

  openModal() {
    $('#exampleModalCenter').modal('show');
  }

  closeModal() {
    $('#exampleModalCenter').modal('hide');
  }
}