import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
    {  path: '', component: MovieComponent },
    {  path: 'detalhes/:id', component: MovieDetailComponent },
    {  path: 'editar/:id', component: EditarComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
