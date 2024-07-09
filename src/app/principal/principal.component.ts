import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
declare var $: any; // Declara la variable global de jQuery
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent  {
  @ViewChild('navbar', { static: true }) navbarRef: ElementRef | undefined;
  constructor(private renderer: Renderer2) { }

  toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
        menu.classList.toggle('visible');
    }
  
  }
  openModal() {
    $('#exampleModalCenter').modal('show');
  }

  closeModal() {
    $('#exampleModalCenter').modal('hide');
  }

  

  openModal1() {
    $('#exampleModal').modal('show');
  }

  closeModal1() {
    $('#exampleModal').modal('hide');
  }

  




  

}