import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { EditarComponent } from '../person/editarPessoa/editar.component';

const routes: Routes = [
    {  path: '', component: PersonComponent },
    {  path: 'detalhes/:id', component: PersonDetailComponent },
    {  path: 'editar/:id', component: EditarComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule { }