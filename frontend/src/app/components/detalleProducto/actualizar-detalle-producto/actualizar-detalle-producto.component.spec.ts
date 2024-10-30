import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDetalleProductoComponent } from './actualizar-detalle-producto.component';

describe('ActualizarDetalleProductoComponent', () => {
  let component: ActualizarDetalleProductoComponent;
  let fixture: ComponentFixture<ActualizarDetalleProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarDetalleProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
