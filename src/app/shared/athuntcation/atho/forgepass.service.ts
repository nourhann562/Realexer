import { bases } from './../../../bases/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { code, Forgetpass, newPass } from '../intrfaces/forgetpass';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgepassService {

  constructor( private _HttpClient:HttpClient) { }

  ////////////////////////// forget /////////////////////////////////////////////////////////

  forgetpass(forgetMail:Forgetpass):Observable<any>
  {
   return this._HttpClient.post(`${bases.baseurl}/api/v1/auth/forgotPasswords` , forgetMail )
  }

  ////////////////////////// verify ////////////////////////////////////////////////////////////

  verifyCode(sixNumbers:code):Observable<any>
  {
return this._HttpClient.post(`${bases.baseurl}/api/v1/auth/verifyResetCode` , sixNumbers)
  }

  ///////////////////////////////////////////// new Pass ////////////////////////////////////////////////


  Newpass(newpasswor:newPass):Observable<any>
  {
return this._HttpClient.put(`${bases.baseurl}/api/v1/auth/resetPassword`, newpasswor)
  }

}
