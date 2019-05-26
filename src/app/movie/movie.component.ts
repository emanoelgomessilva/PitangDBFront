import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private _movieService: MovieService,
    private _router: Router, private route: ActivatedRoute) {
      this.route.params.subscribe(res => console.log(res.id))
     }
  
  public paginaAtual = 1;
  movies = [];

  ngOnInit() {
    this._movieService.getDiscover().subscribe(
      response => {
        this.movies = response['content'];
      }
    )
  }

  goEdit(movie) {
    
    this._router.navigate(['filmes/detalhes', movie.id])
  }

  findByTitle(title){
    this._movieService.getByTitle(title).subscribe(
      response => {
        this.movies = response['content'];
      }
    )
    console.log(this.movies)
  }

}
