import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerieComponent } from './serie.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { EditarComponent } from '../serie/editarSerie/editar.component';

const routes: Routes = [
    {  path: '', component: SerieComponent },
    {  path: 'detalhes/:id', component: SerieDetailComponent },
    {  path: 'editar/:id', component: EditarComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SerieRoutingModule { }