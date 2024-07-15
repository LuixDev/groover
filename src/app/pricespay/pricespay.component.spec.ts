import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricespayComponent } from './pricespay.component';

describe('PricespayComponent', () => {
  let component: PricespayComponent;
  let fixture: ComponentFixture<PricespayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricespayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricespayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
