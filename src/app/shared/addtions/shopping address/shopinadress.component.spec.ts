import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopinadressComponent } from './shopinadress.component';

describe('ShopinadressComponent', () => {
  let component: ShopinadressComponent;
  let fixture: ComponentFixture<ShopinadressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopinadressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopinadressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
