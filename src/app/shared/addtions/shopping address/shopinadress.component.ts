import { Component } from '@angular/core';
import { ShopingaddService } from '../../services/shopingadd.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopinadress',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shopinadress.component.html',
  styleUrl: './shopinadress.component.scss'
})
export class ShopinadressComponent {

  constructor( private _ShopingaddService:ShopingaddService , private _ActivatedRoute:ActivatedRoute ,private _Router:Router){}


  shipingaddForm:FormGroup= new FormGroup ({
    details:new FormControl(null,Validators.required),
    phone:new FormControl(null,Validators.required),
    city:new FormControl(null,Validators.required)
  })

  submitOnlinePay()

  {
    if( this.shipingaddForm.valid)
      {
          this._ActivatedRoute.paramMap.subscribe({
            next:p=>{

              this._ShopingaddService.onlinePayment(p.get('cartId')!,this.shipingaddForm.value).subscribe({
                next:res=>{
                  console.log(res);
                  window.open(res.session.url ,'_self');
                }
              })
            }
          })

      }
   
    
  }
  submitCashePay()

  {
    if( this.shipingaddForm.valid)
      {
          this._ActivatedRoute.paramMap.subscribe({
            next:p=>{

              this._ShopingaddService.CashPayment(p.get('cartId')!,this.shipingaddForm.value).subscribe({
                next:res=>{
                  console.log(res);
                  this._Router.navigate(['allorders']);
                }
              })
            }
          })

      }
   
    
  }

}
