import {  Root, show } from './../../../shared/weshlist/fav';

import { Component, OnInit } from '@angular/core';
import { FavouritService } from '../../../shared/weshlist/favourit.service';
import { ToastrService } from 'ngx-toastr';
import { Favourit } from '../../../shared/weshlist/favorit';

@Component({
  selector: 'app-weshlist',
  standalone: true,
  imports: [],
  templateUrl: './weshlist.component.html',
  styleUrl: './weshlist.component.scss'
})
export class WeshlistComponent implements OnInit {

  constructor(private _favouritservs:FavouritService , private toastr: ToastrService ,){}
  ngOnInit(): void {
    this.showFavourit();
  }

  showMyFav!:show[];
  showFavourit()
  {
    this._favouritservs.showFav().subscribe({
      next:res=>{console.log(res);
        this.showMyFav=res.data;
        

      }
    })
  }
   
 

  remove(productId: string)
  {
   
    this._favouritservs.RemoveFromFav(productId).subscribe({
      next:res=>{
        this.toastr.error('removeee');
        console.log(res);
       
        
       
        
      }
    })
  }

  
}
