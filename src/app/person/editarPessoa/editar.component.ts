import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
})
export class EditarComponent implements OnInit {

  editarForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl:string;
  error = " ";
  
  pessoa:any = {};
  

  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private _serieService: PersonService) { }

  ngOnInit() {
    this.editarForm = this.formBuilder.group({
      name:['', Validators.required],
      place:['',Validators.required],
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.route.params.subscribe(params => {
      let id = params['id'];

      this._serieService.getById(id)
        .subscribe(response => {
          this.pessoa = response;
          this.editarForm.controls["name"].setValue(this.pessoa.nome)
          this.editarForm.controls["place"].setValue(this.pessoa.pais)
        })
    });

  }

  editar(){
     this._serieService.edit(this.pessoa, this.pessoa.id, this.editarForm.controls["name"].value,
                             this.editarForm.controls["place"].value).subscribe()
    this.router.navigate(["pessoas"])
  }

  onSubmit(){
    this.submitted = true;

    if (this.editarForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';
      
  }

  get f(){return this.editarForm.controls}

}
