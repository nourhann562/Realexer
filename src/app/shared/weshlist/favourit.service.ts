import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bases } from '../../bases/baseUrl';
import { CartService } from '../athuntcation/cart/cart.service';
import { Observable } from 'rxjs';
import {  Favourit } from './favorit';
import { Root } from './fav';

@Injectable({
  providedIn: 'root'
})
export class FavouritService {

  constructor( private _HttpClient:HttpClient , private _CartService:CartService) { }

  addFav(productId:string):Observable<Favourit>
  {
  return  this._HttpClient.post<Favourit>(`${bases.baseurl}/api/v1/wishlist` , {productId:productId}, 
       {headers: {
    token : localStorage.getItem('userToken') || '' 

  }}
    )
  }

  showFav():Observable<Root>
  {
  return  this._HttpClient.get<Root>(`${bases.baseurl}/api/v1/wishlist`,
       {headers: {
    token : localStorage.getItem('userToken') || '' 

  }}
    )
  }

  RemoveFromFav(productId:string):Observable<Favourit>
  {
    return this._HttpClient.delete<Favourit>(`${bases.baseurl}/api/v1/wishlist/${productId}`,{headers:
      {
    token : localStorage.getItem('userToken') || '' 

  }
    })
  }
}
