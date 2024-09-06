import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AllProud, viewData } from './../../../shared/athunotcation/intrfaces/all-proud';
import { Component, OnInit } from '@angular/core';
import { AllProudService } from '../../../shared/athunotcation/atho/all-proud.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../shared/athuntcation/cart/cart.service';
import { FavouritService } from '../../../shared/weshlist/favourit.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-prouduct-detials',
  standalone: true,
  imports: [CarouselModule ],
  templateUrl: './prouduct-detials.component.html',
  styleUrl: './prouduct-detials.component.scss'
})
export class ProuductDetialsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 800,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
    },
    nav: true
  }

  constructor(private _toster:ToastrService, private _FavouritService:FavouritService,private _allproudS:AllProudService , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){}

  viewdet!:viewData;

  ngOnInit(): void {
    this.getPByID();
  }

  lodingScreen:boolean=true;

  getPByID()
    {
      let id:String='';

        this._ActivatedRoute.params.subscribe({
          next: parmetar =>{
            id =parmetar['id'];
          }

        })     

           this.lodingScreen=true;
         this._allproudS.getProudById(id).subscribe({
          next:res=>{
            this.lodingScreen=false;
            this.viewdet=res.data;
            //console.log(res.data);
            
          }, 
          error:err=>{
            this.lodingScreen=false;
            console.log(err);
            
          }
         })
  }




  AddDCaertByBtn(productId:string)
  {
    this._CartService.AddToCartFromDetielsBtn(productId).subscribe({
      next: res=>{console.log(res);
      }
    })
  }


  addToFav(productId:string)
  {
    this._FavouritService.addFav(productId).subscribe({
      next:res=>{console.log(res);
        this._toster.success(res.message)
      }

    })
  }
}
