import { MovieService } from '../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,private router:Router) { }
    
  movie = {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response;
        })
    });
  }

  goEditMovie(movie) {
    this.router.navigate(['filmes/editar', movie.id])
  }

  goDeleteMovie(movie){
     this._movieService.deleteById(movie.id).subscribe()
     this.router.navigate(['filmes'])
   }

}
