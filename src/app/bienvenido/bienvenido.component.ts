import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
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
  cerrarSesion() {
    localStorage.removeItem('token');
   
  }
}