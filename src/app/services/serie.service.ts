import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SerieService extends BaseService{
  API_KEY: any;

  constructor(httpClient:HttpClient) {
    super(httpClient);
   }

  getDiscover(){
    return this._httpClient.get(`${this.URL}`)
  }

  getById(id: string){
    return this._httpClient.get(`${this.URL}tv/${id}?api_key=${this.API_KEY}&language=pt-BR`)
  }

}
