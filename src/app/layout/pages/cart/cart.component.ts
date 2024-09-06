import { Component, OnInit } from '@angular/core';
import { StandDataService } from '../../../stand-data.service';
import { CartService } from '../../../shared/athuntcation/cart/cart.service';
import { Data } from '../../../shared/interfaces/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  constructor( private _CartService:CartService ){
   // console.log('hi clint');
    

  }
  ngOnInit(): void {
    

    if(typeof localStorage != 'undefined'){
      localStorage.setItem('currentPage','/cart')
    }

    this.cartProduct();
  };
data!:Data;

   
  cartProduct()
  {
      this._CartService.ViewCart().subscribe({
        next:res=>{
          console.log(res.data);
          this.data=res.data;
        }
      })
  }

  uptadeCount(productId:string , count:number)
  {
    this.removParouduct(productId)

      this._CartService.updateCartCount(productId ,count.toString()).subscribe({
        next:res =>{ console.log(res)
  
          this.data=res.data;
         
         }
  
      })
    }

    removParouduct(productId:string)
    {
       this._CartService.removeproduct(productId).subscribe({
        next:res=>{console.log(res);
          this.data=res.data;
          this._CartService.shopCount.next(res.numOfCartItems)
        }
       })
    }

    clearCart()
    {
      this._CartService.clearCart().subscribe({
        next:res=>{console.log(res);
          this.data=res
          this._CartService.shopCount.next(0)
        }
      })
    }
  
}



