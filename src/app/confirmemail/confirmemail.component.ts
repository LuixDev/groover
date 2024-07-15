import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
declare var $: any; 
@Component({
  selector: 'app-confirmemail',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './confirmemail.component.html',
  styleUrl: './confirmemail.component.css'
})
export class ConfirmemailComponent {
 
  code: string = '';
  email: string | null = null;
 
  firstName:string | null = null;
  lastName: string | null = null;
  categoria: string | null = null;
  password: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute

  ) {}


 
  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
    this.firstName = this.route.snapshot.paramMap.get('firstName');
    this.lastName = this.route.snapshot.paramMap.get('lastName');
    this.categoria = this.route.snapshot.paramMap.get('categoria');
    this.password = this.route.snapshot.paramMap.get('password');
  }


  async verifyCode() {
    const credentials = {

      email: this.email,
      code: this.code,
    };

   

    
    this.http.post('https://back-groover.vercel.app/verify', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
         
          this.verifyCode1()
          this.router.navigate(['/bienvenido']);
    
        } else {
          alert('Codigo incorrecto');
        }
      },
      async error => {
        alert('Debe completar todos los campos'); 
      }
    );



      

  }


  async verifyCode1() {
    const credentials1 = {
      email: this.email,
      imagen: "https://ionicframework.com/docs/img/demos/avatar.svg",
      firstName: this.firstName,
      lastName: this.lastName,
      categoria: this.categoria,
      password: this.password,
    };


    this.http.post('https://back-groover.vercel.app/registrar', credentials1).subscribe(
      async (response: any) => {
        if (response.success) {
    
        } else {
       
        }
      },
      async error => {
        alert('Debe completar todos los campos'); 
      }
    );
  }

  




}
