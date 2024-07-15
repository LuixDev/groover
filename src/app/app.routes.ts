import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterCuradorComponent } from './register-curador/register-curador.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { PasswordrecoverComponent } from './passwordrecover/passwordrecover.component';
import { Passwordrecover1Component  } from './passwordrecover1/passwordrecover1.component';
import { Passwordrecover2Component  } from './passwordrecover2/passwordrecover2.component';
import { PagenotexistComponent  } from './pagenotexist/pagenotexist.component';

export const routes: Routes = [
    { path: 'notFound', component:   PagenotexistComponent   },
    { path: 'passwordrecover', component:   PasswordrecoverComponent  },
    { path: 'passwordrecover1', component:  Passwordrecover1Component  },
    { path: 'passwordrecover2', component: Passwordrecover2Component},
    { path: 'confirmacion_email', component:  ConfirmemailComponent  },
    { path: 'bienvenido', component:  BienvenidoComponent  },
    { path: 'principal', component: PrincipalComponent },
    { path: 'registro', component: RegisterCuradorComponent  },
    
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    
    
];
