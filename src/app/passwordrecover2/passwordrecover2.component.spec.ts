import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passwordrecover2Component } from './passwordrecover2.component';

describe('Passwordrecover2Component', () => {
  let component: Passwordrecover2Component;
  let fixture: ComponentFixture<Passwordrecover2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passwordrecover2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Passwordrecover2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
