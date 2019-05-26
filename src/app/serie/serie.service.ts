import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/base/base.service';

@Injectable()
export class SerieService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getDiscover() {
    return this._httpClient.get(`http://localhost:8080/series`)
  }

  getById(id: string) {
    return this._httpClient.get(`http://localhost:8080/series2/find/${id}`)
  }

  deleteById(id: number){
    return this._httpClient.delete(`http://localhost:8080/series/delete?id=${id}`)
  }

  edit(serie,id,titulo,descricao){
    return this._httpClient.put(`http://localhost:8080/series/edit?id=${id}&name=${titulo}&overview=${descricao}`, serie)
  }

  getByTitle(title: string){
    return this._httpClient.get(`http://localhost:8080/series2/findt/${title}`)
  }

}