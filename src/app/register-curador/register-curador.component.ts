import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
declare var $: any; 
@Component({
  selector: 'app-register-curador',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './register-curador.component.html',
  styleUrl: './register-curador.component.css'
})
export class RegisterCuradorComponent {
  emailExistente: boolean = false;
  firstName: string = '';
  lastName: string = '';
  categoria: string = '';
  email1: string = '';
  password1: string = '';
  email: string = '';
  password: string = '';
  isButtonDisabled = false;
  passwordc: string = '';


  validarCampos(): boolean {
    return (
      this.firstName.trim() !== '' &&
      this.lastName.trim() !== '' &&
      this.email.trim() !== '' &&
      this.password.trim() !== '' &&
      this.passwordc.trim() !== ''
    );
  }

  registrarUsuario(): void {
    if (this.validarCampos()) {
      this.isButtonDisabled = true;
      // Aquí procedes con el registro, por ejemplo, enviar los datos al servidor
      console.log('Campos válidos, registrando usuario...');
    } else {
      this.isButtonDisabled = false;
      alert('Por favor complete todos los campos obligatorios.');
    }
  }
  constructor(
    private http: HttpClient,
    private router: Router

  ) {}


 

  verificarUnicidad(): void {
    const url = `https://back-groover.vercel.app/unico/${this.email}`;
    this.http.get<{ unique: boolean }>(url).subscribe(
      (response) => {
     
          if (response.unique) {
            // La API respondió que el email es único
            this.emailExistente = false;
            this.isButtonDisabled = false; // Habilita el botón
          } else {
            // La API respondió que el email no es único
            this.emailExistente = true;
            this.isButtonDisabled = true; // Deshabilita el botón
          }
        },
      (error) => {
        console.error('Error al verificar unicidad:', error);
        // Puedes manejar el error aquí si es necesario
      }
    );
  }
  
  openModal() {
    $('#exampleModalCenter').modal('show');
  }
  validarContrasena(): boolean {
    // Verifica si las contraseñas son iguales
    if (this.password === this.passwordc) {
      this.isButtonDisabled = false;
      return true;
    } else {
      this.isButtonDisabled = true;
      return false;
    }
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


 

  async insertar() {

    if (!this.firstName || !this.lastName || !this.categoria || !this.email || !this.password) {
      
      return;
    }
    else{
    
    }
    const credentials = {
      firstName: this.firstName,
      lastName: this.lastName,
      categoria: this.categoria,
      email: this.email,
      password: this.password,
      
    };
    

    this.http.post('https://back-groover.vercel.app/confirm', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
      
          localStorage.setItem('token', response.token);
     
          this.router.navigate(['/confirmacion_email', { email: this.email, firstName: this.firstName,lastName: this.lastName,  categoria: this.categoria, password: this.password }]);
        } else {
          alert('¡incorrecto!'); 
        }
      },
      async error => {
   
      }
    );
  


  
  }



  async login() {
    const credentials = {
      email1: this.email1,
      password1: this.password1
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    const maxRetryAttempts = 1;
    let currentAttempt = 0;
  
    while (currentAttempt < maxRetryAttempts) {
      try {
        const response: any = await this.http.post('https://back-groover.vercel.app/login', credentials,httpOptions).toPromise();
  
        if (response.success) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user_id', response.user_id);
          this.closeModal()
          this.closeModal1()
          this.router.navigate(['/bienvenido']);
          return; // Successful login, exit the loop
        } else {
          alert("Contraseña o usuario incorrecto")
          // Display error message on the UI
          console.error( response.message);
          localStorage.removeItem('token');
          // You might update the UI to show an error message
          // For example: this.errorMessage = response.message;
          return; // Exit the loop if authentication fails
        }
      } catch (error) {
      
        localStorage.removeItem('token');
        currentAttempt++;
  
        // Optional: Wait for a brief period before the next attempt
        await this.delay(1000); // Adjust the wait time as needed
      }
    }
  
    // If we reach here, it means authentication failed after multiple attempts
    console.error('Error: Unable to authenticate after multiple attempts');
    // You can show a message to the user or take other actions as needed
  }
  

  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
