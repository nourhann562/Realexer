import { CartService } from './../athuntcation/cart/cart.service';
import { shoping } from './../athunotcation/intrfaces/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { bases } from '../../bases/baseUrl';
import { Root, Root2 } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class ShopingaddService {

  constructor( private _HttpClient:HttpClient , private _CartService:CartService) { }

  onlinePayment(cartId:string , information:shoping):Observable<any>
  {
    return this._HttpClient.post<any>(`${bases.baseurl}/api/v1/orders/checkout-session/${cartId}?url=${bases.baseurlMyLocalwebsite}` , {shipingadd:information } ,{ headers : {
    token : localStorage.getItem('userToken') || '' 

  } } )
  }

  CashPayment(cartId:string , information:shoping):Observable<any>
  {
    return this._HttpClient.post<any>(`${bases.baseurl}/api/v1/orders/${cartId}`, {shipingadd:information } ,{ headers : {
    token : localStorage.getItem('userToken') || '' 

  } } )
  }

 getUserId():Observable<any>
 {
  return this._HttpClient.get<any>(`${bases.baseurl}/api/v1/auth/verifyToken`,{headers:{
    token : localStorage.getItem('userToken') || '' 

  }})
 }

 getOrders(userId:any):Observable<Root2>
 {
    return this._HttpClient.get<Root2>(`${bases.baseurl}/api/v1/orders/user/${userId}`)
}

userId:BehaviorSubject<string>=new BehaviorSubject('');

}
