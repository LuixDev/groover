import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterCuradorComponent } from './register-curador/register-curador.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

export const routes: Routes = [
    { path: 'bienvenido', component:  BienvenidoComponent  },
    { path: 'principal', component: PrincipalComponent },
    { path: 'registro', component: RegisterCuradorComponent },
    { path: '', redirectTo: 'principal', pathMatch: 'full' }
];
