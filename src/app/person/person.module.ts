import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonRoutingModule } from './person.routing.module';
import { PersonComponent } from './person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonService } from './person.service';
import { EditarComponent } from './editarPessoa/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonComponent,
    PersonDetailComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule { }
