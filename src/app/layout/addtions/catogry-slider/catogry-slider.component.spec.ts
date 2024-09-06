import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogrySliderComponent } from './catogry-slider.component';

describe('CatogrySliderComponent', () => {
  let component: CatogrySliderComponent;
  let fixture: ComponentFixture<CatogrySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogrySliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatogrySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
