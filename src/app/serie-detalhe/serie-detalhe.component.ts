import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../services/serie.service';

@Component({
  selector: 'app-serie-detalhe',
  templateUrl: './serie-detalhe.component.html',
  styleUrls: ['./serie-detalhe.component.css']
})
export class SerieDetalheComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, 
              private _serieService:SerieService) {}
  serie={}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params=> {
      let id = params['id'];
      this._serieService.getById(id).subscribe(response => this.serie = response)
    })
  }

}
