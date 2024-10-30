import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDetalleProductoComponent } from './mostrar-detalle-producto.component';

describe('MostrarDetalleProductoComponent', () => {
  let component: MostrarDetalleProductoComponent;
  let fixture: ComponentFixture<MostrarDetalleProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarDetalleProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
