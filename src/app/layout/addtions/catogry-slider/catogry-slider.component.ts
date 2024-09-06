import { Component, OnInit } from '@angular/core';
import { GatogryService } from '../../../category.service';
import { DatOfCatogry } from '../../../category';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-catogry-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './catogry-slider.component.html',
  styleUrl: './catogry-slider.component.scss'
})
export class CatogrySliderComponent implements OnInit{

  lodingScr:boolean=true;

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
        items: 7
      },
      
    },
    nav: true
  }

  constructor(private _GatogryService :GatogryService){}
  ngOnInit(): void {
      this.catoSlider();
  }

  showSliderOfCatogry!: DatOfCatogry[] ;

  catoSlider(){
    this.lodingScr=true;
    this._GatogryService.getCatogry().subscribe({
      next:res=>{
        this.showSliderOfCatogry=res.data;
       // console.log(res.data);
        this.lodingScr=false;
        
      },
      error:err=>{
        console.log(err);
        this.lodingScr=false;
        
      }
    })
  }

}
