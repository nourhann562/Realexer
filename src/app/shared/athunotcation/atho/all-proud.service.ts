import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bases } from '../../../bases/baseUrl';
import { Observable } from 'rxjs';
import { AllProud, viewData } from '../intrfaces/all-proud';

@Injectable({
  providedIn: 'root'
})
export class AllProudService {

  constructor( private _HttpClient:HttpClient) { }
  allprouduct():Observable<AllProud>
  {
    return this._HttpClient.get<AllProud>(`${bases.baseurl}/api/v1/products`)
  }

  getProudById(proudId:any):Observable<{data:viewData}>
  {
      return this._HttpClient.get<{data:viewData}>(`${bases.baseurl}/api/v1/products/${proudId}`)
  }
}
