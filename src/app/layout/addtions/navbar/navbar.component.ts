import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LogService } from '../../../shared/athunotcation/atho/log.service';
import { CartService } from '../../../shared/athuntcation/cart/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(public _LogService:LogService  , public _Router:Router ,private _CartService:CartService){

  }

  loging:boolean=false;
  numberOfcart:number=0;
  

ngOnInit(): void {

this._CartService.ViewCart().subscribe({
  next:res=>{
   // console.log('caert' , res);
    this._CartService.shopCount.next(res.numOfCartItems);
    
  }
})
   
  this._LogService.UserDataAfterDecoded.subscribe(()=>{
    if(this._LogService.UserDataAfterDecoded.getValue() != null){
      this.loging=true;
    }
    else{
      this.loging=false;
    }
  })
//////////////////////////////////////////////////////

 this._CartService.shopCount.subscribe({
  next:(res)=>{
    this.numberOfcart=res;
  }
 })
}
logOut(){

  localStorage.removeItem('userToken');
  this._LogService.UserDataAfterDecoded.next(null);
  this._Router.navigate(['login'])
}





}
