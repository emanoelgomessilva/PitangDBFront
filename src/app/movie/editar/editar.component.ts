import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { MovieService } from '../movie.service';

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
  
  movie:any = {};
  

  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private _movieService: MovieService) { }

  ngOnInit() {
    this.editarForm = this.formBuilder.group({
      name:['', Validators.required],
      descricao:['',Validators.required],
      lingua:['',Validators.required],
      duracao:['',Validators.required]
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.route.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response;
          this.editarForm.controls["name"].setValue(this.movie.titulo)
          this.editarForm.controls["descricao"].setValue(this.movie.descricao)
          this.editarForm.controls["lingua"].setValue(this.movie.lingua)
          this.editarForm.controls["duracao"].setValue(this.movie.duracao)
        })
    });

  }

  editar(){
     this._movieService.edit(this.movie, this.movie.id, this.editarForm.controls["name"].value,
                             this.editarForm.controls["lingua"].value,
                             this.editarForm.controls["descricao"].value,
                             this.editarForm.controls["duracao"].value).subscribe()
    this.router.navigate(["filmes"])
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
