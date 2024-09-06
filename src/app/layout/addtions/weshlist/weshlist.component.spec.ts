import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeshlistComponent } from './weshlist.component';

describe('WeshlistComponent', () => {
  let component: WeshlistComponent;
  let fixture: ComponentFixture<WeshlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeshlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeshlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
