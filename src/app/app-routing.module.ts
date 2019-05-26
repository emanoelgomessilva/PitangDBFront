import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AccountGuard } from './guards/account.guard';
import { LoginComponent } from './login/login.component';
import { EditarComponent } from './movie/editar/editar.component';

const routes: Routes = [
  { path: 'filmes', loadChildren: './movie/movie.module#MovieModule' },
  { path: 'series', loadChildren: './serie/serie.module#SerieModule' },
  { path: 'pessoas', loadChildren: './person/person.module#PersonModule' },
  { path: '', pathMatch: 'full', redirectTo: 'filmes' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'filmes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
