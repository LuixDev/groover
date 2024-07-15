import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passwordrecover1Component } from './passwordrecover1.component';

describe('Passwordrecover1Component', () => {
  let component: Passwordrecover1Component;
  let fixture: ComponentFixture<Passwordrecover1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passwordrecover1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Passwordrecover1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
