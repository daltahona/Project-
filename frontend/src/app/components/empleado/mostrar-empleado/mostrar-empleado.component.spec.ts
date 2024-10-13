import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEmpleadoComponent } from './mostrar-empleado.component';

describe('MostrarEmpleadoComponent', () => {
  let component: MostrarEmpleadoComponent;
  let fixture: ComponentFixture<MostrarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
