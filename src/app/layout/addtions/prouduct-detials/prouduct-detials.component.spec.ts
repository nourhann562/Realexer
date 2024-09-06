import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductDetialsComponent } from './prouduct-detials.component';

describe('ProuductDetialsComponent', () => {
  let component: ProuductDetialsComponent;
  let fixture: ComponentFixture<ProuductDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProuductDetialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProuductDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
