import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieRoutingModule } from './serie.routing.module';
import { SerieComponent } from './serie.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieService } from './serie.service';
import { EditarComponent } from './editarSerie/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SerieComponent,
    SerieDetailComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    SerieRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SerieService
  ]
})
export class SerieModule { }
