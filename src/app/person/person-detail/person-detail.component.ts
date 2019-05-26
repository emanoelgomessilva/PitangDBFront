import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './person-detail.component.html',
})
export class PersonDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _personService: PersonService, private router:Router) { }

  pessoa = {}
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._personService.getById(id)
        .subscribe(response => {
          this.pessoa = response;
        })
    });
  }

  goDeletePessoa(pessoa){
    this._personService.deleteById(pessoa.id).subscribe()
    this.router.navigate(['pessoas'])
  }

  goEditPessoa(serie) {
    this.router.navigate(['pessoas/editar', serie.id])
  }

}
