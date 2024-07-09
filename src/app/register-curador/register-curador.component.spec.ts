import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCuradorComponent } from './register-curador.component';

describe('RegisterCuradorComponent', () => {
  let component: RegisterCuradorComponent;
  let fixture: ComponentFixture<RegisterCuradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCuradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterCuradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
