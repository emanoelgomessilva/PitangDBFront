import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/base/base.service';

@Injectable()
export class PersonService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getDiscover() {
    return this._httpClient.get(`http://localhost:8080/pessoas`)
  }

  getById(id: string) {
    return this._httpClient.get(`http://localhost:8080/pessoas2/find/${id}`)
  }

  deleteById(id: number){
    return this._httpClient.delete(`http://localhost:8080/pessoas?id=${id}`)
  }

  edit(pessoa,id,nome,nascimento){
    return this._httpClient.put(`http://localhost:8080/pessoas?id=${id}&name=${nome}&place_of_birth=${nascimento}`, pessoa)
  }

  getByName(name: string){
    return this._httpClient.get(`http://localhost:8080/pessoas2/findn/${name}`)
  }

}