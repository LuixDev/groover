import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-passwordrecover2',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule ],
  templateUrl: './passwordrecover2.component.html',
  styleUrl: './passwordrecover2.component.css'
})
export class Passwordrecover2Component implements OnInit {
  password: string = '';
  email:string | null = null;
  passwordc:string | null = null;
  validarContrasena(): boolean {
    return this.password === this.passwordc;
  }

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router

  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
    this.validar()
   
  }

  async insertar() {
    const credentials = {
      
      email: this.email,
     
      password: this.password,

    };


    
    this.http.post('https://back-groover.vercel.app/recovertwo', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
          this.verifyCode1()
          this.verifyCode2() 
          this.router.navigate(['/']);
          alert('Dato actualizado'); 
        } else {
          alert('¡incorrecto!'); 
        }
      },
      async error => {
        alert('Debe completar todos los campos'); 
      }
    );
  }




  async validar() {
   
    const credentials = {
      
      email: this.email,

    };


    
    this.http.post('https://back-groover.vercel.app/verify2', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
          console.log(response)
          
         
        } else {
        
           console.log(response)
           this.router.navigate(['/notFound']);
         
        }
      },
      async error => {
        alert('Debe completar todos los campos'); 
      }
    );
  }



  
  async verifyCode1() {
    const credentials = {
      email: this.email
    };
    
    this.http.post('https://back-groover.vercel.app/confirmedfalse', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
         
     
        } else {
       
        }
      },
      async error => {
        alert('Error en el servidor vuelva mas tarde'); 
      }
    );
  }

  async verifyCode2() {
    const credentials = {
      email: this.email
    };
    
    this.http.post('https://back-groover.vercel.app/confirmeddelete', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
         
        console.log(response)
        } else {
       
        }
      },
      async error => {
        alert('Error en el servidor vuelva mas tarde'); 
      }
    );
  }
}