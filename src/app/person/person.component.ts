import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  constructor(private _personService: PersonService,
    private _router: Router) { }

  pessoas = [];

  ngOnInit() {
    this._personService.getDiscover().subscribe(
      response => {
        this.pessoas = response['content'];
      }
    )
  }

  goEdit(pessoa) {
    this._router.navigate(['pessoas/detalhes', pessoa.id])
  }

  findByName(name){
    this._personService.getByName(name).subscribe(
      response => {
        this.pessoas = response['content'];
      }
    )
    console.log(this.pessoas)
  }

}
