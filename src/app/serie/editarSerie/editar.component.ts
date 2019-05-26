import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  editarForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl:string;
  error = " ";
  
  serie:any = {};
  

  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private _serieService: SerieService) { }

  ngOnInit() {
    this.editarForm = this.formBuilder.group({
      name:['', Validators.required],
      descricao:['',Validators.required],
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.route.params.subscribe(params => {
      let id = params['id'];

      this._serieService.getById(id)
        .subscribe(response => {
          this.serie = response;
          this.editarForm.controls["name"].setValue(this.serie.titulo)
          this.editarForm.controls["descricao"].setValue(this.serie.descricao)
        })
    });

  }

  editar(){
     this._serieService.edit(this.serie, this.serie.id, this.editarForm.controls["name"].value,
                             this.editarForm.controls["descricao"].value,).subscribe()
    this.router.navigate(["series"])
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
