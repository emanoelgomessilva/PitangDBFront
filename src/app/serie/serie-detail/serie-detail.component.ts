import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _serieService: SerieService, private router:Router) { }

  serie = {}
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._serieService.getById(id)
        .subscribe(response => {
          this.serie = response;
        })
    });
  }

  goDeleteSerie(serie){
    this._serieService.deleteById(serie.id).subscribe()
    this.router.navigate(['series'])
  }

  goEditSerie(serie) {
    this.router.navigate(['series/editar', serie.id])
  }

}
