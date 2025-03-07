import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoDatosComponent } from './ingreso-datos.component';

describe('IngresoDatosComponent', () => {
  let component: IngresoDatosComponent;
  let fixture: ComponentFixture<IngresoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresoDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
