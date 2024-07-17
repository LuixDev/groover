import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
declare var $: any; // Declara la variable global de jQuery

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 
  checkIfLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/bienvenido']);
    }
  }


  email1: string = '';
  password1: string = '';
  @ViewChild('navbar', { static: true }) navbarRef: ElementRef | undefined;

  constructor
  
  (
    private http: HttpClient,
    private router: Router,
    private renderer: Renderer2,
    
  ) {}

  ngOnInit() {
    this.checkIfLoggedIn();
    this.loadCSS('/assets/templateone/css/ionicons.min.css');
    this.loadCSS('/assets/templateone/css/style.css');
    this.loadCSS('/assets/css/style.css');
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

  private loadCSS(url: string) {
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    this.renderer.appendChild(document.head, link);
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
        alert("Contraseña o usuario incorrecto")
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
