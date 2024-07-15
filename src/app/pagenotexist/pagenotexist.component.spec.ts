import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotexistComponent } from './pagenotexist.component';

describe('PagenotexistComponent', () => {
  let component: PagenotexistComponent;
  let fixture: ComponentFixture<PagenotexistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagenotexistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagenotexistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
