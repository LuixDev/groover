import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-passwordrecover1',
  standalone: true,
  imports: [ FormsModule,HttpClientModule ],
  templateUrl: './passwordrecover1.component.html',
  styleUrl: './passwordrecover1.component.css'
})
export class Passwordrecover1Component implements OnInit {
  email:string | null = null;
  code:string | null = null;
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email');
  }
  async verifyCode() {
    const credentials = {

      email: this.email,
     
      code: this.code,
    };


    
    this.http.post('https://back-groover.vercel.app/verify1', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
         
          this.verifyCode1() 
          this.router.navigate(['/passwordrecover2', { email: this.email }]);
    
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
    const credentials = {
      email: this.email,
     
      code: this.code,
    };
    
    this.http.post('https://back-groover.vercel.app/confirmedtrue', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
         
          this.router.navigate(['/passwordrecover2', { email: this.email }]);
        } else {
       
        }
      },
      async error => {
        alert('Error en el servidor vuelva mas tarde'); 
      }
    );
  }
}