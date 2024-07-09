import { Component } from '@angular/core';
declare var $: any; 
@Component({
  selector: 'app-register-curador',
  standalone: true,
  imports: [],
  templateUrl: './register-curador.component.html',
  styleUrl: './register-curador.component.css'
})
export class RegisterCuradorComponent {
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
