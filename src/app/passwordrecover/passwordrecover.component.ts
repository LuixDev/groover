import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-passwordrecover',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './passwordrecover.component.html',
  styleUrl: './passwordrecover.component.css'
})
export class PasswordrecoverComponent  implements OnInit {
  email: string = '';
  password: string = '';
  isButtonDisabled = false;
  constructor(
    private http: HttpClient,
    private router: Router

  ) {}

  ngOnInit() {
  }

  usuarioExistente: boolean = false;
 

  
  verificarUnicidad(): void {
    const url = `https://back-groover.vercel.app/unicoemail/${this.email}`;
    this.http.get<{ unique: boolean }>(url).subscribe(
      (response) => {
        this.usuarioExistente = !response.unique; // Actualiza usuarioExistente basado en la respuesta del servidor
        if (this.usuarioExistente) {
          this.isButtonDisabled = false;
        } else {
          this.isButtonDisabled = true;
        }
      },
      (error) => {
        console.error('Error al verificar unicidad:', error);
        // Puedes manejar el error aquí si es necesario
      }
    );
  
  }
  async insertar() {
    const credentials = {

      email: this.email,
     
    };


    
    this.http.post('https://back-groover.vercel.app/recover', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
         
     
          this.router.navigate(['/passwordrecover1', { email: this.email }]);
    
        } else {
        
        }
      },
      async error => {
        alert('error in server'); 
      }
    );
  }
}
