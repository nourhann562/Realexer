import { HttpClient } from '@angular/common/http';
import {  Injectable, } from '@angular/core';
import { bases } from '../../../bases/baseUrl';
import { BehaviorSubject, Observable } from 'rxjs';
import { cart } from '../../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService  {
    
  
 
 // userToken={
   // token : localStorage.getItem('userToken') || '' 

  //}

     shopCount:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient ) {

    

  }

  

  AddToCart(productId:string):Observable<any>
  
  {
    return  this._HttpClient.post<any>(`${bases.baseurl}/api/v1/cart`, {productId:productId} , 
        { headers : {
          token : localStorage.getItem('userToken') || '' 
      
        }
          
        }
      )
  };


  ViewCart():Observable<cart>

  {
     return  this._HttpClient.get<cart>(`${bases.baseurl}/api/v1/cart`,
       { headers : {
        token : localStorage.getItem('userToken') || '' 
    
      } })
  }

  updateCartCount(productId:string , count:string):Observable<cart>

  {
     return  this._HttpClient.put<cart>(`${bases.baseurl}/api/v1/cart/${productId}`,{count:count},
       { headers : {
        token : localStorage.getItem('userToken') || '' 
    
      } })
  }

 removeproduct(productId:string):Observable<cart>
  {
     return  this._HttpClient.delete<cart>(`${bases.baseurl}/api/v1/cart/${productId}`,
       { headers : {
        token : localStorage.getItem('userToken') || '' 
    
      } })
  }

  clearCart():Observable<any>
  {
   return this._HttpClient.delete(`${bases.baseurl}/api/v1/cart`, { headers : {
    token : localStorage.getItem('userToken') || '' 

  }});
  }

  AddToCartFromDetielsBtn(productId:string):Observable<any>
  {
    return  this._HttpClient.post<any>(`${bases.baseurl}/api/v1/cart`, {productId:productId} , 
      { headers : {
        token : localStorage.getItem('userToken') || '' 
    
      }
        
      }
    )
  }
}
