import { BaseService } from '../services/base/base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }


  getDiscover() {
    return this._httpClient.get(`http://localhost:8080/filmes`)
  }

  getById(id: number) {
    return this._httpClient.get(`${this.URL}filmes2/find/${id}`)
  }

  deleteById(id: number){
    return this._httpClient.delete(`http://localhost:8080/filmes/delete?id=${id}`)
  }

  edit(movie,id,titulo,lingua,descricao,duracao){
    return this._httpClient.put(`http://localhost:8080/filmes/edit?id=${id}&original_language=${lingua}&overview=${descricao}&runtime=${duracao}&title=${titulo}`, movie)
  }

  getByTitle(title: string){
    return this._httpClient.get(`http://localhost:8080/filmes2/findt/${title}`)
  }

}
