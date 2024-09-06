import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/athuntcation/cart/cart.service';
import { FavouritService } from '../../../shared/weshlist/favourit.service';
import { AllProudService } from '../../../shared/athunotcation/atho/all-proud.service';
import { ToastrService } from 'ngx-toastr';
import { viewData } from '../../../shared/athunotcation/intrfaces/all-proud';
import { CatogrySliderComponent } from '../../addtions/catogry-slider/catogry-slider.component';
import { HomeSliderComponent } from '../../addtions/home-slider/home-slider.component';
import { RouterLink } from '@angular/router';
import { SerchPipePipe } from '../../../shared/pipes/serch-pipe.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-prouduct',
  standalone: true,
  imports: [CatogrySliderComponent,HomeSliderComponent,RouterLink,SerchPipePipe,FormsModule],
  templateUrl: './prouduct.component.html',
  styleUrl: './prouduct.component.scss'
})
export class ProuductComponent implements OnInit {

  constructor(private _FavouritService:FavouritService , private _AllProudService:AllProudService ,
     private _CartService:CartService , private toastr: ToastrService){}
     lodingScreen:boolean=true;
     allProud !:viewData[] ;
    //////////////////////////////////////////

  ngOnInit(): void {
        
    this.lodingScreen=true;
    this._AllProudService.allprouduct().subscribe({
      next:(res)=>{
        this.allProud=res.data;
       // console.log(this.allProud)
        this.lodingScreen=false;
        

      },
      error:err=>{
        console.log(err);
        this.lodingScreen=false;
        
      }

    });

    if(typeof localStorage != 'undefined'){
      localStorage.setItem('currentPage','/proud')
    }
  }


  /////////////////////////////////////////
  userWord:string='';



  /////////////// cart add //////////////////////////////////////
  countshop!:number;
  AddToCart(productId: string)
  {
        this._CartService.AddToCart(productId).subscribe({
          next: res => {
            console.log(res);
            this._CartService.shopCount.next(res.numOfCartItems);

            this.toastr.success('Hello world!', 'Toastr fun!');
            
          }
        })
  }


  
  addToFav(productId:string)
  {
    this._FavouritService.addFav(productId).subscribe({
      next:res=>{console.log(res);
        this.toastr.success(res.message)
      }

    })
  }


}
