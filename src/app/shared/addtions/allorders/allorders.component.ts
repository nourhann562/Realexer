import { Component, OnInit } from '@angular/core';
import { ShopingaddService } from '../../services/shopingadd.service';
import { ActivatedRoute } from '@angular/router';
import { Root, Root2 } from '../../interfaces/order';


@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit{
  userId:string='';

  lodingScreen:boolean=false;

  constructor( private _ShopingaddService:ShopingaddService , private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.getUserId();
    
    this._ShopingaddService.getUserId().subscribe({
      next:id=>{console.log( 'yourId',id.decoded.id);

      }
    })

    this._ShopingaddService.userId.subscribe({
      next:res=>{
        //this.userId=res;
        //console.log( 'mass' , this.userId);
        this.lodingScreen=true;
        this._ShopingaddService.getOrders(res).subscribe({
          next: res=>{//console.log(res);
                this.OrderLoops=res;
                this.lodingScreen=false
           }     
          
        })

        
      }
    })
   
  }

  

  


  getUserId()
  {
      this._ShopingaddService.getUserId().subscribe({
        next:UserId=>{
          //console.log(UserId.decoded.id);
          this._ShopingaddService.userId.next(UserId.decoded.id)

        }
      })
  };

  OrderLoops !:any;





  

  
  


  }


